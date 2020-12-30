import React, { FunctionComponent } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

export const DesktopInfoMenuComponent: FunctionComponent<any> = ({}) => {
	const location = useLocation();

	const menuItems = [
		[ 'home', 'Home' ],
		[ 'characters', 'Characters' ],
		[ 'weapons', 'Weapons' ],
		[ 'armors', 'Armors' ],
		[ 'consumables', 'Consumables' ],
		[ 'locations', 'Locations' ],
		[ 'animals', 'Animals' ],
		[ 'materials', 'Materials' ]
	];

	return (
		<Segment
			basic
			floated="left"
			inverted
			color="black"
			style={{ border: 0, borderRadius: 0, height: '95vh', marginTop: 0 }}
		>
			<Menu vertical style={{ border: 0, borderRadius: 0 }} fluid inverted color="black">
				{menuItems.map(([ route, name ]) => (
					<Menu.Item
						key={route}
						as={Link}
						to={`/wiki/${route}`}
						active={location.pathname.includes(route)}
					>
						{name}
					</Menu.Item>
				))}
			</Menu>
		</Segment>
	);
};
