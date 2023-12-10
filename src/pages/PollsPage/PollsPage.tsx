import { FunctionComponent } from "react";
import useUser from "../../hooks/useUser/useUser";
import { useAssignedPollsQuery } from "../../features/poll/api/client";
import { Flex, Stack, Text } from "@chakra-ui/react";
import ArrowIcon from "../../ui/icons/ArrowIcon/ArrowIcon";
import { useNavigate } from "react-router";

interface PollsPageProps {}

const PollsPage: FunctionComponent<PollsPageProps> = () => {
  const { profile } = useUser();
  const { data: assignedPolls, error } = useAssignedPollsQuery(
    profile?.id ? profile.id : "1"
  );
  const navigate = useNavigate();

  return (
    <Stack alignItems="center" gap={{ base: "2rem", sm: "3.75rem" }}>
      <Text
        color="main"
        fontSize={{ base: "lg", sm: "xl" }}
        fontWeight="500"
        lineHeight="normal"
        textAlign="center"
      >
        Пройти опитування
      </Text>
      <Stack width="100%" gap="1.5rem">
        {assignedPolls?.map((poll) => {
          return (
            <Flex
              flexDirection={{ base: "column", sm: "row" }}
              cursor="pointer"
              _hover={{ opacity: 0.5 }}
              onClick={() => navigate(`${poll.id}`)}
              key={poll.id}
              px="2rem"
              py="1.5rem"
              justifyContent="space-between"
              alignItems="center"
              gap={{ base: "1.2rem", sm: "3rem" }}
              width="100%"
              bgColor="#1F5D72"
              borderRadius="0.5rem"
              color="white"
            >
              <Text fontWeight="500">{poll.pollTitle}</Text>
              <Text fontWeight="500">{poll.doctorName}</Text>
              <Text fontWeight="500">{poll.pollDate}</Text>
              <ArrowIcon width="1rem" />
            </Flex>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default PollsPage;
