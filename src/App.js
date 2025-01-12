import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    // Whole component is rendered
    console.log("Component App is not regenerated");

    let [title, setTitle] = useState('Artificial Intelligence: AI');
    let errorMsg = '';

    if (title.length < 3) {
        errorMsg = 'Title to short. Minimum length: 3';
    } else if (title.length > 20) {
        errorMsg = 'Title too long. Maximum length: 20';
    }

    function handleChange(event) {
        console.log("Input changed");

        setTitle(event.target.value);
    };
    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today:</h2>
            <h3>{title}</h3>
            <input type="text" value={title} onChange={handleChange}/>
            {title.length > 0 && <div>{errorMsg}</div>}

        </div>
    );
}

export default App;
