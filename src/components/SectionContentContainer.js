/** @format */

import styled from 'styled-components'

export default function SectionContentContainerComponent(props) {
	return <SectionContentContainer {...props}>{props.children}</SectionContentContainer>
}

const SectionContentContainer = styled.div`
	position: absolute;
	left: 0;
	margin: ${(props) =>
		props.margin &&
		`${props.marginTop || '70px'} 0 0 calc((100% - ${props.margin || '0px'}) * 0.5)`};
	width: ${(props) => props.width || 'auto'};
	transform: ${(props) => !props.margin && 'translate(50%, 0%)'};
`
