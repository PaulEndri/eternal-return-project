/* tslint:disable */

import { ICharacterAttribute } from 'erbs-sdk';
import React from 'react';
import {
	Radar,
	ResponsiveContainer,
	PolarGrid,
	Legend,
	PolarAngleAxis,
	PolarRadiusAxis,
	RadarChart
} from 'recharts/umd/Recharts';

interface AttrProps {
	attributeBlock: ICharacterAttribute;
}

export const AttributeChartComponent: React.FC<AttrProps> = ({ attributeBlock }) => {
	const { mastery, controlDifficulty, ...stats } = attributeBlock;
	const data = [
		{ name: 'Mobility', fullMark: 3, data: stats.move },
		{ name: 'CC', fullMark: 3, data: stats.disruptor },

		{ name: 'Attack', fullMark: 3, data: stats.attack },

		{ name: 'Support', fullMark: 3, data: stats.assistance },
		{ name: 'Def', fullMark: 3, data: stats.defense }
	];
	return (
		<RadarChart width={200} height={150} data={data}>
			<PolarGrid />
			<PolarAngleAxis dataKey="name" />
			<Radar name={'Stats'} dataKey={'data'} fill={'brown'} fillOpacity={'0.4'} />
			<Legend />
		</RadarChart>
	);
};
