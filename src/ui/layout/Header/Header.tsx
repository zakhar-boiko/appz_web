import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import logo from "../../../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import UserIcon from "../../icons/UserIcon/UserIcon";
import useUser from "../../../hooks/useUser/useUser";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const location = useLocation();
  const { token } = useUser();
  const showCabinet = location.pathname !== "/" && token.length > 0;
  return (
    <Flex
      as="header"
      zIndex={1001}
      position="sticky"
      justifyContent={showCabinet ? "space-between" : "flex-start"}
      alignItems="center"
      maxWidth={1920}
      px={{ base: "1rem", sm: "3rem" }}
      py="1rem"
    >
      <NavLink to="/">
        <Image width="10rem" src={logo} alt="Logo" />
      </NavLink>
      {showCabinet && (
        <NavLink to="/profile">
          {({ isActive, isPending }) => (
            <HStack spacing="0.75rem" alignItems="center">
              <UserIcon fill={isActive ? "#1F5D72" : "black"} />
              <Text
                whiteSpace="nowrap"
                color={isActive ? "#1F5D72" : "black"}
                size={{ base: "xs", md: "sm", xl: "md" }}
              >
                Мій кабінет
              </Text>
            </HStack>
          )}
        </NavLink>
      )}
    </Flex>
  );
};

export default Header;
