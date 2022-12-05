/** @format */

import styled from 'styled-components'

import { SubtitleRowItem } from './index'

export default function SubtitleRow(props) {
	return (
		<SubtitleRowContainer {...props}>
			{Array.isArray(props.children) &&
				props.children.map((children, i) => <SubtitleRowItem key={i}>{children}</SubtitleRowItem>)}
		</SubtitleRowContainer>
	)
}

const SubtitleRowContainer = styled.div`
	display: flex;
	align-items: center;
	width: ${(props) => props.width};
	height: auto;
	margin: 50px 0 0 0;
	border: ${(props) => props.border};
	padding: ${(props) => props.padding};
	background-color: ${(props) => props.bgColor};
`
