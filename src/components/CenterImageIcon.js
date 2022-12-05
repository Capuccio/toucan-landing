/** @format */

import styled from 'styled-components'

export default function CenterImageIcon(props) {
	return <CenterImageIconContainer {...props}>{props.children}</CenterImageIconContainer>
}

const CenterImageIconContainer = styled.div`
	text-align: center;
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	fill: ${(props) => props.fill};
`
