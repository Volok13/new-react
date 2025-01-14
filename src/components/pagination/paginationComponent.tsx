import {useSearchParams} from "react-router";


const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({pg:'200'})

    return (
        <div>
            <button onClick={() => {
               const pg = query.get('pg');
               if (pg)
                {
                    let currentPage = +pg;
                    setQuery({pg:(++currentPage).toString()})
                }
            }}>next</button>
            <button onClick={() => {
                const pg = query.get('pg');
                if (pg)
                {
                    let currentPage = +pg;
                    setQuery({pg:(--currentPage).toString()})
                }
            }}>prev</button>
        </div>
    );
};

export default PaginationComponent;