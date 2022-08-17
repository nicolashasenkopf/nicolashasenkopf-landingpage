import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  LinkOverlay,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import links from "./links";
import logo from './images/logo-1024.png';
import logoDark from './images/logo-1024-dark.png';

export const Content = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg="white"
      _dark={{ bg: "bg" }}
      w="100%"
      minH="100vh"
      textAlign="center"
      p={8}
    >
      <Center w="full">
        <Flex alignItems="center" maxW="1440px" w="full">
          <Flex alignItems="center">
            <Image
              boxSize="50px"
              src={colorMode === "light" ? logo : logoDark}
              alt="logo"
            />
            <Text ml={2} textAlign="start" fontSize="xl">
              Nicolas Hasenkopf
            </Text>
          </Flex>
          <Spacer />
          <ColorModeSwitcher />
        </Flex>
      </Center>
      <Center>
        <Box
          borderRadius="3xl"
          bg="gray.300"
          _dark={{ bg: "secondaryDark" }}
          w="100%"
          maxW="800px"
          p={10}
          mt={9}
          boxShadow="xl"
        >
          <VStack spacing={5}>
            {links.map((item) => (
              <Button
                minW="200px"
                leftIcon={<FontAwesomeIcon icon={item.icon} />}
                colorScheme={item.color}
              >
                <LinkOverlay isExternal href={item.url}>
                  {item.name}
                </LinkOverlay>
              </Button>
            ))}
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};
