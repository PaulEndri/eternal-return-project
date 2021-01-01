import React, { FunctionComponent } from 'react';
import { Image } from 'semantic-ui-react';
import { getImageSrc } from '../utilities/getImageSrc';

type CharacterPortraitProps = {
	name: string;
	width?: number;
	type?: string;
};

export const CharacterPortrait: FunctionComponent<CharacterPortraitProps> = ({
	width = 200,
	type = 'half',
	name
}) => (
	<div
		style={{
			backgroundColor: '#877e8a',
			margin: 'auto',
			marginBottom: '10px',
			width,
			border: '1px solid rgba(255, 190, 16, 0.45)',

			overflow: 'hidden'
		}}
	>
		<Image style={{ maxWidth: width, width }} src={getImageSrc(`characters/${type}/${name}`)} />
	</div>
);
