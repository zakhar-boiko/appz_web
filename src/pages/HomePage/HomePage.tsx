import { Button, Flex, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import cover from "../../assets/images/home.png";
import { useSignIn } from "../../features/home/api";
interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const { mutate } = useSignIn();
  const toast = useToast();

  const signIn = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          toast({
            status: "success",
            title: "Success",
            duration: 3000,
            isClosable: true,
          });
        },

        onError: () => {
          toast({
            status: "error",
            title: "Error",
            duration: 3000,
            isClosable: true,
          });
        },
      }
    );
  };

  return (
    <Flex alignItems='center' gap="3rem" maxWidth="100% !important">
      <Image maxH='calc(100vh - 100px)' width='1rem' flexGrow={1} ml="-5rem" flexShrink={1} src={cover} alt="cover" />
      <Stack gap='2rem' maxWidth='400'>
        <Text color="main" lineHeight='3rem' fontWeight="800" fontSize="xl">
          REHAB UA - розумна реабілітація для вас
        </Text>
        <Button onClick={signIn} variant="primary">
          Увійти
        </Button>
      </Stack>
    </Flex>
  );
};

export default HomePage;
