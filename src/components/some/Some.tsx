import {useEffect} from "react";
import {useSearchParams} from "react-router";
import {pgUrl} from "../../service/api.service.tsx";


const Some = () => {
    const [query, setQuery] = useSearchParams();
    useEffect(() => {

        const pg = query.get('pg');
        console.log(pg);
        pgUrl.pgAll()
            .then(value => {
                console.log(value);
            })
    }, [query])

    return (
        <div>
            Some
        </div>
    );
};

export default Some;