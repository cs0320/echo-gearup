import '../styles/main.css';

interface REPLHistoryProps {
    history: string[];
  }

export function REPLHistory(props: REPLHistoryProps) {
    return (
        <div className="repl-history">
            {props.history.map((item, index) => (
                // You may eventually make this a component, but for now it's just a div
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}