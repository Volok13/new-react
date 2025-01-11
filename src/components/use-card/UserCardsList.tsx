import {FC} from "react";
import useUserCardsList from "./useUserCardsList.ts";

interface Props {
 listLength: number;
}

export const UserCardsList: FC<Props> = ({listLength})=> {
    const {users, loading} = useUserCardsList({listLength});

    if(!users && loading) return <div>loading</div>;
    if(!users) return <div>Data not found</div>;

    return (
        <div>
            {
                users
                    .map((item) => (
                        <div key={item.id}>{item.id} --- {item.name}</div>
                    ))
            }

            {/*{*/}
            {/*    Array(listLength)*/}
            {/*        .fill(null)*/}
            {/*        .map((item, index) => <div key={index}>user {index}</div>)*/}
            {/*}*/}
        </div>
    );
};
