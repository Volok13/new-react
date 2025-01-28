import {useEffect} from "react";
import {useAppSector} from "../redux/hooks/uasAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.tsx";

 const UsersPage = () => {
    const {users, loadState}=  useAppSector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, [])

    return (
        <div>
            {!loadState && <div>Loading</div>}
            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    );
};

export default UsersPage;