import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";


const AuthResourcesPage = () => {

    useEffect(() => {
        loadAuthProducts()
            .then(products => {
                console.log(products);
            }).catch(reason => {
                console.log(reason);
                //хапає 401 помилку
                refresh()
                    .then( () => loadAuthProducts())
                    .then(value => console.log(value));
        })

    }, [])

    //беремо продукти з точки що вже має токен
    return (
        <div>
            AuthResourcesPage
        </div>
    );
};

export default AuthResourcesPage;