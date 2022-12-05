/** @format */

import styled from 'styled-components'

export default function SvgContainerComponent(props) {
	return (
		<SvgContainer {...props}>
			<g>{props.children}</g>
		</SvgContainer>
	)
}

const SvgContainer = styled.svg`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
`
