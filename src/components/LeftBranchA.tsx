import {useContext} from "react";
import MyContext from "../contetx/MyContext.tsx";


const LeftBranchA = () => {

    const {counterValue} = useContext(MyContext);

    return (
        <div>
            LeftBranchA
            <p>
                current counter value is = {counterValue}
            </p>
        </div>
    );
};

export default LeftBranchA;