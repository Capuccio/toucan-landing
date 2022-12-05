/** @format */

import { Link } from 'react-router-dom'

import styled from 'styled-components'

export default function Footer() {
	return (
		<FooterContainer>
			<NavContainer>
				<Link to='/'>
					<div>Home</div>
				</Link>
				<Link>
					<div>Whay Is Navi?</div>
				</Link>
				<Link>
					<div>NAVI Services</div>
				</Link>
				<Link>
					<div>Benefits</div>
				</Link>
				<Link>
					<div>Careers</div>
				</Link>
				<Link to='/contact-us'>
					<div>Contact Us</div>
				</Link>
			</NavContainer>
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	width: 100%;
	height: 124px;
	background-color: rgb(36, 35, 35);
`

const NavContainer = styled.nav`
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;

	& > a {
		width: 143px;
		line-height: 34px;
		padding: 5px;
		font-size: 16px;
		text-align: center;
		color: rgb(180, 90, 211);
		transition: color 0.4s ease 0s;

		&:nth-child(-n + 5) {
			border-right-width: 1px;
			border-right-style: solid;
			border-right-color: #fff;
		}

		&:visited,
		&:link,
		a:active,
		&:hover {
			text-decoration: none;
		}

		&:hover {
			color: rgb(216, 189, 226);
		}
	}
`
