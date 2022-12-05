/** @format */

import {
	SectionContainer,
	SectionContentContainer,
	SectionTitle,
	CenterImageIcon,
	Image,
	ContactUsInfo,
} from '../../components'

import { Map } from './index'

export default function ContactUs() {
	return (
		<>
			<SectionContainer height='370px' bgColor='rgba(28, 161, 126, 0.75)'>
				<SectionContentContainer width='50%'>
					<SectionTitle
						margin='40px 0'
						textAlign='center'
						titleFontSize='28px'
						fontWeight='600'
						fontFamily='Worksans-regular'>
						Every care center needs NAVI
					</SectionTitle>
				</SectionContentContainer>
				<CenterImageIcon padding='110px 0 0 0'>
					<Image
						width='850px'
						height='210px'
						src='https://static.wixstatic.com/media/c86aa8_6a3853ed9b254a31a3ddeb3b1bc399ef~mv2.jpg/v1/fill/w_940,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Profile%20background-Liderman.jpg'
					/>
				</CenterImageIcon>
			</SectionContainer>
			<ContactUsInfo color='white' height='450px' bgColor='rgba(28, 161, 126, 0.75)' />
			<SectionContainer height='570px' bgColor='rgba(28, 161, 126, 0.75)'>
				<SectionContentContainer margin='900px'>
					<Map />
				</SectionContentContainer>
			</SectionContainer>
		</>
	)
}
