import { Search2Icon } from "@chakra-ui/icons";
import {
  Card,
  Stack,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

const DummyCard = (props) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      variant="outline"
      boxShadow="sm"
      mb={2}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        borderRadius="5px"
        src={props.poster}
        alt="Movie Poster"
      />

      <Stack borderRadius="20px">
        <CardBody>
          <Heading size="md">{props.title}</Heading>

          <Text py="2">{props.overview}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="gray" right="0">
            <Search2Icon mr={2} />
            See Details
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default DummyCard;
