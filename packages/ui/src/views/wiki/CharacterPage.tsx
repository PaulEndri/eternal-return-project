import { Character } from 'erbs-sdk';
import React, { useState } from 'react';
import {
	Button,
	Image,
	Segment,
	Grid,
	Container,
	Tab,
	Icon,
	TransitionGroup,
	Statistic,
	Rating,
	Table,
	Header,
	Label
} from 'semantic-ui-react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Characters, Weapons } from 'erbs-data';
import CharacterThumbnailComponent from '../../components/characterThumbnail.component';
import { CharacterStatTable } from './CharacterStatTable';
import { getImageSrc } from '../../utilities/getImageSrc';
import { AttributeChartComponent } from '../../components/attributeChart.component';
import { CharacterPortrait } from '../../components/characterPortrait.component';
import { ReverseWeaponsLookupKeyed } from '../../utilities/reverseWeaponLookup';
import { ItemModalButton } from '../../components/itemModalButton.component';

const CharacterAttrStatistic = ({ attr }) => (
	<Statistic inverted>
		<Statistic.Value>
			<Image
				bordered
				wrapped
				size="small"
				style={{
					maxHeight: 'auto',
					width: '50px'
				}}
				src={getImageSrc(`${attr.mastery}s`)}
			/>
		</Statistic.Value>
		<Statistic.Label>
			<Rating icon="star" defaultRating={attr.controlDifficulty} maxRating={3} />
		</Statistic.Label>
	</Statistic>
);

export const CharacterPage = () => {
	const { id } = useParams() as any;
	const history = useHistory();
	const [ minimized, setMinimized ] = useState(false);
	const character = id ? new Character(id) : null;

	const showBar = !minimized || (minimized && !id);

	const panes = !character
		? []
		: [
				{
					menuItem: 'Lore',
					render: () => (
						<Grid centered>
							<Grid.Column width={6} style={{ marginRight: 0, paddingRight: 0 }}>
								<Segment style={{ margin: 0, borderRadius: 0 }}>
									<Header>{character.description}</Header>
									{Object.entries(character.details).map(([ key, val ]) => (
										<Label key={key}>
											{key}
											<Label.Detail>{val}</Label.Detail>
										</Label>
									))}
									<p
										style={{ marginTop: '1rem' }}
										dangerouslySetInnerHTML={{
											__html: `<p>${(character.background || '')
												.replace(/\n/g, '</p><p>')}</p>`
										}}
									/>
								</Segment>
							</Grid.Column>
							<Grid.Column width={3} style={{ marginLeft: 0, paddingLeft: 0 }}>
								<CharacterPortrait name={character.name} type="full" width={250} />
							</Grid.Column>
						</Grid>
					)
				},
				{
					menuItem: 'Skills',
					render: () => (
						<Grid centered>
							<Grid.Column width={12}>
								<Table collapsing style={{ borderRadius: 0 }} structured celled>
									<Table.Header>
										<Table.Row>
											<Table.HeaderCell>Ability</Table.HeaderCell>
											<Table.HeaderCell>Slot</Table.HeaderCell>
											<Table.HeaderCell>Type</Table.HeaderCell>
											<Table.HeaderCell>Description</Table.HeaderCell>
											<Table.HeaderCell>Details</Table.HeaderCell>
										</Table.Row>
									</Table.Header>
									<Table.Body>
										{character.abilities &&
											Object.entries(
												character.abilities
											).map(([ slot, ability ]) => (
												<Table.Row key={slot}>
													<Table.Cell>
														<Image src={getImageSrc(ability.name)} />
														{ability.name}
													</Table.Cell>
													<Table.Cell>{slot}</Table.Cell>
													<Table.Cell>{ability.type}</Table.Cell>
													<Table.Cell>{ability.description}</Table.Cell>
													<Table.Cell>
														<Table basic="very" collapsing compact>
															{Object.entries(
																ability.stats
															).map(([ statName, stat ]) => (
																<Table.Row key={statName}>
																	<Table.Cell>
																		{statName}
																	</Table.Cell>
																	<Table.Cell>
																		{stat.value}
																	</Table.Cell>
																</Table.Row>
															))}
														</Table>
													</Table.Cell>
												</Table.Row>
											))}
									</Table.Body>
								</Table>
							</Grid.Column>
						</Grid>
					)
				},
				{
					menuItem: 'Stats',
					render: () => (
						<Grid centered>
							<Grid.Column width={8}>
								<CharacterStatTable character={character} />
							</Grid.Column>
						</Grid>
					)
				},
				{
					menuItem: 'Weapons',
					render: () => (
						<Grid centered>
							<Grid.Column width={12}>
								<Table
									collapsing
									style={{ borderRadius: 0 }}
									structured
									celled
									striped
								>
									<Table.Header>
										<Table.HeaderCell>Weapon Type</Table.HeaderCell>
										<Table.HeaderCell>Difficulty</Table.HeaderCell>
										<Table.HeaderCell>Information</Table.HeaderCell>
										<Table.HeaderCell>Weapons</Table.HeaderCell>
									</Table.Header>
									<Table.Body>
										{character.attributes.map((attr, id) => (
											<Table.Row key={id}>
												<Table.Cell textAlign="center">
													<Link
														to={`/wiki/weapons/${ReverseWeaponsLookupKeyed[
															attr.mastery
														]}`}
													>
														<Image
															centered
															bordered
															size="small"
															style={{
																maxHeight: 'auto',
																width: '100px'
															}}
															src={getImageSrc(
																`/weaponSkills/${attr.mastery}`
															)}
														/>
														{ReverseWeaponsLookupKeyed[attr.mastery]}
													</Link>
												</Table.Cell>
												<Table.Cell>
													<Rating
														icon="star"
														defaultRating={attr.controlDifficulty}
														maxRating={3}
													/>
												</Table.Cell>
												<Table.Cell>
													<AttributeChartComponent
														key={id}
														attributeBlock={attr}
													/>
												</Table.Cell>
												<Table.Cell>
													{Weapons[
														ReverseWeaponsLookupKeyed[attr.mastery]
													].items.map(({ id }) => (
														<ItemModalButton key={id} id={id} />
													))}
												</Table.Cell>
											</Table.Row>
										))}
									</Table.Body>
								</Table>
							</Grid.Column>
						</Grid>
					)
				}
			];
	return (
		<Container fluid>
			<div>
				<div
					style={{
						backgroundColor: 'rgba(255, 255, 255, 0.11)',
						display: 'flex',
						flexFlow: 'row wrap',
						justifyContent: 'center'
					}}
				>
					<TransitionGroup animation="fade down" duration={60}>
						{showBar &&
							Object.keys(Characters).map((character) => (
								<div key={character} style={{ marginRight: '4px' }}>
									<CharacterThumbnailComponent
										width={60}
										name={character}
										isActive={id && id === character}
										onClick={() =>
											history.push(`/wiki/characters/${character}`)}
									/>
								</div>
							))}
					</TransitionGroup>

					{id && (
						<Button
							style={{ width: '100%', borderRadius: 0, margin: 0 }}
							compact={!minimized}
							onClick={() => setMinimized(!minimized)}
							color="red"
						>
							<Icon name={`chevron ${!showBar ? 'down' : 'up'}` as any} />
							{!showBar ? 'Show Character Selector' : 'Minimize'}
						</Button>
					)}
				</div>
			</div>

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
					<Grid>
						<Grid.Row
							style={{
								backgroundColor: 'rgba(76, 70, 70, 1)',
								borderBottom: '1px groove',
								borderTop: '1px groove'
							}}
							centered
						>
							<Grid.Column width={2}>
								<CharacterPortrait type="mini" width={100} name={character.name} />
							</Grid.Column>
							<Grid.Column width={7} style={{ paddingLeft: 0 }}>
								<Grid style={{ margin: 0, padding: 0 }}>
									<Grid.Row>
										<Grid.Column
											width={5}
											textAlign="center"
											style={{ paddingLeft: 0 }}
											verticalAlign="middle"
										>
											<Statistic inverted size="tiny">
												<Statistic.Value>{character.name}</Statistic.Value>
												<Statistic.Label>
													<span
														style={{
															fontStyle: 'italic',
															fontSize: 'smaller'
														}}
													>
														{character.description}
													</span>
												</Statistic.Label>
											</Statistic>
										</Grid.Column>
										{character.attributes.map((attr, id) => (
											<Grid.Column width={2} key={id} verticalAlign="middle">
												<CharacterAttrStatistic attr={attr} />
											</Grid.Column>
										))}
									</Grid.Row>
								</Grid>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row
							style={{ backgroundColor: 'rgba(255, 250, 250, 0.9)', paddingTop: 0 }}
							centered
						>
							<Grid.Column width={16}>
								<Tab
									menu={{
										color: 'blue',
										secondary: false,
										inverted: false,
										attached: true,
										style: { borderRadius: 0, justifyContent: 'center' }
									}}
									style={{ borderRadius: 0 }}
									panes={panes}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			)}
			{!id && (
				<Segment style={{ marginTop: 0, borderRadius: 0 }} textAlign="center">
					<Table selectable striped collapsing style={{ margin: 'auto' }}>
						<Table.Header>
							<Table.HeaderCell />
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Weapons</Table.HeaderCell>
							<Table.HeaderCell>Q</Table.HeaderCell>
							<Table.HeaderCell>W</Table.HeaderCell>
							<Table.HeaderCell>E</Table.HeaderCell>
							<Table.HeaderCell>R</Table.HeaderCell>
							<Table.HeaderCell>Passive</Table.HeaderCell>
						</Table.Header>
						<Table.Body>
							{Object.entries(Characters).map(([ character, characterObject ]) => (
								<Table.Row
									key={character}
									onClick={() => history.push(`/wiki/characters/${character}`)}
								>
									<Table.Cell>
										<CharacterThumbnailComponent
											width={60}
											name={character}
											isActive={id && id === character}
										/>
									</Table.Cell>
									<Table.Cell>{character}</Table.Cell>
									<Table.Cell>
										{characterObject.attributes.map((attr, id) => (
											<Image
												bordered
												wrapped
												key={attr.mastery}
												size="small"
												style={{
													maxHeight: 'auto',
													width: '50px'
												}}
												src={getImageSrc(`${attr.mastery}s`)}
											/>
										))}
									</Table.Cell>
									<Table.Cell>
										<Image
											bordered
											size="mini"
											src={getImageSrc(characterObject.abilities?.Q.name)}
										/>
									</Table.Cell>
                                    <Table.Cell>
										<Image
											bordered
											size="mini"
											src={getImageSrc(characterObject.abilities?.W.name)}
										/>
									</Table.Cell>
                                    <Table.Cell>
										<Image
											bordered
											size="mini"
											src={getImageSrc(characterObject.abilities?.E.name)}
										/>
									</Table.Cell>
                                    <Table.Cell>
										<Image
											bordered
											size="mini"
											src={getImageSrc(characterObject.abilities?.R.name)}
										/>
									</Table.Cell>
                                    <Table.Cell>
										{ characterObject.abilities &&<Image
											bordered
											size="mini"
											src={getImageSrc(Object.values(characterObject.abilities).find(({type, slot}) => type.includes('Passive') || slot.includes('Passive')).name)}
										/>}
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</Segment>
			)}
		</Container>
	);
};
