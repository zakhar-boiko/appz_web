import { Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router";

interface ProfilePageProps {}

const ProfilePage: FunctionComponent<ProfilePageProps> = () => {
  const navigate = useNavigate();
  const user = {
    name: "Захар",
    doctor: {
      specialization: "Кардіолог",
      name: "Сподарик О.М.",
    },
    diseases: [
      {
        title: "Серцева недостатність",
        doctorName: "Сподарик О.М.",
      },
      {
        title: "Інсульт",
        doctorName: "Сподарик О.М.",
      },
    ],
  };

  return (
    <Stack alignItems="center" gap={{ base: "2rem", sm: "3.75rem" }}>
      <Text
        color="main"
        fontSize={{ base: "lg", sm: "xl" }}
        fontWeight="500"
        lineHeight="normal"
      >
        Вітаємо, {user.name}
      </Text>
      <Flex
        w="100%"
        alignItems="flex-start"
        justifyContent="space-between"
        gap="3rem"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Stack
          alignItems="center"
          gap="1.25rem"
          bg="#F0F0F0"
          px="1.5rem"
          py="2rem"
          borderRadius="2rem"
          width={{ base: "100%", lg: "auto" }}
        >
          <Text fontWeight="700" fontSize={{ base: "md", sm: "lg" }}>
            Ваш лікар
          </Text>
          <Flex gap="1.5rem">
            <Text fontWeight="500" fontSize={{ base: "md", sm: "lg" }}>
              {user.doctor.specialization}
            </Text>

            <Text fontWeight="500" fontSize={{ base: "md", sm: "lg" }}>
              {user.doctor.name}
            </Text>
          </Flex>
          <Button variant="primary">Сконтактувати</Button>
        </Stack>
        <Stack width={{ base: "100%", lg: "auto" }} gap="1.5rem">
          <Button
            onClick={() => navigate("/treatment-history")}
            variant="primary"
          >
            Переглянути історію лікування
          </Button>
          <Button onClick={() => navigate("/polls")} variant="primary">
            Пройти опитування
          </Button>
          <Button
            onClick={() => navigate("/polls/statistics")}
            variant="primary"
          >
            Переглянути статистику
          </Button>
        </Stack>
      </Flex>
      <Stack width="100%" alignItems="center" gap="1.5rem">
        <Text fontWeight="700" fontSize={{ base: "md", sm: "lg" }}>
          Ваші хвороби
        </Text>
        {user.diseases.map((disease) => {
          return (
            <Flex
              flexDirection={{ base: "column", sm: "row" }}
              key={disease.title}
              px="2rem"
              py="1.5rem"
              justifyContent={{ base:'center', sm:"space-between"}}
              alignItems='center'
              gap={{ base:'1.25rem', sm:"3rem"}}
              width="100%"
              bgColor="#1F5D72"
              borderRadius="0.5rem"
              color="white"
            >
              <Text fontWeight="500">{disease.title}</Text>
              <Text fontWeight="500">{disease.doctorName}</Text>
            </Flex>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
