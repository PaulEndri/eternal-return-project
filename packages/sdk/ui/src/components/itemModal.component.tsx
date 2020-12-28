import React, { useContext } from 'react';
import { Button, Icon, Modal, Segment } from 'semantic-ui-react';
import { ItemModalContext } from '../state/itemModal';
import { ItemCardComponent } from './itemCard.component';

export const ItemModalComponent = () => {
	const { item, setItem, itemHistory } = useContext(ItemModalContext);

	return (
		<Modal basic onClose={() => setItem(null)} open={item} size="small">
			<Modal.Content style={{ width: '100%', paddingBottom: 0 }}>
				<div
					style={{
						maxWidth: '300px',
						backgroundColor: 'rgba(66, 64, 74, 1)',
						textAlign: 'center',
						margin: 'auto'
					}}
				>
					<ItemCardComponent item={item} />
				</div>
			</Modal.Content>
			<Modal.Actions style={{ paddingTop: 0 }}>
				<div style={{ maxWidth: '300px', margin: 'auto' }}>
					<Segment color="black" inverted style={{ borderRadius: 0, marginTop: 0 }}>
						{itemHistory &&
						itemHistory.length > 0 && (
							<Button
								floated="left"
								color="yellow"
								onClick={() => setItem(itemHistory[itemHistory.length - 1].name)}
							>
								<Icon name="backward" />
								Back
							</Button>
						)}
						<Button color="red" onClick={() => setItem()}>
							<Icon name="close" />Close
						</Button>
					</Segment>
				</div>
			</Modal.Actions>
		</Modal>
	);
};
