import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Navbar = () => {
    const {isLoggedIn, logOutUser} = useContext(AuthContext);

    return (
        <nav className={`Navbar navbar-expand-lg`}>
            <div className={'container-fluid'}>
                <div className={'collapse navbar-collapse'} id={'navbarText'}>
                    <ul className={'navbar-nav me-auto mb-2 mb-lg-0'}>
                        <NavLink to='/' className={'nav-item'}>
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

                                <NavLink to='/services'>
                                    Services
                                </NavLink>

                                <NavLink to='/pets'>
                                    Pets
                                </NavLink>
                                
                                <button onClick={logOutUser} className={'btn btn-outline-warning'} >Logout</button>
                            </>
                        )}

                            {!isLoggedIn && (
                                <>
                                    <NavLink to='/signup' className={'btn btn-outline-warning'}>
                                        Signup
                                    </NavLink>

                                    <NavLink to='/login' className={'btn btn-outline-warning'}>
                                        Login
                                </NavLink>
                                </>
                            )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;