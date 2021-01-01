import React from 'react';
import { Grid, Container, Menu, Segment, Header, Label, Button, Image } from 'semantic-ui-react';
import { useHistory, useParams } from 'react-router-dom';
import { getMiscList, getMiscListKeys } from '../../utilities/getList';
import { ItemSearchComponent } from './ItemSearch';
import { LocationsLookup, Region, Locations } from 'erbs-sdk';
import { getImageSrc } from '../../utilities/getImageSrc';
import { Locations as LocData } from 'erbs-data';
import { ItemModalButton } from '../../components/itemModalButton.component';

export const LocationPage = () => {
	const history = useHistory();
	const { id } = useParams() as any;
	const location = id ? LocData[id.replace(' ', '')] : null;

	return (
		<Container fluid>
			<Menu
				secondary
				color="red"
				inverted
				style={{
					borderRadius: 0,
					marginBottom: 0,
					justifyContent: 'center'
				}}
			>
				{Object.keys(Locations).map((type) => (
					<Menu.Item
						key={type}
						active={id === type}
						onClick={() => {
							history.push(`/wiki/locations/${type}`);
						}}
						color="red"
						style={{
							borderRadius: 0
						}}
					>
						{type}
					</Menu.Item>
				))}
			</Menu>

			{id && (
				<Segment
					color="black"
					fluid
					inverted
					style={{
						margin: 0,
						marginTop: 12,
						padding: 0,
						borderRadius: 0
					}}
				>
					<Grid
						centered
						style={{
							backgroundImage: `url(${process.env
								.PUBLIC_URL}/assets/images/locations/${id}.jpg) `,
							backgroundSize: 'cover'
						}}
					>
						<Grid.Row
							verticalAlign="middle"
							style={{
								backgroundColor: 'rgba(76, 70, 70, 1)',
								borderBottom: '1px groove',
								borderTop: '1px groove'
							}}
							centered
						>
							<Grid.Column width={16} color="orange">
								<Header inverted textAlign="center">
									{id}
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row centered style={{ backgroundColor: 'rgba(10, 0, 0, 0.5)' }}>
							<Grid.Column width={16} textAlign="center">
								<Header inverted textAlign="center">
									Connections
								</Header>
								{location.connections &&
									location.connections.length > 0 &&
									location.connections.map(({ name }) => (
										<Label
											color="yellow"
											as={Button}
											onClick={() => history.push(`/wiki/locations/${name}`)}
										>
											{name}
										</Label>
									))}
								{location.teleport && <Label color="blue">Hyperloop Network</Label>}
							</Grid.Column>
						</Grid.Row>
						<Grid.Row
							verticalAlign="middle"
							style={{
								backgroundColor: 'rgba(38, 35, 35, 0.5)',
								borderBottom: '1px groove',
								borderTop: '1px groove'
							}}
							centered
						>
							<Grid.Column
								width={16}
								textAlign="center"
								style={{ paddingBottom: '8px' }}
							>
								<Header inverted>Wild Life Catalog</Header>
							</Grid.Column>
							{location.animals.map(({ name, id }) => (
								<Grid.Column width={3} key={id}>
									<Image
										centered
										size="medium"
										src={getImageSrc(`/animals/${name}`)}
									/>
								</Grid.Column>
							))}
						</Grid.Row>
						<Grid.Row
							fluid
							style={{
								padding: '5rem',
								paddingTop: '10px',
								borderRadius: 0,
								backgroundColor: 'rgba(255, 250, 250, 0.9)',
								marginLeft: 0
							}}
							textAlign="center"
						>
							{location.drops.map(({ name, id, quantity }) => (
								<ItemModalButton id={id} key={id} label={quantity} />
							))}
						</Grid.Row>
					</Grid>
				</Segment>
			)}
		</Container>
	);
};
