import { lazy } from 'react'
import { configResponsive, useResponsive } from 'ahooks'

configResponsive({
  middle: 768,
})

const ContactFrom = lazy(() => import('../../components/ContactForm'))
const ContentBlock = lazy(() => import('../../components/ContentBlock'))
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'))
const Container = lazy(() => import('../../common/Container'))
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'))

const Home = () => {
  const responsive = useResponsive()

  const responsiveType = type => {
    return responsive.middle ? type : 'left'
  }

  return (
    <Container className="typo">
      <ScrollToTop />
      <ContentBlock
        type={responsiveType('right')}
        first="true"
        title="intro.title"
        content="intro.text"
        button={[
          { title: 'intro.explore' },
          { title: 'intro.learnMore', color: '#fff' },
        ]}
        icon="developer.svg"
        id="intro"
      />
      <ContentBlock
        type={responsiveType('left')}
        title={'about.title'}
        content={'about.text'}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type={responsiveType('right')}
        title={'mission.title'}
        content={'mission.text'}
        icon="product-launch.svg"
        id="mission"
      />
      <MiddleBlock title={'client.title'} id="client" />
      <ContactFrom title={'contact.title'} id="contact" />
    </Container>
  )
}

export default Home
