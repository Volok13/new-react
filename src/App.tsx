import {FC, useState} from "react";
import {UserCardsList} from "./components/use-card/UserCardsList.tsx";


const  App : FC = ()=> {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const [listLength, setlistLength] = useState<number>(10)

  return (
    <div style={{
        display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center'
    }}>
        home
        <input type={"number"} value={listLength} onChange={(event) => setlistLength(Number(event.target.value))}/>
        <div style={{height: '400px'}}>{isOpen && <UserCardsList listLength={listLength}/>}</div>
        <button onClick={() => setIsOpen(!isOpen)}>toggle</button>

    </div>
  )
}

export default App
