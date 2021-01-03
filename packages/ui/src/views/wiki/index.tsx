import { Armors, Locations, Weapons } from 'erbs-sdk';
import React, { PureComponent, useState } from 'react';
import { Segment, Menu, Grid, List, Label, Header } from 'semantic-ui-react';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { PageComponent } from '../../components/page';
import { Characters } from 'erbs-data';
import { CharacterLandingPage, CharacterPage } from './children/characterPage.component';
import { WeaponPage } from './children/weaponPage.component';
import { ArmorPage } from './children/armorPage.component';
import { ItemPage } from './children/itemPage.component';
import { LocationLandingPage, LocationPage } from './children/locationPage.component';

const menuItems = [
	[ 'characters', 'Characters', Object.keys(Characters) ],
	[ 'weapons', 'Weapons', Object.values(Weapons).filter((wpn) => wpn !== 'Whip') ],
	[ 'armors', 'Armors', Object.values(Armors) ],
	[ 'locations', 'Locations', Object.values(Locations) ],
	[ 'items', 'Items' ],
	[ 'animals', 'Animals' ]
];

export const initialLoadout = {
	Weapon: null,
	Chest: null,
	Head: null,
	Arm: null,
	Leg: null,
	Accessory: null
};

const WikiView = () => {
	const location = useLocation();
	const { path, url } = useRouteMatch();
	const history = useHistory();

	const sidebarItems = menuItems.map(
		([ route, name, subMenuItems ]: [string, string, string[]]) => {
			const isActive = location.pathname.includes(route);
			const path = `/wiki/${route}`;
			const isRoot = location.pathname === path;
			const showSubMenu = isActive && !isRoot && subMenuItems && subMenuItems.length > 0;

			return (
				<Menu.Item key={route} active={isActive} as={Link} to={path}>
					{name}
					{showSubMenu && (
						<Menu.Menu>
							{subMenuItems.map((subRoute) => (
								<Menu.Item
									name={subRoute}
									key={subRoute + route}
									as={Link}
									to={`${path}/${subRoute}`}
								/>
							))}
						</Menu.Menu>
					)}
				</Menu.Item>
			);
		}
	);
	return (
		<PageComponent
			sidebarTitle="Information"
			sidebarItems={sidebarItems}
			title="Eternal Return: Black Survival Information Center"
		>
			<Switch>
				<Route path={`${path}/characters/:id`}>
					<CharacterPage />
				</Route>
				<Route exact path={`${path}/characters`}>
					<CharacterLandingPage />
				</Route>
				<Route exact path={`${path}/weapons`}>
					<WeaponPage />
				</Route>
				<Route path={`${path}/weapons/:id`}>
					<WeaponPage />
				</Route>
				<Route exact path={`${path}/armors`}>
					<ArmorPage />
				</Route>
				<Route path={`${path}/armors/:id`}>
					<ArmorPage />
				</Route>
				<Route exact path={`${path}/items`}>
					<ItemPage />
				</Route>
				<Route path={`${path}/items/:id`}>
					<ItemPage />
				</Route>
				<Route exact path={`${path}/locations`}>
					<LocationLandingPage />
				</Route>
				<Route path={`${path}/locations/:id`}>
					<LocationPage />
				</Route>
			</Switch>
			<Segment.Group>
				<Segment>
					<Header>Characters</Header>
					{(menuItems[0][2] as string[]).map((char) => (
						<Label icon="user" as={Link} to={`/wiki/characters/${char}`}>
							{char}
						</Label>
					))}
				</Segment>
				<Segment>
					<Header>Weapons</Header>
					{(menuItems[1][2] as string[]).map((char) => (
						<Label icon="user" as={Link} to={`/wiki/weapons/${char}`}>
							{char}
						</Label>
					))}
				</Segment>
				<Segment>
					<Header>Armors</Header>
					{(menuItems[2][2] as string[]).map((char) => (
						<Label icon="user" as={Link} to={`/wiki/armors/${char}`}>
							{char}
						</Label>
					))}
				</Segment>
				<Segment>
					<Header>Locations</Header>
					{(menuItems[3][2] as string[]).map((char) => (
						<Label icon="user" as={Link} to={`/wiki/locations/${char}`}>
							{char}
						</Label>
					))}
				</Segment>
			</Segment.Group>
		</PageComponent>
	);
};

export default WikiView;
