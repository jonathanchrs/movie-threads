import {
  Stack,
  HStack,
  Avatar,
  AvatarBadge,
  Text,
  Divider,
} from "@chakra-ui/react";

const Menu = () => {
  return (
    <>
      <Stack w="30%">
        <HStack p={8}>
          <Avatar mr={2}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Stack spacing="0">
            <Text fontWeight="600">Jonathan Christopher</Text>
            <Text fontWeight="300">Web Developer</Text>
          </Stack>
        </HStack>
        <Divider orientation="horizontal" />
      </Stack>
    </>
  );
};

export default Menu;
