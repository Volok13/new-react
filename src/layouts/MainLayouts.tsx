import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            main page
            <Outlet/>
        </div>
    );
};

export default MainLayouts;