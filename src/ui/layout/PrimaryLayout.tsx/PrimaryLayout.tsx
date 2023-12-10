import { Container, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";

interface PrimaryLayoutProps {}

const PrimaryLayout: FunctionComponent<PrimaryLayoutProps> = () => {
  return (
    <>
      <VStack alignItems='stretch' overflowX="clip" minWidth="100%" minHeight="100vh" gap='0'>
        <Header />
        <Container
          overflowY="hidden"
          flexGrow={1}
          maxWidth={1920}
          bg="white"
          py={{ base: "2rem", md: "3rem", "2xl": "3.75rem" }}
          px={{ base: "1rem", sm: "3rem" }}
        >
          <Outlet />
        </Container>
      </VStack>
    </>
  );
};

export default PrimaryLayout;
