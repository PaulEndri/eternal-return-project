import { FunctionComponent, useState } from 'react';
import { getImageSrc } from '../utilities/getImageSrc';

interface CharacterThumbnailProps {
	name: string;
	onClick?: Function;
}

/**
 * 
const CharacterThumbnailComponent: FunctionComponent<CharacterThumbnailProps> = ({
	name,
	onClick
}) => {
	const [ hovering, setHovering ] = useState(false);
	const parentStyle = {
		overflow: 'hidden',
		height: '100px',
		width: '120px'
	};

	if (hovering && onClick) {
		Object.assign(parentStyle, {
			backgroundColor: 'rgba(200, 200, 200, 0.9)',
			border: '1px solid rgba(200, 200, 200, 1)'
		});
	} else {
		Object.assign(parentStyle, {
			backgroundColor: 'rgba(200, 200, 200, 0.5)',
			border: '1px solid rgba(200, 200, 200, 1)'
		});
	}
	return (
		<div
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			onClick={(e) => (onClick ? onClick(e) : null)}
			style={parentStyle}
		>
			<img
				src={getImageSrc(name)}
				className="ui medium image"
				style={{
					minWidth: '300px',
					objectFit: 'cover',
					objectPosition: '50% 10%',
					height: '200px',
					marginLeft: '-80px'
				}}
			/>
		</div>
	);
};
 */

const CharacterThumbnailComponent: FunctionComponent<CharacterThumbnailProps> = ({
	name,
	onClick
}) => {
	const [ hovering, setHovering ] = useState(false);
	const parentStyle = {
		overflow: 'hidden',
		height: '100px',
		width: '120px'
	};

	if (hovering && onClick) {
		Object.assign(parentStyle, {
			backgroundColor: 'rgba(200, 200, 200, 0.9)',
			border: '1px solid rgba(200, 200, 200, 1)'
		});
	} else {
		Object.assign(parentStyle, {
			backgroundColor: 'rgba(200, 200, 200, 0.5)',
			border: '1px solid rgba(200, 200, 200, 1)'
		});
	}
	return (
		<div
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			onClick={(e) => (onClick ? onClick(e) : null)}
			style={parentStyle}
		>
			<img
				src={getImageSrc(name)}
				className="ui medium image"
				style={{
					minWidth: '300px',
					objectFit: 'cover',
					objectPosition: '50% 10%',
					height: '200px',
					marginLeft: '-80px'
				}}
			/>
		</div>
	);
};

export default CharacterThumbnailComponent;
