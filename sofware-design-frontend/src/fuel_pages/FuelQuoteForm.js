import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Header from '../core/Header';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const FuelQuoteForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [values, setValues] = useState({
        gallonsRequested: '',
        deliveryAddress: '',
        pricePGallon: 5,
    });
    const [total, setTotal] = useState(0); //have to do another state because of issues

    const {gallonsRequested, deliveryAddress, pricePGallon } = values;

    const handleChange = name => async event => {
        const value = event.target.value;


        if (name === 'gallonsRequested') {
            await setValues({...values, 'gallonsRequested': value});
            await setTotal(parseInt(value) * pricePGallon);
        }
        else  {
            setValues({...values, [name]: value});
        }
    };

    return (
        <>
        <Header/>
        <Container className='mx-5'>
            <h2 className='my-3'> Fuel Quote Form </h2>
            {JSON.stringify(values)}
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Gallons Requested</Form.Label>
                    <Form.Control required type="number" value={gallonsRequested} onChange={handleChange('gallonsRequested')}/>
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
                    <Form.Control type="number" value={pricePGallon}/>
                </Form.Group>

                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Total Amount Due</Form.Label>
                    <Form.Control type="number" value={total}/>
                </Form.Group>

                <Button type='submit'> Submit </Button>
            </Form>
        </Container>
        </>
    );
};

export default FuelQuoteForm;
