import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [item, setItem] = useState<IUser | null>(null);

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


    const foo = (item: IUser) => {
        // console.log(item);
        setItem(item);
    }
    return (
        <div>
            {
                item && <div>{JSON.stringify(item)}</div>
            }
            {/*{JSON.stringify(item)}*/}
            {/*{item.name item.username}*/}
            {
                users.map(user  => <UserComponent foo={foo} key={user.id} item={user}/>)//<div key={value.id}>{value.name}</div>
            }
        </div>
    );
};

export default UsersComponent;