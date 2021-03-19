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
                <S.Language>{t('footer.address')}</S.Language>
                <S.Para>{t('footer.addressDetail')}</S.Para>
                <S.Para>{t('footer.addressCity')}</S.Para>
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
              <S.LogoContainer>
                &copy; 2020-{new Date().getFullYear()} {t('footer.companyName')}
              </S.LogoContainer>
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
                <SocialLink href="mailto:hello@shenya.io" src="email.svg" />
              </S.FooterContainer>
            </Row>
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ paddingTop: '1rem' }}>
              <S.LogoContainer>
                <a href="https://beian.miit.gov.cn/#/Integrated/index">
                  鄂ICP备2021003873号-1
                </a>
              </S.LogoContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  )
}

export default withTranslation()(Footer)
