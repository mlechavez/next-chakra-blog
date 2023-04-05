import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Container maxW="1280px">
      <Flex py="30px">
        <Link as={NextLink} href="/">
          My blog
        </Link>
        <Spacer />
        <HStack spacing={5}>
          <Link as={NextLink} href="/about">
            About
          </Link>
          <Link as={NextLink} href="/contact">
            Contact
          </Link>
        </HStack>
        <Box as="nav">
          <List display="flex">
            <ListItem></ListItem>
            <ListItem></ListItem>
          </List>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
