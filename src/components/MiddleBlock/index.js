import { Row, Col } from 'antd'
import { withTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'

import * as S from './styles'

const MiddleBlock = ({ id, title, t }) => {
  return (
    <S.MiddleBlock id={id}>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <S.ClientContainer>
                <a className="client" href="https://kiyomizuart.com/">
                  清水艺术
                </a>
                <a className="client" href="http://seedsystem.co.jp/">
                  シードシステム株式会社
                </a>
                <a className="client" href="https://www.world-flags.cn/">
                  World Flags
                </a>
                <span className="client">奇虎360科技有限公司</span>
                <span className="client">华旭基业科技有限公司</span>
                <span className="client">万丰石化有限公司</span>
                <span className="client">武汉朗耀兴合科技有限公司</span>
              </S.ClientContainer>
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  )
}

export default withTranslation()(MiddleBlock)
