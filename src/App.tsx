
import './App.css'
import LeftBranch from "./components/LeftBranch.tsx";
import RightBranch from "./components/RightBranch.tsx";
import MyContext, {init} from "./contetx/MyContext.tsx";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState<number>(0);//основне сховище

  return (
    <div>
        <MyContext.Provider value={{
            counterValue: counter,//не стале значення тому і змінюется
            //якщо використовувати контекст в якості сховища то обовязково його потрібно завязувати на useState і завязувати цілком тому що якщо буде тільки  значення змін не буде
            increment: (obj) => {
                console.log(obj)
                setCounter(++obj);
                console.log(obj)
            }

        }}>
      <LeftBranch/>
      <RightBranch/>
        </MyContext.Provider>
        {/*//визначаємо в якому сховиши лежать компоненти тому обготраємо*/}

    </div>
  )
}

export default App



//можна створювати декілька контекстів і зєднувати між собою

