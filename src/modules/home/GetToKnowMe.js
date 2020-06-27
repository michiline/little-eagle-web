import React from 'react'
import styled from 'styled-components'
import { hi, facts1, facts2, facts3 } from '../../images'
import { useWindow } from '../../hooks'

const GetToKnowMe = () => {
	const [windowWidth] = useWindow()
	return (
		<RootContainer>
			<TextColumn>
				<TextContainer>
					<TextFrame />
					<HeaderWrapper>
						<H1>Get to know</H1>
						<H1>me better</H1>
					</HeaderWrapper>
					<TextWrapper>
						<Text>
							I’m a true fan of traveling. If a weekend is free, I’m on the road. 
						</Text>
						<Text>
							Camping is my new found passion. The goal is to increase my days spent in nature every year.
						</Text>
						<Text>
							I can eat a lot of ice-cream. 
						</Text>
						<Text>
							And watermelon. 
						</Text>
						<Text>
							I'm an introvert. Talking about myself is hard so imagine how much time it takes me to write this.
						</Text>
						<Text>
							I don’t think anyone likes summer and sea more than me. 
						</Text>
						<Text>
							My boyfriend and I have our travel blog. Check it out: Leagle & Mich
						</Text>
						<Text>
							I do yoga and have recently started including meditation in my everyday life.
						</Text>
						<Text>
							Little Eagle is my nickname because my surname in Croatian means just that!
						</Text>
					</TextWrapper>
					{
				windowWidth <= 750 && 
					<ImageColumn>
						<Image1 src={facts2} />
						<Image2 src={facts3} />
						<Image3 src={facts1} />
					</ImageColumn>
			}
				</TextContainer>
			</TextColumn>
			{
				windowWidth > 750 && 
					<ImageColumn>
						<Image1 src={facts2} />
						<Image2 src={facts3} />
						<Image3 src={facts1} />
					</ImageColumn>
			}

		</RootContainer>
	)
}

const RootContainer = styled.div`
	width: 100%;
	height: min-content;
	display: flex;
	flex-direction: row;
	padding-top: 75px;
	@media only screen and (max-width: 750px) {
		flex-direction: column;
	}
`

const TextColumn = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-start;
	@media only screen and (max-width: 750px) {
		width: 100%;
		height: min-content;
	}
`

const ImageColumn = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 750px) {
		width: 110%;
		height: min-content;
		flex-direction: row;
		align-ites: center;
		justify-content: space-between;
		padding-bottom: 5%;
	}
`

const TextContainer = styled.div`
	width: 90%;
	height: 90%;
	background-color: #FFEFEF;
	position: relative;
	display: flex;
	flex-direction: column;
	padding-bottom: 10%;
	@media only screen and (max-width: 750px) {
		padding-bottom: 5%;
	}
`

const TextFrame = styled.div`
	width: calc(105% + 5px);
	height: 100%;
	position: absolute;
	top: -25px;
	left: -5px;
	border: 5px solid #D3B1AF;
	z-index: -1;
`

const HeaderWrapper = styled.div`
	width: max-content;
	height: min-content;
	display: flex;
	flex-direction: column;
	padding-left: 15%;
	padding-top: 10%;
	padding-right: 5%;
	max-width: 550px;
	@media only screen and (max-width: 750px) {
		padding-left: 10%;
		padding-bottom: 5%;
	}
`

const H1 = styled.div`
	font-family: Abril Fatface;
	font-style: normal;
	font-weight: normal;
	font-size: 61px;
	line-height: 65px;
	color: #C59D9A;
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 1050px) {
		font-size: calc(61px / 1.3);
		line-height: calc(65px / 1.3);
	}
	@media only screen and (max-width: 750px) {
		font-size: calc(61px / 1.6);
		line-height: calc(65px / 1.6);
	}
`

const TextWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	max-width: 550px;
	padding-left: 15%;
	padding-top: 10%;
	padding-right: 10%;
	@media only screen and (max-width: 750px) {
		padding-left: 10%;
		padding-top: 0;
		padding-bottom: 10%;
		max-width: calc(550px / 1.3);
	}
`

const Text = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: 500;
	font-size: 25px;
	line-height: 29px;
	color: #C59D9A;
	margin-top: 15px;
	@media only screen and (max-width: 1050px) {
		font-size: calc(25px / 1.3);
		line-height: calc(29px / 1.3);
	}
	@media only screen and (max-width: 750px) {
		font-size: calc(25px / 1.6);
		line-height: calc(29px / 1.6);
	}
`

const Image1 = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;
	max-width: 325px;
	z-index: 2;
	margin-top: -50px;
	margin-right: 200px;
	transform: rotate(2.95deg);
	@media only screen and (max-width: 1050px) {
		max-width: calc(275px / 1.3);
		margin-top: calc(-50px / 1.3);
		margin-right: calc(200px / 1.3);
	}
	@media only screen and (max-width: 750px) {
		margin: 0;
		width: 31%;
		transform: rotate(0);
	}
`
const Image2 = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;
	max-width: 325px;
	z-index: 2;
	margin-right: -100px;
	margin-top: -100px;
	transform: rotate(-8.19deg);
	@media only screen and (max-width: 1050px) {
		max-width: calc(275px / 1.3);
		margin-top: calc(-100px / 1.3);
		margin-right: calc(-150px / 1.3);
	}
	@media only screen and (max-width: 750px) {
		margin: 0;
		width: 31%;
		transform: rotate(0);
	}
`
const Image3 = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;
	max-width: 325px;
	z-index: 2;
	margin-right: 200px;
	margin-top: -150px;
	transform: rotate(-0.85deg);
	@media only screen and (max-width: 1050px) {
		max-width: calc(275px / 1.3);
		margin-top: calc(-150px / 1.3);
		margin-right: calc(250px / 1.6);
	}
	@media only screen and (max-width: 750px) {
		margin: 0;
		width: 31%;
		transform: rotate(0);
	}
`

// const Image1 = styled.img`
// 	display: block;
// 	object-fit: cover;
// 	width: 30%;
// 	z-index: 2;
// 	margin-top: -10%;
// 	margin-right: 20%;
// 	transform: rotate(2.95deg);
// `
// const Image2 = styled.img`
// 	display: block;
// 	object-fit: cover;
// 	width: 30%;
// 	z-index: 2;
// 	margin-right: -10%;
// 	margin-top: -10%;
// 	transform: rotate(-8.19deg);
// `
// const Image3 = styled.img`
// 	display: block;
// 	object-fit: cover;
// 	width: 30%;
// 	z-index: 2;
// 	margin-right: 30%;
// 	margin-top: -20%;
// 	transform: rotate(-0.85deg);
// `

export default GetToKnowMe