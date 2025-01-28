import {useParams} from 'react-router-dom';
import {useEffect} from "react";
import {useAppSector} from "../redux/hooks/uasAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.tsx";

const UserPage = () => {
 const {id} = useParams();

    const {user, loadState} =  useAppSector(({userSlice}) => userSlice)
    const dispatch = useAppDispatch();
 useEffect(() => {
     if (id) dispatch(userSliceActions.loadUser(id));
 }, [id])

    return (
        <div>
            {!loadState && <div>Loading</div>}
            {user && <div>{user.id} {user.name}</div>}
        </div>
    );
};

export default UserPage;