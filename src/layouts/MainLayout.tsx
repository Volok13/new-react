import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";


const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>

        </div>
        //точка де все буде відоброжатись
        //впроваджуємо меню
    );
};

export default MainLayout;