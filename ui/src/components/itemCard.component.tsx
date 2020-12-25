import React, { FunctionComponent } from 'react';
import { Button, Card, Image, List, Label, Segment } from 'semantic-ui-react';
import { Item, IBasicItem } from 'erbs-sdk';
import { getImageSrc } from '../utilities/getImageSrc';
import { rarityColor } from '../utilities/rarityColor';

type ItemCardProps = {
	item: Item<string>;
};

const ItemCard: FunctionComponent<ItemCardProps> = ({ item }) => {
	return (
		<Card raised>
			<Card.Content>
				<Image
					floated="right"
					src={getImageSrc(item.name)}
					rounded
					style={{ backgroundColor: rarityColor(item.rarity) }}
				/>
				<Card.Header textAlign="center">{item.name}</Card.Header>
				<Card.Meta textAlign="center">
					<Label color={rarityColor(item.rarity)}>
						{item.rarity}
						<Label.Detail>{item.type}</Label.Detail>
					</Label>
				</Card.Meta>
				<Card.Description>
					<div style={{ fontStyle: 'italic' }}>{item.description}</div>
					{item.stats && <List items={item.stats} />}
				</Card.Description>
			</Card.Content>

			{item.buildsFrom && (
				<Card.Content extra>
					Built From
					<Segment basic textAlign="center">
						{item.buildsFrom.map(({ name }, idx) => (
							<Button
								compact
								key={`${name}${idx}`}
								color={rarityColor(new Item(name).rarity)}
								style={{ marginBottom: '5px' }}
							>
								<Image rounded size="tiny" src={getImageSrc(name)} />
							</Button>
						))}
					</Segment>
				</Card.Content>
			)}
		</Card>
	);
};

export default ItemCard;
