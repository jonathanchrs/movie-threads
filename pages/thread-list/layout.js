const { Stack } = require("@chakra-ui/react");

const ThreadLayout = ({ children }) => {
    return (
        <Stack maxHeight="100vh" w="40%" px={5}>
            {children}
        </Stack>
    );
};

export default ThreadLayout;
