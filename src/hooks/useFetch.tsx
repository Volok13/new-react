import {useEffect, useState} from "react";

export const useFetch = () => {
    console.log('useFetch')
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

    }, []);

    return users;

    // return [users, setUsers];
}