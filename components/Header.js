import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styled"

import React from "react"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              eum, quisquam tempore magni repudiandae quaerat incidunt? Quidem
              dolorum laudantium architecto fugiat libero hic?.
            </p>
            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>
          <Image src='/images/illustration-mockups.svg' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
