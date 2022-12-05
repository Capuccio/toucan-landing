/** @format */

import { Link, Outlet } from 'react-router-dom'

import styled from 'styled-components'

import { Image, Footer } from './index'

export default function Navbar() {
	return (
		<>
			<NavbarContainer>
				<NavbarContent>
					<ImageContainer>
						<Link to='/'>
							<div style={{ width: '100%', height: '100%' }}>
								<Image
									src='https://static.wixstatic.com/media/c86aa8_b9d1a19b6fa148129b39180b7518a3ef~mv2.png/v1/fill/w_263,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bluepoint2-Logo-Solid-DrkBlue.png'
									width='210'
									height='41'
								/>
							</div>
						</Link>
					</ImageContainer>
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
				</NavbarContent>
			</NavbarContainer>
			<Outlet />
			<Footer />
		</>
	)
}

const NavbarContainer = styled.div`
	width: 100%;
	height: 124px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	box-shadow: 0px 0px 5px rgb(0, 0, 0, 1);
`

const NavbarContent = styled.div`
	display: flex;
	align-items: center;
`

const ImageContainer = styled.div`
	flex: 1 2 1;
`

const NavContainer = styled.nav`
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	font-family: 'Worksans-regular';

	& > a {
		width: 118px;
		line-height: 22px;
		padding: 5px;
		font-size: 16px;
		text-align: center;
		color: rgb(180, 90, 211);
		transition: color 0.4s ease 0s;

		&:nth-child(-n + 5) {
			border-right-width: 1px;
			border-right-style: solid;
			border-right-color: rgb(180, 90, 211);
		}

		&:visited,
		&:link,
		a:active,
		&:hover {
			text-decoration: none;
		}

		&:hover {
			color: rgb(0, 0, 0);
		}
	}
`
