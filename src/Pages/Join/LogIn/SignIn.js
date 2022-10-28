import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './SignIn.css';

const SignIn = () => {


    const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin, gitHubProviderLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/');
                // if (user.emailVerified) {
                //     navigate(from, { replace: true });
                // }
                // else {
                //     // toast.error('Your email is not verified. Please verify your email address.')
                // }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }



    const handleGoogleSignIn = () => {
        providerLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGitHubSignIn = () => {
        gitHubProviderLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Container>
                <div className='form'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='w-100 mb-5'>
                            Login
                        </Button>
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                    </Form>
                    <ButtonGroup vertical className='w-100 mb-5'>
                        <Button onClick={handleGoogleSignIn} className=' mb-3' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                        <Button onClick={handleGitHubSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
                    </ButtonGroup>
                    <p className='text-center'>New to CS University BD? <Link to='/register'> Create a new account</Link></p>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;