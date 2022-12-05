/** @format */

import styled from 'styled-components'

export default function SectionContainerComponent(props) {
	return <SectionContainer {...props}>{props.children}</SectionContainer>
}

const SectionContainer = styled.div`
	margin: 0;
	background-color: ${(props) => props.bgColor || 'white'};
	height: ${(props) => props.height || '605px'};
`
