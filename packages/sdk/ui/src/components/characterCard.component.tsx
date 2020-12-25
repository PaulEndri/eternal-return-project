import React, { FunctionComponent } from 'react';
import { Button, Card, Image, List, Label, Segment } from 'semantic-ui-react';
import { Item, ICharacter } from 'erbs-sdk';
import { getImageSrc } from '../utilities/getImageSrc';
import { rarityColor } from '../utilities/rarityColor';

type CharacterCardProps = {
	character: ICharacter;
};

const CharacterCard: FunctionComponent<CharacterCardProps> = ({ character }) => {
	return (
		<Card raised>
			<Card.Content>
				<div
					style={{
						backgroundColor: '#877e8a',
						marginBottom: 10,
						minHeight: 250,
						maxHeight: 300,
						overflow: 'hidden'
					}}
				>
					<Image
						style={{ maxWidth: 200, width: 200 }}
						src={getImageSrc(character.name)}
					/>
				</div>
				<Card.Header>{character.name}</Card.Header>
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
			</Card.Content>

			<Card.Content extra>
				<Button
					href={`https://eternalreturn.gamepedia.com/${character.name}`}
					content={character.name}
					label={{ as: 'a', basic: true, content: 'Official Wiki Link' }}
				/>
			</Card.Content>
		</Card>
	);
};

export default CharacterCard;
