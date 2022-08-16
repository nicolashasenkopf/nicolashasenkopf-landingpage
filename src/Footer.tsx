import { Box, Center, Link } from "@chakra-ui/react";

export const Footer = () => (
  <Center>
    <Box minH="50px">
      <Link href="https://nicolas-hasenkopf.de/impressum" isExternal p={4}>
        Impressum
      </Link>
      <Link href="https://nicolas-hasenkopf.de/datenschutz" isExternal p={4}>
        Datenschutzerklärung
      </Link>
    </Box>
  </Center>
);
