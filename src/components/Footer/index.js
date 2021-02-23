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
                <S.Language>{t('header.contact')}</S.Language>
                <S.Large to="/">{t('footer.contact.title')}</S.Large>
                <S.Para>{t('footer.contact.content')}</S.Para>
                <a href="mailto:l.qqbadze@gmail.com">
                  <S.Chat>{t('footer.contact.chat')}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t('footer.policy.title')}</S.Title>
                <S.Large to="/" left="true">
                  {t('footer.policy.applicationSecurity')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('footer.policy.softwarePrinciples')}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Large left="true" to="/">
                  {t('footer.supportCenter')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('footer.customerSupport')}
                </S.Large>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t('footer.address')}</S.Language>
                <S.Para>Rancho Santa Margarita</S.Para>
                <S.Para>2131 Elk Street</S.Para>
                <S.Para>California</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t('footer.company')}</S.Title>
                <S.Large left="true" to="/">
                  {t('footer.about')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('footer.blog')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('footer.press')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('footer.careersCulture')}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor="select-lang">
                    {t('footer.language')}
                  </S.Label>
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
                <S.LogoContainer>Shenya</S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/shenyaio"
                  src="github.svg"
                />
                <SocialLink
                  href="https://weibo.com/u/7559647968"
                  src="sinaweibo.svg"
                />
                <SocialLink
                  href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkzNDIxMTc2MA#wechat_redirect"
                  src="wechat.svg"
                />
                <SocialLink
                  href="https://twitter.com/shenyaio"
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
