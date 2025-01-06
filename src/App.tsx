import {useState} from "react";

const App = ()=> {

    const [counter, setCounter] = useState<number>(0);
    console.log('mount')

  return (
    <div>
        <h2>{counter}</h2>
      <button onClick={() => {
          setCounter(counter + 1);
          // console.log(counter);
      }}>increment</button>
      <button onClick={() => {
          setCounter(prevState => {

              return prevState - 1;
          });
          // setCounter(counter - 1);
          // --counter;
          // console.log(counter);
      }}>decrement</button>
    </div>
  )
}

export default App
