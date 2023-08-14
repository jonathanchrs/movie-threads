import { Avatar, AvatarBadge, Box, HStack, Heading, Spacer, Stack, useColorMode, Text } from '@chakra-ui/react'
import { AtSignIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import DummyCard from '../components/DummyCard'
import ThreadLayout from './layout'

const Page = () => {

    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <ThreadLayout>
            <Box mt={8} mb={8}>
                <HStack> 
                    <HStack>
                        <AtSignIcon boxSize={7} />
                        <Heading>
                            Threads
                        </Heading>
                    </HStack>
                    <Spacer />
                    <HStack>
                        <Avatar mr={2}>
                            <AvatarBadge boxSize='1.25em' bg='green.500' />
                        </Avatar>
                        <Stack spacing='0'>
                            <Text fontWeight='600' mr={5}>Jonathan Christopher</Text>
                            <Text fontWeight='300'>Web Developer</Text>
                        </Stack>
                        
                        {
                            colorMode == 'dark' ? <SunIcon boxSize={7} onClick={toggleColorMode} /> : <MoonIcon boxSize={7} onClick={toggleColorMode} />
                        }
                    </HStack>
                </HStack>
            </Box>

            <Stack overflowY='scroll' mb={8}>
                <DummyCard />
                <DummyCard />
                <DummyCard />
                <DummyCard />
                <DummyCard />
                <DummyCard />
            </Stack>
        </ThreadLayout>
    )
}

export default Page