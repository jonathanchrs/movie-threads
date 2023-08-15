import { Flex, Divider } from "@chakra-ui/react";
import Menu from "./menu";

const RootLayout = ({ children }) => {
    return (
        <Flex h="100vh">
            <Menu />
            <Divider orientation="vertical" />
            {children}
        </Flex>
    );
};

export default RootLayout;
