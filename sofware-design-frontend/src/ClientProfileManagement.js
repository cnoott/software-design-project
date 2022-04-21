import React, { useState, useEffect} from 'react';
import Header from './core/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { updateUser, getUserInfo } from './apiUser';
import { isAuthenticated } from './auth';

const ClientProfileManagment = () => {
    const [profileData, setProfileData] = useState({
        username: '',
        fullName: '',
        address1: '',
        address2: '',
        city: '',
        zipcode: '',
        state: '',
    });

    const { user: {_id}, token } = isAuthenticated();
    useEffect(() => {
        //get user info from here
        if (isAuthenticated()) {
            getUserInfo(_id).then(data => {
                console.log(data)
                setProfileData({
                    username: data.username,
                    fullName: data.fullName,
                    address1: data.address1,
                    address2: data.address2,
                    city: data.city,
                    zipcode: data.zipcode,
                    state: data.state
                })
            });
        }
    },[]);

    //    const { user: {_id}, token } = isAuthenticated();

    const { username, fullName, address1, address2, city, zipcode, state } = profileData;

    const [showError, setShowError] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = name => event => {
        const value = event.target.value;

        setProfileData({...profileData, [name]: value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (handleValidation()) {
            updateUser(profileData, _id, token).then(data => {
                console.log(_id);
                console.log(data);
                if (!data.error) {
                    setShowSuccess(true);
                }
            });
        }
    };

    const handleValidation = () => {
        setShowError(false);
        if (username.length > 50) {
            console.log('ERROR!');
            setShowError(true);
            setErrMsg('Your user name must be shorter than 50 characters');
            return false;
        }
        else if (fullName.length > 100) {
            setShowError(true);
            setErrMsg('Your full name must be shorter than 50 characters');
            return false;
        }
        else if (address1.length > 100){
            setShowError(true);
            setErrMsg('The address1 must be shorter than 100 characters');           
            return false;
        }
        else if (address2.length > 100){
            setShowError(true);
            setErrMsg('The address2 must be shorter than 100 characters');           
            return false;
        }
        else if(city.length > 100){
            setShowError(true);
            setErrMsg('The city must be shorter than 100 characters');
            return false;

        }
        else if (zipcode.length < 5) {
            setShowError(true);
            setErrMsg('The zipcode must be greater than 5 characters');           
            return false;
        }
        else if (zipcode.length > 9) {
            setShowError(true);
            setErrMsg('The zipcode must be less than 9 characters');           
            return false;
        }


        return true;
    };

    const Error = () => (
        <Alert variant="danger" show={showError} onClose={() => setShowError(false)} dismissible>
            <Alert.Heading>Error in registering for an account</Alert.Heading>
            <p>
                {errMsg}
            </p>
        </Alert>
    )

    const Success = () => showSuccess && (
        <div class="alert alert-success" role="alert">
            Successfully created an account! You many now login!
        </div>
    )

    return (
        <>
            <Header/>
            <Container>
                <h2> Client Profile Managment:</h2>
                <Form>
                    <Error/>
                    <Success/>
                    <Row>
                        <Col xs="auto">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required placeholder="Full name" value={username} onChange={handleChange('username')}/>
                        </Col>

                    </Row>

                    <Row>
                        <Col xs="auto">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control required placeholder="Full name" value={fullName} onChange={handleChange('fullName')}/>
                        </Col>

                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required placeholder="1234 Main St" value={address1} onChange={handleChange('address1')}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" value={address2} onChange={handleChange('address2')}/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control required value={city} onChange={handleChange('city')}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select required defaultValue="Choose..." onChange={handleChange('state')}>
                                <option>Choose...</option>
                                <option value={'TX'}>TX</option>
                                <option value={'AZ'}>AZ</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip" >
                            <Form.Label>Zip</Form.Label>
                            <Form.Control required value={zipcode} onChange={handleChange('zipcode')}/>
                        </Form.Group>
                    </Row>


                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>

        </>
    );
};

export default ClientProfileManagment

