import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';

const SubMenuComponent = ({ items, color }: any) => (
	<Segment
		inverted
		color="red"
		style={{ borderRaddius: 0, marginTop: 0, padding: 0, paddingLeft: '10%' }}
		raised
	>
		<Menu inverted header color={color}>
			{items.map((item: string, index: number) => (
				<Menu.Item key={`${item}{${index}}`} as={Link} to={`${item.toLowerCase()}`}>
					{item}
				</Menu.Item>
			))}
		</Menu>
	</Segment>
);

export default SubMenuComponent;
