import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Navbar = () => {
    const {isLoggedIn, logOutUser} = useContext(AuthContext);

    return (
        <nav className={`Navbar`}>
            <ul>
                <NavLink to='/'>
                    Home
                </NavLink>

                <NavLink to='/about'>
                    About
                </NavLink>

                <NavLink to='/advantages'>
                    Advantages
                </NavLink>

                {isLoggedIn && (
                    <>
                        <NavLink to='/activities'>
                            Activities
                        </NavLink>

                        <NavLink to='/pets'>
                            Pets
                        </NavLink>
                        
                        <button onClick={logOutUser} >Logout</button>
                    </>
                )}

                {!isLoggedIn && (
                    <>
                        <NavLink to='/signup'>
                            Signup
                        </NavLink>

                        <NavLink to='/login'>
                            Login
                        </NavLink>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;