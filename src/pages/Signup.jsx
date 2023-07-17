import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api/auth.api";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleName = e => {
        setName(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const user = {email, password, name};
            await signup(user);
            navigate('/login');

        } catch (error) {
            console.log('Error signing up', error)

            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={handleName}
                />

                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleEmail}
                />

                <label>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handlePassword} 
                />

                <button type='submit'>Sign Up</button>
            </form>

            {errorMessage && <p>{errorMessage}</p>}

            <p>Already have an account?</p>
            <Link to={'/login'} >Login</Link>
        </div>
    );
}

export default Signup;