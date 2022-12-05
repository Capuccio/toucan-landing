/** @format */

import styled from 'styled-components'

export default function SectionSubtitle(props) {
	return <SectionSubtitleContainer {...props}>{props.children}</SectionSubtitleContainer>
}

const SectionSubtitleContainer = styled.div`
	color: ${(props) => props.color || 'white'};
	width: ${(props) => props.width || '100%'};
	font-weight: ${(props) => props.subtitleWeight || 'normal'};
	font-size: ${(props) => props.fontSize || '25px'};
	text-align: ${(props) => props.textAlign || 'left'};
	font-family: ${(props) => props.fontFamily};
	margin: ${(props) => props.margin || 0};
`
