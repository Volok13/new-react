import React, {FC} from 'react';
import React, {useEffect} from 'react';

interface Props {
    listLenght: number;
}

export const UserCardsList: FC<Props> = () => {
    useEffect(() => {
        console.log('subscride');
        return () => {
            console.log('unsubscride');
        };
    }, [listLenght]);
    return (<div>
            {Array(listLenght)
                .fill(null)
                .map((_, i) => (
                    <div key={index}> user {index}</div>
                ))}
        </div>
    );
};