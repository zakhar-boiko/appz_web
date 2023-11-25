import { Container, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";

interface PrimaryLayoutProps {}

const PrimaryLayout: FunctionComponent<PrimaryLayoutProps> = () => {
  return (
    <>
      <VStack alignItems='stretch' overflowX="clip" minWidth="100%" minHeight="100vh">
        <Header />
        <Container
          overflowY="hidden"
          flexGrow={1}
          maxWidth={1920}
          bg="white"
          py={{ base: "3.75rem", md: "3rem", "2xl": "6.25rem" }}
          px={{ base: "3rem", sm: "5rem" }}
        >
          <Outlet />
        </Container>
      </VStack>
    </>
  );
};

export default PrimaryLayout;
