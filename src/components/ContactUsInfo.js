/** @format */

import {
	SectionContainer,
	SectionContentContainer,
	SectionTitle,
	SectionSubtitle,
	SubtitleRowContainer,
	CenterImageIcon,
	SvgContainer,
	Image,
	ExternalLink,
} from './index'

export default function ContactUsInfo(props) {
	return (
		<SectionContainer height={props.height} bgColor={props.bgColor}>
			<SectionContentContainer marginTop='25px' margin='1200px'>
				<SectionTitle
					width='100%'
					textAlign='center'
					margin=' 0 0 15px 0'
					titleFontSize='36px'
					letterSpacing='0.03em'
					color={props.color}>
					Contact Us
				</SectionTitle>
				<SectionSubtitle
					width='100%'
					fontSize='24px'
					letterSpacing='0.05em'
					lineheight='1.5em'
					color={props.color}
					textAlign='center'
					fontWeight='normal'
					fontFamily='Worksans-regular'>
					We would love to hear from you!
				</SectionSubtitle>
				<SubtitleRowContainer width='1200px' padding='11px' bgColor='rgb(255, 255, 255, 0.75)'>
					<div width='33.33%' padding='20px' textalign='center' bgcolor='rgba(43, 56, 140, 0.85)'>
						<CenterImageIcon padding='40px' fill='#fff'>
							<SvgContainer viewBox='1.438 1 81.176 51.036' height='54px' width='53px'>
								<path d='M82.4 1.9c-.2-.6-.8-.9-1.4-.9L2.9 3.6c-.7 0-1.2.4-1.4 1.1-.2.6.1 1.2.7 1.6l18.6 11.2-8 13.2c-.3.5-.3 1.1 0 1.6s.7.7 1.4.7l13.8-.9 4.4 18.8c.1.5.5 1 1.1 1.1.5.1 1.1 0 1.5-.4l47.3-48c.4-.6.4-1.1.1-1.7zM8.1 6.4l63.6-2.1-47.6 11.9c-.1-.2-.3-.3-.5-.5L8.1 6.4zm8.8 23.4l7.3-12c.1-.2.2-.4.2-.6L77 4.2 30.1 29.4c-.3-.2-.6-.4-1-.4H29l-12.1.8zm17.7 17.7l-4-17.3L75.4 6.1 34.6 47.5z'></path>
							</SvgContainer>
						</CenterImageIcon>
						<SectionTitle letterSpacing='0.1em' fontSize='16px' fontWeight='normal'>
							info@bluepoint2.com
						</SectionTitle>
					</div>
					<div
						width='33.33%'
						padding='20px'
						textalign='center'
						bgcolor='rgba(43, 56, 140, 0.85)'
						margin='0 15px'>
						<CenterImageIcon padding='40px' fill='#fff'>
							<SvgContainer viewBox='40 9.96 141 193.94' height='54px' width='53px'>
								<path d='M136.1 58.9c.8 0 1.4.7 1.4 1.4V184c0 .8-.7 1.4-1.4 1.4H63.9c-.8 0-1.4-.7-1.4-1.4V60.4c0-.8.7-1.4 1.4-1.4h72.2m0-11.6H63.9c-7.1 0-12.9 5.8-12.9 12.9V184c0 7.1 5.8 12.9 12.9 12.9h72.2c7.1 0 12.9-5.8 12.9-12.9V60.4c0-7.2-5.8-13-12.9-13z'></path>
								<path d='M164.8 54.3c-2.9 0-5.4-2.2-5.7-5.2-.6-6.7-5.7-12.6-12.3-14.3-3.1-.8-4.9-4-4.1-7s4-4.9 7-4.1c11.2 2.9 19.7 13 20.8 24.3.3 3.2-2 6-5.2 6.3h-.5z'></path>
								<path d='M186.2 53.1c-3.2 0-5.7-2.6-5.8-5.7 0-15.4-11.5-29.6-26.7-33-3.1-.7-5.1-3.8-4.4-6.9s3.8-5.1 6.9-4.4C176.6 7.6 192 26.6 192 47.3c0 3.2-2.6 5.8-5.8 5.8.1 0 0 0 0 0z'></path>
								<path d='M109.7 165c0 5.357-4.343 9.7-9.7 9.7-5.357 0-9.7-4.343-9.7-9.7 0-5.357 4.343-9.7 9.7-9.7 5.357 0 9.7 4.343 9.7 9.7z'></path>
							</SvgContainer>
						</CenterImageIcon>
						<SectionTitle letterSpacing='0.1em' fontSize='16px' fontWeight='normal'>
							913.735.6202
						</SectionTitle>
					</div>
					<div width='33.33%' padding='17px' textalign='center' bgcolor='rgba(43, 56, 140, 0.85)'>
						<CenterImageIcon padding='49px'>
							<ExternalLink href='https://www.linkedin.com/company/bluepoint2/'>
								<Image
									width='47px'
									height='48px'
									src='https://static.wixstatic.com/media/c86aa8_1acd16586d1849e79af9a7f1edcbf6d3~mv2.gif'
								/>
							</ExternalLink>
						</CenterImageIcon>
						<SectionTitle letterSpacing='0.1em' fontSize='16px' fontWeight='normal'>
							<ExternalLink href='https://www.linkedin.com/company/bluepoint2/'>
								Visit us on LinkedIn
							</ExternalLink>
						</SectionTitle>
					</div>
				</SubtitleRowContainer>
				<SectionSubtitle
					width='100%'
					margin='50px 0 0 0'
					titleFontSize='23px'
					fontFamily='Worksans-extralight'
					letterSpacing='0.05em'
					color={props.color}
					textAlign='center'
					fontWeight='bold'>
					5440 W. 110th St, Suite 300 Overland Park, KS 66211
				</SectionSubtitle>
			</SectionContentContainer>
		</SectionContainer>
	)
}
