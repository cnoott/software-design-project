import React, {useState} from 'react';
import Header from '../core/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { signIn, authenticate, isAuthenticated } from '../auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        error: '',
    });
    
    const { username, password, error } = values;
    
    const navigate = useNavigate();

    const clickSubmit = event => {
        event.preventDefault();
        signIn({username, password}).then(data => {
            if (data.error) {
                setValues({...values, error: data.error});
                console.log(data);
            }
            else  {
                authenticate(data, () => {
                    navigate('/', { replace: true });
                });
            }
        });
    };

    const handleChange = name => event => {
        const value = event.target.value;
        setValues({...values, [name]: value});
    };

    return (
        <>
            <Header />
            <Container>
                <Form>
                    <h2> Login </h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" value={username} onChange={handleChange('username')}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange('password')}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={clickSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>

    );
};

export default Login;
