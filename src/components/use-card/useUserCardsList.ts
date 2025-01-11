import {useEffect, useState} from 'react';

interface Input {
    listLength: number;
}

interface Output {
    users: any[] | null;
    loading: boolean;
}

export const UseUserCardsList = ({listLength}: Input) => {

    const [users, setUsers] = useState<any[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => setUsers(json))
            .finally(() => setLoading(false))
            .catch((e) => console.log(e));

        return () => {
            setUsers(null)
            setLoading(false)
        };
    }, []);

    return {users, loading};

    // useEffect(() => {
    //
    //     console.log('subscribe')
    //
    //     return () => {
    //         console.log('unsubscribe')
    //     }
    // }, [listLength]);
};

export default UseUserCardsList;