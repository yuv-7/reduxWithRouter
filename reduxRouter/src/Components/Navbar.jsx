import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className="w-screen h-max p-5 bg-blue-300 flex justify-center items-center">
                <NavLink to="/" className={({ isActive }) => (isActive ? "ml-8 hover:bg-orange-300 hover:text-slate-500 p-4 rounded-2xl" : "ml-8 hover:bg-blue-500 hover:text-blue-800 p-4 rounded-2xl")}>Home</NavLink>

                <NavLink to="/signup" className={({ isActive }) => (isActive ? "ml-8 hover:bg-orange-300 hover:text-slate-500 p-4 rounded-2xl" : "ml-8 hover:bg-blue-500 hover:text-blue-800 p-4 rounded-2xl")}>SignUp</NavLink>

                <NavLink to="/login" className={({ isActive }) => (isActive ? "ml-8 hover:bg-orange-300 hover:text-slate-500 p-4 rounded-2xl" : "ml-8 hover:bg-blue-500 hover:text-blue-800 p-4 rounded-2xl")}>Login</NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;