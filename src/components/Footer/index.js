import { lazy, Fragment } from 'react'
import { Row, Col } from 'antd'
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'

import * as S from './styles'

const SvgIcon = lazy(() => import('../../common/SvgIcon'))
const Container = lazy(() => import('../../common/Container'))
const Select = lazy(() => import('../../common/Select'))

const Footer = ({ t }) => {
  const handleChange = event => {
    i18n.changeLanguage(event.target.value)
  }

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}>
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    )
  }

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t('Contact')}</S.Language>
                <S.Large to="/">{t('Tell us everything')}</S.Large>
                <S.Para>
                  {t(
                    `Do you have any question regarding the project? Feel free to reach out.`
                  )}
                </S.Para>
                <a href="mailto:l.qqbadze@gmail.com">
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t('Policy')}</S.Title>
                <S.Large to="/" left="true">
                  {t('Application Security')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('Software Principles')}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Large left="true" to="/">
                  {t('Support Center')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('Customer Support')}
                </S.Large>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t('ADDRESS')}</S.Language>
                <S.Para>Rancho Santa Margarita</S.Para>
                <S.Para>2131 Elk Street</S.Para>
                <S.Para>California</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t('Company')}</S.Title>
                <S.Large left="true" to="/">
                  {t('About')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('Blog')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('Press')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('Careers & Culture')}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor="select-lang">{t('Language')}</S.Label>
                  <Select value={i18n.language} onChange={handleChange} />
                </S.Select>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: '3rem' }}>
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/Adrinlol/create-react-app-adrinlol"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/Adrinlolx"
                  src="wechat.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/lasha-kakabadze/"
                  src="sinaweibo.svg"
                />
                <SocialLink
                  href="https://github.com/Adrinlol/"
                  src="twitter.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  )
}

export default withTranslation()(Footer)
