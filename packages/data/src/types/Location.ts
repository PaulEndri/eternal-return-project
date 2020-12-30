export interface LocationEntity {
	name: string | number;
	id: string | number;
	quantity?: number;
}

export interface Location {
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
}

export default Location;
