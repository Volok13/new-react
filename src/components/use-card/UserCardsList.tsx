import {FC, useEffect} from "react";

interface Props {
 listLength: number;
}

export const UserCardsList: FC<Props> = ({listLength})=> {
    useEffect(() => {

    console.log('subscribe')

    return () => {
        console.log('unsubscribe')
     }
    }, [listLength]);



    return (
        <div>
            {
                Array(listLength)
                    .fill(null)
                    .map((item, index) => <div key={index}>user {index}</div>)
            }
        </div>
    );
};
