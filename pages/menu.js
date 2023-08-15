import { Stack, HStack, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const Menu = () => {
    return (
        <>
            <Stack w="30%" p={8}>
                <HStack>
                    <Avatar mr={2}>
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                    <Stack spacing="0">
                        <Text fontWeight="600" mr={5}>
                            Jonathan Christopher
                        </Text>
                        <Text fontWeight="300">Web Developer</Text>
                    </Stack>
                </HStack>
            </Stack>
        </>
    );
};

export default Menu;
