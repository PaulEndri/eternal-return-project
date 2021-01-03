import { Armors, CharactersLookup, Locations, Weapons } from 'erbs-sdk';
import React, { PureComponent, useState } from 'react';
import { Segment, Menu, Grid, List, Label, Header } from 'semantic-ui-react';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { PageComponent } from '../../components/page';
import { Characters } from 'erbs-data';
import { CharacterLandingPage, CharacterPage } from '../wiki/children/characterPage.component';
import { WeaponPage } from '../wiki/children/weaponPage.component';
import { ArmorPage } from '../wiki/children/armorPage.component';
import { ItemPage } from '../wiki/children/itemPage.component';
import { LocationLandingPage, LocationPage } from '../wiki/children/locationPage.component';
import { BG_HALF, BG_THIRD } from '../../utilities/bgImages';
import { DefaultPlayerData } from '../../utilities/playerData';
import { CharacterPortrait } from '../../components/characterPortrait.component';

const reverseCharLookup = Object.fromEntries(
	Object.entries(CharactersLookup).map(([ k, v ]) => [ v, k ])
);

const PlayerView = () => {
	const location = useLocation();
	const { path, url } = useRouteMatch();
	const [ activeSeason, setSeason ] = useState(0);

	const charsPlayed = DefaultPlayerData.map(({ characterStats }) =>
		characterStats.map(({ characterCode, totalGames }) => [ characterCode, totalGames ])
	)
		.reduce(
			(total, vals) => {
				const data = Object.fromEntries(total);

				vals.map(([ code, count ]) => {
					if (data[code]) {
						data[code] = data[code] + count;
					} else {
						data[code] = count;
					}
				});

				return Object.entries(data);
			},
			[] as any
		)
		.sort((a, b) => b[1] - a[1]);

	return (
		<PageComponent title="Eternal Return: Black Survival Test Subject Records">
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
				<Grid style={{ backgroundImage: BG_HALF }} centered>
					<Grid.Row
						stretched
						style={{
							backgroundColor: 'rgba(76, 70, 70, 1)',
							backgroundImage: BG_THIRD,
							borderBottom: '1px groove',
							borderTop: '1px groove'
						}}
						centered
					>
						<Grid.Column width={1} stretched mobile={6} tablet={4} computer={2}>
							<CharacterPortrait
								type="half"
								width={125}
								name={reverseCharLookup[charsPlayed[0][0]]}
							/>
						</Grid.Column>
						<Grid.Column
							width={3}
							style={{ paddingLeft: 0 }}
							tablet={6}
							mobile={8}
							computer={3}
						>
							<Grid>
								<Grid.Row
									stretched
									style={{
										paddingLeft: '1rem',
										paddingTop: 25,
										paddingBottom: 0
									}}
								>
									<Header inverted as="h1">
										Paul Endri
									</Header>
								</Grid.Row>
								<Grid.Row
									style={{
										paddingLeft: '1.5rem',
										padding: 0,
										margin: 0
									}}
								>
									{activeSeason ? `Season ${activeSeason}` : 'Offseason'}
								</Grid.Row>
								<Grid.Row style={{ marginTop: 0, paddingTop: 0 }}>
									{charsPlayed.slice(1, 3).map(([ c ]) => (
										<Grid.Column tablet={8} mobile={8} computer={4} key={c}>
											<CharacterPortrait
												width={75}
												type="mini"
												name={reverseCharLookup[c]}
											/>
										</Grid.Column>
									))}
								</Grid.Row>
							</Grid>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</PageComponent>
	);
};

export default PlayerView;
