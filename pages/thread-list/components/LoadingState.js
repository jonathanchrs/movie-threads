const { Skeleton, Box } = require("@chakra-ui/react");

const LoadingState = () => {
    return (
        <>
            <Skeleton h="400px" borderRadius="10px" />
            <Skeleton h="400px" borderRadius="10px" />
            <Skeleton h="400px" borderRadius="10px" />
            <Skeleton h="400px" borderRadius="10px" />
        </>
    );
};

export default LoadingState;
