import React, {useState} from 'react';
import Header from './core/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const ClientProfileManagment = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        address: '',
        address2: '',
        city: '',
        zip: '',
        state: '',
    });

    const { name, address, address2, city, zip, state } = profileData;


    const [showError, setShowError] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleChange = name => event => {
        const value = event.target.value;

        setProfileData({...profileData, [name]: value});
    };

    const handleValidation = (e) => {
        setShowError(false);
        e.preventDefault();
        if (name.length > 50) {
            console.log('ERROR!');
            setShowError(true);
            setErrMsg('Your name must be shorter than 50 characters');
        }
        else if (address.length > 100){
            setShowError(true);
            setErrMsg('The address must be shorter than 100 characters');           
        }
        else if (address2.length > 100){
            setShowError(true);
            setErrMsg('The address2 must be shorter than 100 characters');           
        }
        else if(city.length > 100){
            setShowError(true);
            setErrMsg('The city must be shorter than 100 characters');

        }
        else if (zip.length < 5) {
            setShowError(true);
            setErrMsg('The zipcode must be greater than 5 characters');           
        }
        else if (zip.length > 9) {
            setShowError(true);
            setErrMsg('The zipcode must be less than 9 characters');           
        }
    };

    const Error = () => (
        <Alert variant="danger" show={showError} onClose={() => setShowError(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                {errMsg}
            </p>
        </Alert>
    )

    return (
        <>
            <Header/>
            <Container>
                <h2> Client Profile Managment:</h2>
                <Form>
                    <Error/>
                    <Row>
                        <Col xs="auto">
                            <Form.Control required placeholder="Full name" value={name} onChange={handleChange('name')}/>
                            {name}
                        </Col>

                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required placeholder="1234 Main St" value={address} onChange={handleChange('address')}/>
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
                                <option value={'TX'}>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip" >
                            <Form.Label>Zip</Form.Label>
                            <Form.Control required value={zip} onChange={handleChange('zip')}/>
                        </Form.Group>
                    </Row>


                    <Button variant="primary" type="submit" onClick={handleValidation}>
                        Submit
                    </Button>
                </Form>
            </Container>

        </>
    );
};

export default ClientProfileManagment

