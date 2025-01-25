import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";


const UsersComponents = () => {
    console.log('users');
    const [users, setUsers] = useState([]);

    const foo = useCallback(() => {
        console.log('foo');
    }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });

        return () => {
            console.log('unsubscribe');
        }

    }, [])
    return (
        <div>
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponents;