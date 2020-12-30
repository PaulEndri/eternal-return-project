/** 
 * @packageDocumentation
 * @module ErBsClient
 * @ignore
 **/
export const ROUTES = {
	data: {
		default: '/data/{metaType}'
	},
	rank: {
		top: '/rank/top/{seasonId}/{matchingTeamMode}',
		user: '/rank/{userNum}/{seasonId}/{matchingTeamMode}'
	},
	user: {
		number: '/user/nickname?query={name}',
		games: '/user/games/{userNum}',
		stats: '/user/stats/{userNum}/{seasonId}'
	}
};
