import {
  Box,
  HStack,
  Heading,
  Spacer,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { AtSignIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import DummyCard from "./components/DummyCard";
import LoadingState from "./components/LoadingState";
import ThreadLayout from "./layout";
import { Suspense, useEffect, useState } from "react";

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI1ZjA5YzAzMGM2ZWQ2MzkxNTg4YmZmNThhZGMyZCIsInN1YiI6IjY0ZGI2NmMzMDAxYmJkMDQxYWYzMjYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3TRLrjJwVsMyxvnOiNcGCnVBJthmalDPhm-mOAYOY6Q",
      },
    };

    const movies = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        return setMovieList(response.results);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    // setTimeout(, 1000);
    getMovies();
  }, []);

  return (
    <ThreadLayout>
      <Box mt={8} mb={8}>
        <HStack>
          <HStack>
            <AtSignIcon boxSize={7} />
            <Heading>MovThreads</Heading>
          </HStack>
          <Spacer />
          <HStack>
            {colorMode == "dark" ? (
              <SunIcon boxSize={7} onClick={toggleColorMode} />
            ) : (
              <MoonIcon boxSize={7} onClick={toggleColorMode} />
            )}
          </HStack>
        </HStack>
      </Box>

      {loading ? (
        <LoadingState />
      ) : (
        <Stack mb={5} overflowY="scroll">
          <Suspense fallback={<h5>Loading..</h5>}>
            {movieList.map((item, index) => {
              return (
                <DummyCard
                  key={index}
                  title={item.original_title}
                  overview={`${item.overview.substring(0, 100)}...`}
                  poster={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                />
              );
            })}
          </Suspense>
        </Stack>
      )}
    </ThreadLayout>
  );
};

export default Page;
