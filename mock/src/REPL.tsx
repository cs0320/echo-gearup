import './REPL.css';
import { useState, Dispatch, SetStateAction } from 'react';

// Remember that parameter names don't necessarily need to overlap;
// I could use different variable names in the actual function.
interface ControlledInputProps {
  value: string, 
  // This type comes from React+TypeScript. VSCode can suggest these.
  //   Concretely, this means "a function that sets a state containing a string"
  setValue: Dispatch<SetStateAction<string>>,
  ariaLabel: string 
}

// Input boxes contain state. We want to make sure React is managing that state,
//   so we have a special component that wraps the input box.
function ControlledInput({value, setValue, ariaLabel}: ControlledInputProps) {
  return (
    <input value={value} 
           onChange={(ev) => setValue(ev.target.value)}
           aria-label={ariaLabel}
           ></input>
  );
}

// You can also mix the interface (as type) with concrete field names, like this:
function REPLInput() {
  // Remember: let React manage state in your webapp. 
  // You don't always need the <...> annotation, but I like to include it for clarity.

  // How many button presses have been seen?
  const [pressCounter, setPressCounter] = useState<number>(0);
  // What is the contents of the input box?
  const [commandString, setCommandString] = useState<string>('');

  return (
    <div className="REPL-input">
      
      {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
          braces, so that React knows it should be interpreted as TypeScript */}
      
      {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
          into a single unit, which makes it easier for screenreaders to navigate. */}
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
      </fieldset>   
      
      <div>
        {/* This button has an event handler, which is just a TypeScript function.
            When the button is clicked, the press counter is incremented. Notice that 
            our code here DOES NOT update the counter label! React does it for us. */}
        <button onClick={() => {  
              setPressCounter(current => current + 1)
          }}
          aria-label={`Click to run: ${pressCounter}`}>
          
          {/* The text displayed on the button */}
          {`Run! (${pressCounter} clicks so far)`}
        </button>
      </div>
    </div>
  );  
}

/* 
  You'll want to expand this component (and others) for the sprints! Remember 
  that you can pass "props" as function arguments. If you need to handle state 
  at a higher level, just move up the hooks and pass the state/setter as a prop.
  
  You don't need to do that for this gearup.
*/
export default function REPL() {
  return (
    <div className="full-REPL">   
      <REPLInput />
    </div>
  );
}
