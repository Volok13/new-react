import {useEffect, useState} from "react";
import UserComponent from "../user-component/UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers()
            .then({users}: IUsersResponse => {
                console.lof(users)
                setUsers(users);
        })
    }, [])
    return (
        <div>
            {users.map((user:IUser) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;