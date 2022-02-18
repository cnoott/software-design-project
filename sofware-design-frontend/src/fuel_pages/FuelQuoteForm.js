import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Header from '../core/Header';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const FuelQuoteForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
        <Header/>
        <Container className='mx-5'>
            <h2 className='my-3'> Fuel Quote Form </h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Gallons Requested</Form.Label>
                    <Form.Control required type="number"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Delivery Address</Form.Label>
                    <Form.Control type="text" value={'Placeholder Client Address'}/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Choose a Delivery Date</Form.Label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Suggested Price Per Gallon</Form.Label>
                    <Form.Control type="number" value={0}/>
                </Form.Group>

                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Total Amount Due</Form.Label>
                    <Form.Control type="number" value={0}/>
                </Form.Group>

                <Button type='submit'> Submit </Button>
            </Form>
        </Container>
        </>
    );
};

export default FuelQuoteForm;
