import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";


const UsersComponents = () => {
    console.log('users');
    const [users, setUsers] = useState([]);
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
            <UserComponent/>
        </div>
    );
};

export default UsersComponents;