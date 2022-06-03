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
            <nav><h1>StringMaker</h1></nav>

            <div className="content" style={{display: 'inline'}}>
                <p id='longstring'>{string}</p>
                <p id='stringlength'>Dynamic length of string: {string.length}</p>
                <div className="buttons">
                    <button onClick={() => setString('')}>Clear</button>
                    <button onClick={() => setString(string + newLetter())}>Click</button>
                </div>
            </div>
        </div>
    );
}

export default StringMaker;
