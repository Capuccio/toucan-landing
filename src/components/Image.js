/** @format */

import styled from 'styled-components'

export default function Image(props) {
	return <ImageElement {...props} />
}

const ImageElement = styled.img`
	width: ${(props) => props.width || '100%'};
	height: ${(props) => props.height || '100%'};
	margin: ${(props) => props.margin};
	object-fit: cover;
	vertical-align: bottom;
`
