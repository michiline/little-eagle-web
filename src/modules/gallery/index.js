import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import GalleryList from './GalleryList'
import SessionsList from './SessionsList'
import JustifySwipe from './justify-swipe'
import { ScrollToTop } from '../../hooks'

const Gallery = ({ setShowSwipe }) => {
	let { path } = useRouteMatch()
	return (
		<RootContainer>
			<Helmet>
				<title>Gallery - Little Eagle Photography</title>
				<meta name='og:site_name' content='Little Eagle Photography' />
				<meta name='og:type' content='website' />
				<meta
					name='og:title'
					content='Gallery - Little Eagle Photography'
				/>
				<meta
					name='og:url'
					content='https://www.littleeaglephoto.com/gallery'
				/>
				<meta
					name='og:image'
					content='https://littleeagle.s3.eu-central-1.amazonaws.com/og-photo.jpg'
				/>
				<meta name='og:image:width' content='320' />
				<meta name='og:image:height' content='274' />
				<meta name='og:image:alt' content='Wedding couple love kiss' />
				<meta
					name='og:description'
					content="Little Eagle's photo gallery with people, travels, sessions, details and more."
				/>
			</Helmet>
			<ScrollToTop />
			<Switch>
				<Route exact path={path}>
					<GalleryList />
				</Route>
				<Route exact path={`${path}/people/:activeImg?`}>
					<JustifySwipe
						galleryName={'people'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/travels/:activeImg?`}>
					<JustifySwipe
						galleryName={'travels'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/details/:activeImg?`}>
					<JustifySwipe
						galleryName={'details'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions`}>
					<SessionsList />
				</Route>
				<Route exact path={`${path}/sessions/chill-vibez/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'chill-vibez'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route
					exact
					path={`${path}/sessions/budjenje-boginje/:activeImg?`}
				>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'budjenje-boginje'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions/wedding-rm/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'wedding-rm'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route
					exact
					path={`${path}/sessions/bovani-design/:activeImg?`}
				>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'bovani-design'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route
					exact
					path={`${path}/sessions/engagement-jk/:activeImg?`}
				>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'engagement-jk'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions/family-iaa/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'family-iaa'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route
					exact
					path={`${path}/sessions/maternity-sara/:activeImg?`}
				>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'maternity-sara'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions/yoni/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'yoni'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions/blogledalo/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'blogledalo'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route
					exact
					path={`${path}/sessions/baptism-karla/:activeImg?`}
				>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'baptism-karla'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions/wedding-mp/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'wedding-mp'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions/studio-zimat/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'studio-zimat'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route
					exact
					path={`${path}/sessions/lifestyle-istria/:activeImg?`}
				>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'lifestyle-istria'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route
					exact
					path={`${path}/sessions/wedding-istria/:activeImg?`}
				>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'wedding-istria'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions/wedding-mt/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'wedding-mt'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route
					exact
					path={`${path}/sessions/crikvenica-2021/:activeImg?`}
				>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'crikvenica-2021'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route
					exact
					path={`${path}/sessions/josipa-session/:activeImg?`}
				>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'josipa-session'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions/khl/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'khl'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions/aal/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'aal'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
				<Route exact path={`${path}/sessions/lilium/:activeImg?`}>
					<JustifySwipe
						subdir={'sessions'}
						galleryName={'lilium'}
						setShowSwipe={setShowSwipe}
					/>
				</Route>
			</Switch>
		</RootContainer>
	)
}

const RootContainer = styled.div`
	width: 100%;
	height: min-content;
	margin-top: 105px;
`

export default Gallery
