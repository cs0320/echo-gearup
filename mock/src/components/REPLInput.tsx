import '../styles/main.css';
import { useState} from 'react';
import { ControlledInput } from './ControlledInput';

interface REPLInputProps {
  history: string[];
  setHistory: (data: string[]) => void;
}

// You can also mix the interface (as type) with concrete field names, like this:
export function REPLInput(props: REPLInputProps) {
    // Remember: let React manage state in your webapp. 
    // You don't always need the <...> annotation, but I like to include it for clarity.
    
    // What is the contents of the input box?
    const [commandString, setCommandString] = useState<string>('');
    // Keeps track of the current count of clicks
    const [pressCounter, setPressCounter] = useState<number>(0);

    /**
     * Handles the submit button being clicked or the enter key being pressed!
     * You may want to make this function more sophisticated to add real
     * command logic, but for now it just adds the text to the history box.
     */
    function handleSubmit() {
      props.setHistory([...props.history, commandString]);
      setCommandString("");
    }
    
    function incrementCounter(){
      setPressCounter(current => current + 1)
    }
    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">
            {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
            {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
            <fieldset>
              <legend>Enter a command:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"} submitHandler={handleSubmit}/>
            </fieldset>
            <button className="submit-button"  onClick={incrementCounter} aria-label={`Click to run: ${pressCounter}`}>
              {/* The text displayed on the button */}
              {`Run! (${pressCounter} clicks so far.)`}
            </button>
            {/* TODO: Add a button that makes the fetch request */}
            <button onClick={ () => {
              fetch('http://localhost:3232')
              .then(r => r.json())
              .then(r => setPressCounter(current => current + r))
              }}>Fetch for fun times!
            </button>
        </div>
    );
  }