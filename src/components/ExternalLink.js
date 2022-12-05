/** @format */

import styled from 'styled-components'

export default function ExternalLink(props) {
	return <ExternalLinksContainer {...props}>{props.children}</ExternalLinksContainer>
}

const ExternalLinksContainer = styled.a`
	color: ${(props) => props.color || 'inherit'};

	&:link,
	&:visited,
	&:hover,
	&:active {
		text-decoration: none;
	}
`
