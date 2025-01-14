import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import {getAllUsers} from "../../service/api.service.tsx";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../../user/UserComponent.tsx";

const Some = () => {


    const [users, setUsers] = useState<IUser[]>([])
    const [query] = useSearchParams();
    useEffect(() => {
        // const pg = query.get('pg');
        getAllUsers(query.get('pg') || '1')
            .then(value =>
                setUsers(value.data));
    }, [query])

    return (
        <div>
            {
                users.map(value =>
                    (<UserComponent
                        key={value.id}
                        item={value}/>))
            }
        </div>
    );
};

export default Some;