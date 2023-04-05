import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@chakra-ui/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar></Navbar>
      <Container as="main" maxW={1280} className={poppins.className}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
