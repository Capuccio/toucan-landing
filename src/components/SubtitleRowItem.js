/** @format */

import styled from 'styled-components'

export default function SubtitleRowItem(props) {
	return (
		<SubtitleRowItemContainer {...props.children.props}>{props.children}</SubtitleRowItemContainer>
	)
}

const SubtitleRowItemContainer = styled.div`
	color: ${(props) => props.color || 'white'};
	width: ${(props) => props.width || '100%'};
	font-weight: ${(props) => props.weight || 'normal'};
	font-size: ${(props) => props.fontSize || '25px'};
	text-align: ${(props) => props.textalign || 'left'};
	margin: ${(props) => props.margin || 0};
	padding: ${(props) => props.padding};
	line-height: ${(props) => props.lineheight};
	letter-spacing: ${(props) => props.letterSpacing};
	font-family: ${(props) => props.fontFamily};
	background-color: ${(props) => props.bgcolor};
`
