/** @format */

import { useEffect } from 'react'

import styled from 'styled-components'

import {
	SectionContainer,
	SectionContentContainer,
	SectionTitle,
	SectionSubtitle,
	SubtitleRowContainer,
	SvgContainer,
	CenterImageIcon,
	Image,
	ContactUsInfo,
} from '../../components'

export default function Home(props) {
	useEffect(() => {
		document.title = 'Home | bluepoint2'
	}, [])

	return (
		<HomeContainer>
			<SectionContainer>
				<SectionContentContainer margin='980px'>
					<SectionTitle titleFontSize='38px' width='342px' color='#2b388c'>
						We’re the company thats changing the way you navigate your healthcare.
					</SectionTitle>
					<SectionSubtitle width='304px' color='#1ca17e'>
						Innovative solutions that create a comfortable, intuitive patient experience.
					</SectionSubtitle>
				</SectionContentContainer>
				<Image src='https://static.wixstatic.com/media/c86aa8_358f73285afd482195e23f9e02bbc0a9~mv2.jpg/v1/fill/w_1899,h_666,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c86aa8_358f73285afd482195e23f9e02bbc0a9~mv2.jpg' />
			</SectionContainer>
			<SectionContainer bgColor='rgba(43, 56, 140, 0.9)'>
				<CenterImageIcon padding='110px 0 0 0' margin='0 0 25px 0'>
					<Image
						width='75px'
						height='76px'
						src='https://static.wixstatic.com/media/c86aa8_6f4b7cbb017b4a70913599a5034e6ea1~mv2.png/v1/fill/w_91,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_258163476-key-modified.png'
					/>
				</CenterImageIcon>
				<SectionContentContainer width='50%'>
					<SectionTitle textAlign='center' titleFontSize='38px'>
						Communication is the key.
					</SectionTitle>
					<SectionSubtitle fontSize='23px' textAlign='center'>
						We believe that better communication leads to better outcomes in healthcare. Our passion
						and mission are to create better communication between patients and care providers
					</SectionSubtitle>
					<TextSign>-&nbsp;it’s that simple.</TextSign>
				</SectionContentContainer>
			</SectionContainer>
			<SectionContainer>
				<SectionContentContainer margin='1179px'>
					<SectionTitle titleFontSize='36px' width='481px' color='#2b388c'>
						Introducing NAVI•Services
					</SectionTitle>
					<SectionSubtitle width='474px' subtitleWeight='500' color='#1ca17e'>
						Fast and accurate insurance information collected from your patients
					</SectionSubtitle>
				</SectionContentContainer>
				<Image src='https://static.wixstatic.com/media/2a9fd3_9d8d7eca93c34a7e859b58dbbc5aa706~mv2.jpg/v1/crop/x_0,y_36,w_2000,h_934/fill/w_1795,h_841,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_135032238-Girl-on-phone.jpg' />
			</SectionContainer>
			<SectionContainer height='505px' bgColor='rgba(43, 56, 140, 0.9)'>
				<CenterImageIcon width='53px' padding='110px 0 0 0' margin='0 0 25px 0' fill='#2b388c'>
					<Image
						width='75px'
						height='76px'
						src='https://static.wixstatic.com/media/c86aa8_fb7bd5fa000f4ba9ae7526484109561f~mv2.png/v1/fill/w_94,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_258163476-communication-modif.png'
					/>
				</CenterImageIcon>
				<SectionContentContainer width='50%'>
					<SectionTitle textAlign='center' titleFontSize='38px'>
						Better communication starts with NAVI
					</SectionTitle>
					<SectionSubtitle fontSize='23px' textAlign='center' width='70%' margin='auto'>
						NAVI allows patients to navigate their healthcare appointments and communicate with
						their care providers from any mobile device.
					</SectionSubtitle>
				</SectionContentContainer>
			</SectionContainer>
			<SectionContainer height='445px' bgColor='rgba(250, 250, 250, 0.95)'>
				<CenterImageIcon padding='110px 0px 0px 0px' margin='0px 0px 25px 0px' fill='#2b388c'>
					<SvgContainer viewBox='0 19.7 200 161.209' height='82px' width='53px'>
						<path d='M78.2 19.8L85.7 33c.8 1.4 1.7 2.9 2.7 4.5-3.9 2.3-7.7 4.7-11.5 6.9-12.7 7.3-24.2 16.2-33.4 27.8-8.9 11.2-13 24.1-14.3 38.5 4.4 0 8.6-.4 12.8.1 6.8.7 13.9 1.1 20.3 3.3 13.1 4.4 19.5 14.3 20.7 27.9.6 7.4-.5 14.4-4.2 20.9-7.8 13.6-20.5 19.7-37.3 17.5-21.8-2.6-33.5-13.5-38.7-36.3-1.2-5.3-1.9-10.7-2.8-16v-15.4c.2-.6.5-1.2.6-1.9 1-10 4-19.3 8.8-28.1 11.1-20.4 27-36.3 46.3-48.9 7.2-4.7 14.5-9.4 21.8-14.1.2.1.4.1.7.1z'></path>
						<path d='M189.4 19.8c3.5 5.8 6.9 11.6 10.6 17.8-1.7 1-3.4 2.1-5.1 3-13.4 7.8-26.3 16.1-36.8 27.9-10.7 12-15.9 26-17.4 42.3 1.4 0 2.8-.1 4.2 0 8.3.6 16.8.2 24.8 2.1 18.9 4.4 26.1 18.9 24.8 36.6-1.3 16.9-15.3 30.5-31.9 31.3-12.2.6-23.9-1.1-33.5-9.5-8.7-7.6-12.6-17.9-15.1-28.8-7.2-32.2 2.1-59.7 23.9-83.6 11-12 23.8-21.8 37.6-30.3 4.5-2.8 8.8-5.8 13.3-8.8h.6z'></path>
					</SvgContainer>
				</CenterImageIcon>
				<SectionContentContainer width='50%'>
					<SectionSubtitle
						color='rgb(96, 94, 94, 0.85)'
						fontSize='23px'
						textAlign='center'
						width='70%'
						margin='auto'>
						NAVI allows patients to navigate their healthcare appointments and communicate with
						their care providers from any mobile device.
					</SectionSubtitle>
					<TextSign color='#2B388C' sign={true}>
						<span>
							<p>Liderman Duin</p>
						</span>
						<span>
							<p>Founder of bluepoint2</p>
						</span>
					</TextSign>
				</SectionContentContainer>
			</SectionContainer>
			<SectionContainer height='185px' bgColor='rgba(43, 56, 140)'>
				<SectionContentContainer margin='850px'>
					<SectionTitle titleFontSize='38px' whiteSpace='nowrap'>
						Healthcare communication for a mobile world
					</SectionTitle>
				</SectionContentContainer>
			</SectionContainer>
			<SectionContainer height='600px' bgColor='rgba(43, 56, 140, 0.9)'>
				<SectionContentContainer width='auto' marginTop='55px' margin='850px'>
					<SectionTitle
						width='66%'
						margin=' 0 0 32px 0'
						titleFontSize='36px'
						letterSpacing='0.03em'>
						Healthcare providers are increasingly adopting mobile messaging.
					</SectionTitle>
					<SubtitleRowContainer width='auto' firstFontSize='20px' firstWeight='bold'>
						<span
							width='25%'
							fontSize='20px'
							lineheight='1.5em'
							letterSpacing='0.05em'
							fontFamily='Worksans-regular'>
							More people than ever prefer communicating through mobile messaging, especially when
							it comes to healthcare information. Care providers can use texting to communicate with
							patients in a more personal way through all the key touchpoints of the patient
							journey.
						</span>
						<div width='20%' margin='0 0 0 65px'>
							<Image
								src='https://static.wixstatic.com/media/c86aa8_6024232ebe564e07b91410ffc3c4f8ad~mv2.png/v1/fill/w_311,h_310,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/90%25-circle-graphic.png'
								width='279px'
								height='278px'
							/>
						</div>
						<span
							margin='0 0 0 35px'
							width='25%'
							fontSize='26px'
							lineheight='1.5em'
							letterSpacing='0.05em'
							fontFamily='Worksans-extralight'>
							Increased online patient involvement can result in a 90% satisfaction rate for both
							patients and physicians.
						</span>
					</SubtitleRowContainer>
				</SectionContentContainer>
			</SectionContainer>
			<SectionContainer height='580px' bgColor='rgba(67, 200, 245, 0.95)'>
				<SectionContentContainer marginTop='55px' margin='950px'>
					<SectionTitle
						width='48%'
						margin=' 0 0 32px 0'
						titleFontSize='30px'
						letterSpacing='0.03em'
						color='#2B388C'>
						One example of the economic impact of inefficient communications in Healthcare.
					</SectionTitle>
					<SectionContentContainer marginTop='-30px' margin='840px'>
						<SectionTitle
							width='35%'
							titleFontSize='20px'
							letterSpacing='0.05em'
							lineheight='1.5em'
							color='#2B388C'
							fontWeight='normal'>
							Admitting one patient takes about 51 minutes, of which an average of 33 minutes or{' '}
							<span>65% is lost</span> due to inefficient communications.
						</SectionTitle>
					</SectionContentContainer>
					<Image
						src='https://static.wixstatic.com/media/c86aa8_3487b37b109e405083ecf2ea5bdd0ef4~mv2.png/v1/fill/w_483,h_350,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Admission%20time%20graphic.png'
						width='386px'
						height='280px'
						margin='0 0 0 -41px'
					/>
					<SectionContentContainer marginTop='-175px' margin='525px'>
						<SectionTitle
							width='30%'
							titleFontSize='20px'
							letterSpacing='0.05em'
							lineheight='1.7em'
							color='#2B388C'
							fontWeight='normal'>
							This translates into an annual loss of about <span>$728,000</span> per U.S. hospital.
						</SectionTitle>
					</SectionContentContainer>
					<SectionContentContainer width='auto' marginTop='-545px' margin='0px'>
						<Circle>
							<div>
								<SectionTitle
									width='100%'
									titleFontSize='28px'
									letterSpacing='0.05em'
									lineheight='1.5em'
									textAlign='center'
									margin='0'
									fontFamily='Worksans-regular'>
									Communication
								</SectionTitle>
								<SectionTitle
									width='60%'
									margin='auto'
									titleFontSize='26px'
									lineheight='1.5em'
									fontFamily='Worksans-regular'
									textAlign='center'
									fontWeight='normal'>
									is the one key element that has a part to play in every area of the patient
									experience.
								</SectionTitle>
							</div>
						</Circle>
					</SectionContentContainer>
				</SectionContentContainer>
			</SectionContainer>
			<SectionContainer height='500px' bgColor='rgba(28, 161, 126, 0.95)'>
				<SectionContentContainer width='auto' marginTop='55px' margin='850px'>
					<SubtitleRowContainer firstFontSize='20px' firstWeight='bold'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/QSNa8U1yGrM'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
						<span
							margin='0 0 0 50px'
							width='24%'
							fontSize='31px'
							lineheight='1.5em'
							letterSpacing='0.05em'
							fontFamily='Worksans-extralight'>
							Watch this short video to learn how NAVI can help your organization.
						</span>
					</SubtitleRowContainer>
				</SectionContentContainer>
			</SectionContainer>
			<ContactUsInfo color='#2B388C' height='550px' bgColor='rgba(67, 200, 245, 0.70)' />
		</HomeContainer>
	)
}

const HomeContainer = styled.div``

const TextSign = styled.div`
	font-size: 23px;
	color: ${(props) => props.color || 'white'};
	margin-top: 4px;
	text-align: center;

	& > span:first-child {
		font-family: 'Haviland';
		font-style: italic;
		font-size: 47px;
		letter-spacing: 0.01em;
	}

	& > span:last-child {
		font-size: 18px;
		letter-spacing: 0.01em;
	}
`

const Circle = styled.div`
	border: 4px solid white;
	background-color: rgb(43, 56, 140);
	width: 435px;
	height: 435px;
	border-radius: 50%;

	& > div {
		margin: 90px 0 0 0;
	}
`
