import UserComponent from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";


const UsersComponents = () => {
    console.log('users');

    const users = useFetch()

    const arr: number[] = useMemo(() => {
       return [11, 22, 33, 44, 100500]
    }, []);

    const foo = useCallback(() => {
        console.log('foo');
    }, [])

    return (
        <div>
            {
                users.map(value => <UserComponent item={value} foo={foo} arr={arr}/>)
            }
        </div>
    );
};

export default UsersComponents;