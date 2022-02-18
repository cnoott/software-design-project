import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from '../core/Header';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/esm/Button';
const ClientRegistration = () => {

    return (
        <>
            <Header />
            <Container>
                <h2>Registration Page:</h2>
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                        <FormControl
                            placeholder="Username"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                        <FormControl
                            placeholder="Password"
                        />
                    </InputGroup>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Container>

        </>
    );
};

export default ClientRegistration;