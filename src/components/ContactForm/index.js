import { lazy } from 'react'
import { Row, Col } from 'antd'
import Zoom from 'react-reveal/Zoom'
import { withTranslation } from 'react-i18next'

import useForm from './useForm'
import validate from './validationRules'

import * as S from './styles'

const Block = lazy(() => import('../Block'))
const Input = lazy(() => import('../../common/Input'))
const Button = lazy(() => import('../../common/Button'))
const TextArea = lazy(() => import('../../common/TextArea'))

const Contact = ({ title, id, t }) => {
  const { values, errors, handleChange, handleSubmit, submitting } = useForm(
    validate
  )

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type]
    return errors[type] ? (
      <Zoom cascade>
        <S.Span>{ErrorMessage}</S.Span>
      </Zoom>
    ) : (
      <S.Span />
    )
  }

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  id="contact.name"
                  placeholder="contact.namePlaceholder"
                  value={values.name}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  id="contact.email"
                  placeholder="contact.emailPlaceholder"
                  value={values.email}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="contact.messagePlaceholder"
                  value={values.message}
                  name="message"
                  id="contact.message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit" disabled={submitting}>
                  {submitting ? t('contact.submitting') : t('contact.submit')}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  )
}

export default withTranslation()(Contact)
