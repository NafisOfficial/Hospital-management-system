import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noHeader = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {noHeader || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
}

export default Main;