import {Navbar,Footer} from '../Components/index';
import {Outlet} from 'react-router-dom';

const Layout = () =>{
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
