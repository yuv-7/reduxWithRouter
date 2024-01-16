
import {NavLink} from 'react-router-dom';

const Footer = () =>{
    return(
        <div className="footer w-screen h-max p-5 bg-blue-300 flex justify-center items-center">
        {/* links */}
        <NavLink to="/" className={({ isActive }) => (isActive ? "ml-8 hover:bg-orange-300 hover:text-slate-500 p-4 rounded-2xl" : "ml-8 hover:bg-blue-500 hover:text-blue-800 p-4 rounded-2xl")}>Home</NavLink>

                <NavLink to="/about" className={({ isActive }) => (isActive ? "ml-8 hover:bg-orange-300 hover:text-slate-500 p-4 rounded-2xl" : "ml-8 hover:bg-blue-500 hover:text-blue-800 p-4 rounded-2xl")}>About</NavLink>

                <NavLink to="/contact" className={({ isActive }) => (isActive ? "ml-8 hover:bg-orange-300 hover:text-slate-500 p-4 rounded-2xl" : "ml-8 hover:bg-blue-500 hover:text-blue-800 p-4 rounded-2xl")}>Contact</NavLink>
        </div>
        
    );
}

export default Footer;