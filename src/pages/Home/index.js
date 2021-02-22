import { lazy } from 'react'

const ContactFrom = lazy(() => import('../../components/ContactForm'))
const ContentBlock = lazy(() => import('../../components/ContentBlock'))
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'))
const Container = lazy(() => import('../../common/Container'))
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'))

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
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
      <MiddleBlock
        title={'middle.title'}
        content={'middle.text'}
        button={'middle.button'}
      />
      <ContentBlock
        type="left"
        title={'about.title'}
        content={'about.text'}
        section={[
          {
            title: 'about.sectionOne.title',
            content: 'about.sectionOne.content',
            icon: 'notes.svg',
          },
          {
            title: 'about.sectionTwo.title',
            content: 'about.sectionTwo.content',
            icon: 'notes.svg',
          },
        ]}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={'mission.title'}
        content={'mission.text'}
        icon="product-launch.svg"
        id="mission"
      />

      <ContentBlock
        type="left"
        title={'product.title'}
        content={'product.text'}
        icon="waving.svg"
        id="product"
      />
      <ContactFrom
        title={'contact.title'}
        content={'contact.text'}
        id="contact"
      />
    </Container>
  )
}

export default Home
