import React, { FunctionComponent } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { ICharacter } from 'erbs-sdk';
import { CharacterPortrait } from './characterPortrait.component';

type CharacterCardProps = {
	character: ICharacter;
	onClick?: any;
};

const CharacterCard: FunctionComponent<CharacterCardProps> = ({ character, onClick }) => {
	return (
		<Segment.Group
			style={{
				borderRadius: 0,
				paddingLeft: 0,
				marginLeft: 0,
				backgroundColor: '#232326'
			}}
		>
			{character && (
				<React.Fragment>
					<Segment basic compact textAlign="center">
						<CharacterPortrait name={character.name} />

						<Button
							color="brown"
							fluid
							as="a"
							href={`https://eternalreturn.gamepedia.com/${character.name}`}
							content={character.name}
							style={{ marginBottom: '5px' }}
						/>

						<div style={{ color: 'white', fontStyle: 'italic', minHeight: '3rem' }}>
							{character.description}
						</div>
					</Segment>

					{onClick && (
						<Segment
							attached="top"
							style={{
								border: 0,
								borderRadius: 0,
								backgroundColor: 'rgba(0, 0, 0, 0.5)'
							}}
							raised
							stacked
						>
							<Button
								onClick={() => onClick(character)}
								content={'Select your character'}
								color="green"
							/>
						</Segment>
					)}
				</React.Fragment>
			)}
			{!character && (
				<Segment
					attached="top"
					basic
					textAlign="center"
					placeholder
					inverted
					style={{ borderRadius: 0, border: 0 }}
				>
					No Test Subject Selected
				</Segment>
			)}
			{/* <Segment>as</Segment>
				<Segment compact>
					<Card.Meta>{character.description}</Card.Meta>
					<Card.Description textAlign="left">
						<List>
							{character.details &&
								character.details.map(([ title, value ], idx) => (
									<List.Item key={`${title}${idx}${character.name}`}>
										<Label fluid>
											{title}
											<Label.Detail>{value}</Label.Detail>
										</Label>
									</List.Item>
								))}
						</List>
					</Card.Description>
				</Segment> */}
		</Segment.Group>
	);
};

export default CharacterCard;
