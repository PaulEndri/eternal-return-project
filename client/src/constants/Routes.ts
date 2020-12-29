export const ROUTES = {
	data: {
		default: '/data/{metaType}'
	},
	rank: {
		top: '/rank/top/{seasonId}/{matchingTeamMode}',
		user: '/rank/{userNum}/{seasonId}/{matchingTeamMode}'
	},
	user: {
		games: '/user/games/{userNum}',
		stats: '/user/stats/{userNum}/{seasonId}'
	}
};
