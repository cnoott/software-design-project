import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Header from '../core/Header';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Alert from 'react-bootstrap/Alert';
import { getSuggestedPrice, submitFuelQuote } from './apiFuel';
import { isAuthenticated } from '../auth';

const FuelQuoteForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [values, setValues] = useState({
        gallonsRequested: '',
        deliveryAddress: '',
        pricePGallon: 0,
    });

    const { user: {_id} } = isAuthenticated();

    const [total, setTotal] = useState(0); //have to do another state because of issues

    const { gallonsRequested, deliveryAddress, pricePGallon } = values;
    
    const [success, setSuccess] = useState(false);
    const Success = () => (
        <>
            {success &&
                <Alert variant='success'>
                    Fuel quote successfully created!
                </Alert>
            }
        </>
    );


    

    const handleChange = name => async event => {
        const value = event.target.value;

        if (name === 'gallonsRequested') {

            await getSuggestedPrice(_id, value).then(data => {
                setValues({ ...values, 'pricePGallon': data.suggestedPrice, 'gallonsRequested': value });
            });

            await setTotal(parseInt(value) * pricePGallon);
        }
        else {
            setValues({ ...values, [name]: value });
        }
    };

    return (
        <>
            <Header />
            <Success/>
            <Container className='mx-5'>
                <h2 className='my-3'> Fuel Quote Form </h2>
                {JSON.stringify(values)}
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Gallons Requested</Form.Label>
                        <Form.Control required type="number" value={gallonsRequested} onChange={handleChange('gallonsRequested')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Delivery Address</Form.Label>
                        <Form.Control type="text" value={'Placeholder Client Address'} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Choose a Delivery Date</Form.Label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Label>Suggested Price Per Gallon</Form.Label>
                    <Form.Control type="number" value={pricePGallon}/>
                </Form.Group>


                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Suggested Price Per Gallon</Form.Label>
                        <Form.Control type="number" value={pricePGallon} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Total Amount Due</Form.Label>
                        <Form.Control type="number" value={total} />
                    </Form.Group>

                    <Button type='submit' onClick={handleSubmit}> Submit </Button>
                </Form>
            </Container>
        </>
    );
};

export default FuelQuoteForm;
