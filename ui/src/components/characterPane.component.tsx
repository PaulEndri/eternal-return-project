import { Characters } from 'erbs-sdk';
import React from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import CharacterThumbnailComponent from './characterThumbnail.component';
import CharacterData from '../data/Character.json';
import CharacterCard from './characterCard.component';

export const CharacterPane: React.FC<any> = ({
	viewingCharacter,
	setSelectedCharacter,
	setViewingCharacter
}) => (
	<Grid>
		<Grid.Row width={11}>
			<Grid.Column width={6}>
				<Segment textAlign="center" basic fluid style={{ paddingRight: 0, paddingLeft: 0 }}>
					<CharacterCard character={viewingCharacter} onClick={setSelectedCharacter} />
				</Segment>
			</Grid.Column>
			<Grid.Column width={10}>
				<Segment.Group
					style={{
						borderRadius: 0,
						backgroundColor: 'rgba(66, 64, 74, 0.2)',
						marginTop: 14
					}}
				>
					<Segment
						attached="top"
						style={{
							border: 0,
							borderRadius: 0,
							backgroundColor: 'rgba(0, 0, 0, 0.5)'
						}}
						raised
						textAlign="center"
					>
						<Header inverted>Select Your Test Subject</Header>
					</Segment>
					<Segment
						basic
						style={{
							display: 'flex',
							flexFlow: 'row wrap',
							justifyContent: 'center'
						}}
					>
						{Object.keys(Characters).map((character) => (
							<div key={character}>
								<CharacterThumbnailComponent
									name={character}
									isActive={
										viewingCharacter && viewingCharacter.name === character
									}
									onClick={() => setViewingCharacter(CharacterData[character])}
								/>
							</div>
						))}
					</Segment>
				</Segment.Group>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);
