import * as React from 'react'

import { ReactComponent as EmailIcon } from 'src/assets/images/email.svg'
import { ReactComponent as FacebookIcon } from 'src/assets/images/facebook.svg'
import { ReactComponent as GithubIcon } from 'src/assets/images/github.svg'
import { ReactComponent as LinkedinIcon } from 'src/assets/images/linkedin.svg'
import AvatarImage from 'src/assets/images/avatar.png'

import { EMAIL_URL, FACEBOOK_URL, GITHUB_URL, LINKEDIN_URL } from './constants'
import {
  Avatar,
  Button,
  ButtonContainer,
  Card,
  CardContentContainer,
  Container,
  InfoContainer,
} from './styles'

export const HomePage = () => {
  return (
    <Container>
      <Card>
        <CardContentContainer>
          <Avatar alt="Hung Pham Sy" src={AvatarImage} />
          <InfoContainer>
            <h1 className="title">Hung Pham Sy</h1>
            <h2 className="description">Software Engineer</h2>
          </InfoContainer>
        </CardContentContainer>
        <ButtonContainer>
          <Button href={GITHUB_URL}>
            <GithubIcon />
          </Button>
          <Button href={LINKEDIN_URL}>
            <LinkedinIcon />
          </Button>
          <Button href={FACEBOOK_URL}>
            <FacebookIcon />
          </Button>
          <Button href={EMAIL_URL}>
            <EmailIcon />
          </Button>
        </ButtonContainer>
      </Card>
    </Container>
  )
}
