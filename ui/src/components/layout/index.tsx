import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';

const LayoutComponent = ({ children }: any) => {
	return (
		<Container fluid style={{ marginLeft: '0px !important', marginRight: '0px !important' }}>
			<Segment
				inverted
				style={{ marginBottom: 0, borderRadius: 0, padding: 0 }}
				raised={true}
			>
				<Menu inverted>
					<Menu.Item header>ER:BS Companion</Menu.Item>
					<Menu.Item as={Link} to="/">
						Home
					</Menu.Item>
					<Menu.Item as={Link} to="/planner">
						Planner
					</Menu.Item>
				</Menu>
			</Segment>

			<Segment basic style={{ paddingLeft: 0, paddingTop: 0, paddingRight: 0, margin: 0 }}>
				{children}
			</Segment>
		</Container>
	);
};

export default LayoutComponent;
