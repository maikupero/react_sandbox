import './monsters.css';
import {useState} from 'react';

const MONSTER_API = 'https://app.pixelencounter.com/api/basic/monsters/random';

function Monsters() {
    const [monstersCollection, setMonstersCollection] = useState([]);
    const [monster, setMonster] = useState("");

    const fetchImage = async () => {
      const res = await fetch(MONSTER_API);
      const monsterBlob = await res.blob();
      const monsterURL = URL.createObjectURL(monsterBlob);
      setMonster(monsterURL);
      console.log(typeof monsterURL);
    };
    
    return (
        <div id="main">
        
            <h1 id="title">Monsters!!!</h1>

            <div id="body">
                <div id="collection">
                    {monstersCollection.map((monster, id) => {
                        return (
                            <div id='collectedmonster'>
                                <img src={monster} key={id} alt={`monster${id}`} />
                            </div>
                        );
                    })}
                </div>
                <div id="monster">
                    { monster.length ? 
                        <img src={monster} alt={"Monster"} /> :
                        null
                    }
                </div>
            </div>

            <div id="buttons">
                <button onClick={() => setMonstersCollection([])}>Clear Collection</button>
                <button onClick={() => {
                    if (monster.length && monstersCollection.length < 6) {
                    setMonstersCollection(monstersCollection => [...monstersCollection, monster]);
                    setMonster("");
                    }
                }}>Add to Collection</button>
                <button onClick={() => fetchImage()}>New Monster</button>
            </div>

        </div>
    );
}

export default Monsters;