/** @format */

import styled from 'styled-components'

export default function SectionTitle(props) {
	return <SectionTitleContainer {...props}>{props.children}</SectionTitleContainer>
}

const SectionTitleContainer = styled.div`
	color: ${(props) => props.color || 'white'};
	width: ${(props) => (props.width ? props.width : '100%')};
	height: ${(props) => props.height};
	font-weight: ${(props) => props.fontWeight || 'bold'};
	font-size: ${(props) => (props.titleFontSize ? props.titleFontSize : '16px')};
	font-family: ${(props) => props.fontFamily};
	line-height: ${(props) => props.lineheight || '1.3em'};
	margin: ${(props) => props.margin || '0 0 21px 0'};
	white-space: ${(props) => props.whiteSpace};
	text-align: ${(props) => props.textAlign};
	letter-spacing: ${(props) => props.letterSpacing};

	& > span {
		font-weight: bold;
	}
`
