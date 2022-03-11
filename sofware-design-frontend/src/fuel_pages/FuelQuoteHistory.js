import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Header from '../core/Header';
import { getFuelQuoteData } from './apiFuel';

const FuelQuoteHistory = () => {
        const [fuelData, setFuelData] = useState({}); 

        useEffect(() => {
            getFuelQuoteData().then(data => {
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
						<tr>
							<td>{fuelData.deliveryDate}</td>
							<td>{fuelData.deliveryAddress}</td>
							<td>{fuelData.gallonsRequested}</td>
							<td>{fuelData.suggestedPricePerGallon}</td>
							<td>{fuelData.totalAmountDue}</td>
						</tr>

					</tbody>
				</Table>
			</Container>
		</>
	);
};

export default FuelQuoteHistory;
