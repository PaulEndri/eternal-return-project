import React, { FunctionComponent } from 'react';
import { Button, Image, Segment } from 'semantic-ui-react';
import { ICharacter } from 'erbs-sdk';
import { getImageSrc } from '../utilities/getImageSrc';

type CharacterCardProps = {
	character: ICharacter;
	onClick: any;
};

const CharacterCard: FunctionComponent<CharacterCardProps> = ({ character, onClick }) => {
	return (
		<Segment.Group
			style={{
				borderRadius: 0,
				paddingLeft: 0,
				marginLeft: 0,
				backgroundColor: 'rgba(66, 64, 74, 0.2)'
			}}
		>
			{character && (
				<React.Fragment>
					<Segment basic compact textAlign="center">
						<div
							style={{
								backgroundColor: '#877e8a',
								margin: 'auto',
								marginBottom: '10px',
								width: 200,
								border: '1px solid rgba(255, 190, 16, 0.45)',

								overflow: 'hidden'
							}}
						>
							<Image
								style={{ maxWidth: 200, width: 200 }}
								src={getImageSrc(`characters/half/${character.name}`)}
							/>
						</div>

						<Button
							color="brown"
							as="a"
							href={`https://eternalreturn.gamepedia.com/${character.name}`}
							content={character.name}
							style={{ marginBottom: '5px' }}
						/>

						<div style={{ color: 'white', fontStyle: 'italic', minHeight: '3rem' }}>
							{character.description}
						</div>
					</Segment>

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
