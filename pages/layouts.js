import { Container } from "@chakra-ui/react"

const RootLayout = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default RootLayout