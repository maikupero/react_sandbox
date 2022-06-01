import './stringmaker.css';
import {useState, useEffect} from 'react';

function StringMaker() {
    const [string, setString] = useState("");

    useEffect(() => {
        document.title = `Grow this string: ${string}.`;
    });
    
    function newLetter() {
        let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let random_letter = letters.charAt(Math.floor(Math.random()*letters.length));
        console.log(random_letter);
        return random_letter
    }
    
    return (
        <div className="main">
            <h1 className='description'>To experiment with useEffect and useStates.</h1>
            <h2 className='instruction'>Hello! Push this button to grow the string:</h2>
            <p id='longstring'>{string}</p>
            <p id='stringlength'>Dynamic length of string: {string.length}</p>
            <button onClick={() => setString(string + newLetter())}>Click</button>
            <button onClick={() => setString('')}>Clear</button>
        </div>
    );
}

export default StringMaker;
