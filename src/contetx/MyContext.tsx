import {createContext} from "react";


type MyContextType = {
    counterValue: number;
    increment: (obj:number) => void;
}

export const init = {
    counterValue: 0,
    increment: (obj:number) => {
        console.log(obj);

    }
};

const MyContext = createContext<MyContextType>(init)//викликали функцію яка створює сховище для наших обєктів та задали типізацію і зробили дкфолтне значення

export default MyContext;