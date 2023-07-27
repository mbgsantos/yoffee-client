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
        <div className={'card text-center Credentials'} style={{height: '20rem', backgroundColor: '#E7E3DD'}}>
            <div className={'card-body Crdtls'}>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Name"
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={handleName}
                    />
                    <br />

                    <input 
                        style={{marginTop: '1rem'}}
                        placeholder="Email"
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={handleEmail}
                    />
                    <br />

                    <input 
                        style={{marginTop: '1rem'}}
                        placeholder="Password"
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={handlePassword} 
                    />
                    <br />

                    <button type='submit' className={'btn btn-warning'}>Sign Up</button>
                </form>

                {errorMessage && <p>{errorMessage}</p>}

                <p>Already have an account?</p>
                <Link to={'/login'} >Login</Link>
            </div>
        </div>
    );
}

export default Signup;