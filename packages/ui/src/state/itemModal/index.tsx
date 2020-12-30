import { Item } from 'erbs-sdk';
import React, { useState } from 'react';

const initialState = {
	setItem: null,
	itemHistory: [],
	item: null
};

export const ItemModalContext = React.createContext(initialState);
export const ItemModalConsumer = ItemModalContext.Consumer;
export const ItemModalProvider: React.FC<any> = ({ children }) => {
	const [ item, updateItem ] = useState<Item<any>>(null);
	const [ itemHistory, updateHistory ] = useState<Array<Item<any>>>([]);

	const setItem = (newItem: string) => {
		try {
			if (!newItem) {
				updateHistory([]);
				updateItem(null);
			} else if (!item) {
				updateHistory([]);
				updateItem(new Item(newItem));
			} else if (itemHistory.length && itemHistory[itemHistory.length - 1].name === newItem) {
				updateItem(itemHistory[itemHistory.length - 1]);
				updateHistory(itemHistory.slice(0, itemHistory.length - 1));
			} else if (item.name !== newItem) {
				updateHistory([ ...itemHistory, item ]);
				updateItem(new Item(newItem));
			}
		} catch (e) {
			alert(e.message);
		}
	};

	const state = { item, setItem, itemHistory };

	return <ItemModalContext.Provider value={state}>{children}</ItemModalContext.Provider>;
};
