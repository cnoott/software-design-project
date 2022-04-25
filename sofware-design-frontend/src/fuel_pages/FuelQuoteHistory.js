import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Header from '../core/Header';
import { getFuelQuoteData } from './apiFuel';
import { isAuthenticated } from '../auth';

const FuelQuoteHistory = () => {
        const [fuelData, setFuelData] = useState([]); 
        const {user: {_id}} = isAuthenticated();

        useEffect(() => {
            getFuelQuoteData(_id).then(data => {
                console.log(data);
                setFuelData(data);
            });
        },[]);
    

	return (
		<>
			<Header />
			<Container>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Delivery Date</th>
							<th>Delivery address</th>
							<th>Gallons Requestions</th>
							<th>Suggested Price Per Gallon</th>
							<th>Total Amount due</th>
						</tr>
					</thead>
					<tbody>
                                            {fuelData.map((fuel, i) => (
						<tr>
                                                    <td key={i}> {fuel.deliveryDate} </td>
                                                    <td key={i}> {fuel.deliveryAddress}</td>
                                                    <td key={i}> {fuel.deliveryAddress}</td>
                                                    <td key={i}> {fuel.suggestedPricePerGallon}</td>
                                                    <td key={i}> {fuel.totalAmountDue}</td>
						</tr>
                                            ))}

					</tbody>
				</Table>
			</Container>
		</>
	);
};

export default FuelQuoteHistory;
