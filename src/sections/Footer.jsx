import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import Section from 'components/Section'
import Row from 'components/Row'
import Col from 'components/Col'
import SectionTitle from 'components/SectionTitle'
import Frontrain from 'components/Frontrain'
import Contact from './Contact/Contact'
import Icon from 'components/Icon'

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 2rem;
`

const Footer = styled(Section)`
  margin-bottom: 5rem !important;
  font-family: monospace;
  font-size: 0.95rem;
`

const Flex = styled.div`
  display: flex;
`

const Link = styled.a`
  color: ${(p) => p.theme.colors.text};
`

const ButtonLink = styled.button`
  line-height: 1.8;
  padding: 0;
  border: none;
  text-decoration: underline;
`

const ContactPortal = (props) => {
  return typeof document !== 'undefined'
    ? createPortal(<Contact {...props} />, document.querySelector('#portal'))
    : null
}

export default () => {
  const [showContact, setShowContact] = useState(false)

  return (
    <Footer>
      <StyledSectionTitle>
        <Frontrain />
      </StyledSectionTitle>

      <Row>
        <Col width={[1, 1, 0.5]}>
          <Flex>
            <Icon src="images/email.svg" alt="Email" />
            <ButtonLink onClick={() => setShowContact(!showContact)}>
              contact
            </ButtonLink>

            {/* 
            Create a hidden form to leverage Netlify e-mail functionality to JSX.
            `netlify-honeypot` disables captcha
            */}
            <form
              name="contact"
              data-netlify
              netlify-honeypot="bot-field"
              hidden
            >
              <input type="text" name="name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>
            </form>

            <ContactPortal
              isVisible={showContact}
              handleClose={() => setShowContact(false)}
            />
          </Flex>

          <Flex>
            <Icon src="images/linkedIn.svg" alt="LinkedIn" />
            <Link
              href="https://nl.linkedin.com/in/jornluiten"
              target="_blank"
              rel="noopener"
              noreferrer
            >
              linkedIn
            </Link>
          </Flex>

          <Flex>
            <Icon src="images/kvk-simple.svg" alt="Kamer van Koophandel" />
            <span title="Kamer van Koophandel">KvK: 64846156</span>
          </Flex>
        </Col>
      </Row>
    </Footer>
  )
}
