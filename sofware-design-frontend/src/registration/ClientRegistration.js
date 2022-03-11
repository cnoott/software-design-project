import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from '../core/Header';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/Alert';
import { signup } from './apiRegistration';

const ClientRegistration = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        formData: new FormData(),
        error: '',
        success: false
    });

    const { username, password, formData, error, success } = values;



    const handleSubmit = (event) => {
        event.preventDefault();
        
        signup({username, password}).then(data => {
            console.log(data);
            if (data.error) {
                setValues({...values, error: true, success: false});
            }
            else {
                setValues({...values, error: false, success:true});
            }
        });
    };

    const handleChange = name => event => {
        const value = event.target.value;
        formData.set(name, value);
        setValues({...values, error: false, [name]: value});
    };

    const Success = () => (
        <>
            {success &&
                <Alert variant='success'>
                    User has successfully been created! You may now login.
                </Alert>
            }
        </>
    );

    const Error = () => (
        <>
            {error &&
                <Alert variant='error'>
                    An error has occured when signing up
                </Alert>
            }
        </>
    );

    return (
        <>
            <Header />
            <Container>
                <Success/>
                <h2>Registration Page:</h2>
                <div>
                    <form >
                    <InputGroup className="mb-3">
                        <InputGroup.Text 
                            id="basic-addon1"
                        >
                        Username
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Username"
                            onChange={handleChange('username')}
                            value={username}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                        <FormControl
                            placeholder="Password"
                            onChange={handleChange('password')}
                            value={password}
                        />
                    </InputGroup>

                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        Submit
                    </Button>
                    </form>
                </div>
            </Container>

        </>
    );
};

export default ClientRegistration;
