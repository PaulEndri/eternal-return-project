import { Armors, Weapons } from 'erbs-sdk';
import React, { PureComponent, useState } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { PageComponent } from '../../components/page';
import { Characters } from 'erbs-data';
import { CharacterPage } from './CharacterPage';
import { WeaponPage } from './WeaponPage';
import { ArmorPage } from './ArmorPage';
import { ItemPage } from './ItemPage';
import { LocationPage } from './LocationPage';

const menuItems = [
	[ 'characters', 'Characters', Object.keys(Characters) ],
	[ 'weapons', 'Weapons', Object.values(Weapons).filter((wpn) => wpn !== 'Whip') ],
	[ 'armors', 'Armors', Object.values(Armors) ],

	[ 'items', 'Items' ],
	[ 'locations', 'Locations' ],
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
			<Segment basic style={{ margin: 0, padding: 0 }}>
				<Switch>
					<Route path={`${path}/characters/:id`}>
						<CharacterPage />
					</Route>
					<Route exact path={`${path}/characters`}>
						<CharacterPage />
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
						<LocationPage />
					</Route>
					<Route path={`${path}/locations/:id`}>
						<LocationPage />
					</Route>
				</Switch>
			</Segment>
		</PageComponent>
	);
};

export default WikiView;
