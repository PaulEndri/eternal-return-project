export type Armor = {
	name: string;
	items: Array<{ id: number | string; name: string }>;
	apiMetaData: {
		type: string;
		name: string;
		category: string;
	};
};

export default Armor;
