import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    // let x = 0;
    useEffect(() => {
        getUsers()
            .then(response => {
                // users.push({});
                setUsers(response);
            });

        return () => {
            console.log('done');
        }
    }, []);//x


    return (
        <div>
            {
                users.map(user  => <UserComponent key={user.id} item={user}/>)//<div key={value.id}>{value.name}</div>
            }
        </div>
    );
};

export default UsersComponent;