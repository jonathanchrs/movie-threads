const { Stack } = require("@chakra-ui/react")

const ThreadLayout = ({children}) => {
  return (
    <Stack maxHeight='100vh'>
      {children}
    </Stack>
  )
}

export default ThreadLayout