import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import cover from "../../assets/images/home.png";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser/useUser";
interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const user = useUser();
  const navigate = useNavigate();

  const signIn = () => {
    navigate(user.token.length > 0 ? "profile" : "/login");
  };

  return (
    <Flex
      flexDirection={{ base: "column", lg: "row" }}
      alignItems="center"
      gap='3rem'
      justifyContent="space-between"
      maxWidth="100% !important"
    >
      <Box flexShrink={1} flexGrow={0}>
        <Image
          maxH={{
            md: "calc(100vh - 10.625rem)",
            "2xl": "calc(100vh - 12.2rem)",
          }}
          width="100%"
          src={cover}
          // width="100%"
          alt="cover"
        />
      </Box>

      <Stack flexShrink={0} gap="2rem" maxWidth={{ base:'100%', lg:"400"}}>
        <Text color="main" lineHeight="3rem" fontWeight="800" fontSize="xl">
          REHAB UA - розумна реабілітація для вас
        </Text>
        <Button onClick={signIn} variant="primary">
          {user.token.length > 0 ? "Мій кабінет" : "Увійти"}
        </Button>
      </Stack>
    </Flex>
  );
};

export default HomePage;
