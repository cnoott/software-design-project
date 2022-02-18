import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Header from '../core/Header';

const FuelQuoteHistory = () => {
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
							<td>11/22/2021</td>
							<td>123 Freedom Ln</td>
							<td>4004</td>
							<td>22</td>
							<td>12333</td>
						</tr>
						<tr>
							<td>2/10/2022</td>
							<td>1337 Trevor Dr.</td>
							<td>5000</td>
							<td>22</td>
							<td>123</td>
						</tr>
						<tr>
							<td>4/5/2022</td>
							<td> 117 Univerity St.</td>
							<td>1200</td>
							<td>22</td>
							<td>5000</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		</>
	);
};

export default FuelQuoteHistory;