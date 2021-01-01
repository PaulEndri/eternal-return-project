export type LocationEntity = {
	name: string | number;
	id: string | number;
	quantity?: number;
};

export type Location = {
	name: string;
	id: number;
	drops: LocationEntity[];
	animals: LocationEntity[];
	connections: LocationEntity[];
	teleport: boolean;
	apiMetaData?: {
		type: string;
		code: number;
		name: string;
	};
};

export default Location;
