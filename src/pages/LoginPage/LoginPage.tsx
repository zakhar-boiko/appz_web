import { Button, Center, Stack, Text, useToast } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../../features/login/components/FormInput/FormInput";
import { useSignIn } from "../../features/login/api/client";
import useUser from "../../hooks/useUser/useUser";
import { useNavigate } from "react-router";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const { mutate: login, isLoading } = useSignIn();
  const { setToken, setProfile } = useUser();
  const navigate = useNavigate();
  const toast = useToast();

  const signInScheme = Yup.object().shape({
    email: Yup.string()
      .min(5, "Email занадто короткий")
      .max(320, "Email занадто довгий.")
      .required("Це поле є обов'язковим.")
      .email("Хибний email, спробуйте ще раз."),
    password: Yup.string()
      .min(6, "Пароль занадто короткий.")
      .max(50, "Пароль занадто довгий.")
      .required("Це поле є обов'язковим."),
  });

  const signIn = async (email: string, password: string) => {
    login(
      { email, password },
      {
        onSuccess: (response) => {
          if (response.token) {
            setToken(response.token);
            setProfile({
              name: response.name ?? "",
              doctor: response.doctor ?? {},
              diseases: response.diseases ?? [],
              id: response.id ?? "",
            });
            navigate("/profile");
          } else {
            toast({
              status: "error",
              title: "Помилка",
              description:
                "Користувача не знайдено, спробуйте увійти в інший аккаунт!",
              duration: 3000,
              isClosable: true,
            });
          }
        },

        onError: () => {
          toast({
            status: "error",
            title: "Помилка",
            description: "Сталася помилка, спробуйте ще раз!",
            duration: 3000,
            isClosable: true,
          });
        },
      }
    );
  };

  return (
    <Center>
      <Formik
        validationSchema={signInScheme}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          signIn(values.email, values.password);
        }}
      >
        {(props) => (
          <Form style={{ width: "100%", maxWidth: "800px" }}>
            <Stack
              width="100%"
              spacing={{
                base: "1.25rem",
                sm: "1rem",
                md: "1.25rem",
                lg: "1.5rem",
                xl: "2rem",
              }}
            >
              <FormInput
                name="email"
                label="Email"
                type="email"
                placeholder="Введіть email адресу"
              />
              <FormInput
                name="password"
                label="Пароль"
                type="password"
                placeholder="Введіть пароль"
                isResetable={true}
              />

              <Button
                margin="0"
                minWidth={{ base: "100%", sm: "auto", lg: "48%" }}
                type="submit"
                variant="primary"
                height="fit-content"
                transition="all 0.3s"
                _active={{}}
                _hover={{ backgroundColor: "black" }}
                cursor="pointer"
                borderRadius={{
                  base: "0.5rem",
                  sm: "0.35rem",
                  xl: "0.5rem",
                }}
                width="fit-content"
                isLoading={isLoading}
                px={{
                  base: "3rem",
                  sm: "6rem",
                  xl: "7.5rem",
                  "2xl": "8.125rem",
                }}
                py={{
                  base: "1.125rem",
                  sm: "0.75rem",
                  md: "1rem",
                  xl: "1.125rem",
                }}
              >
                <Text
                  line-height="1.25rem"
                  fontWeight={600}
                  color="white"
                  size={{ base: "md", sm: "xs", md: "sm", xl: "md" }}
                >
                  Увійти
                </Text>
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default LoginPage;
