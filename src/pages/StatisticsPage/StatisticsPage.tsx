import {
  ChangeEvent,
  ChangeEventHandler,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { useTreatmentHistoryQuery } from "../../features/treatment-history/api/client";
import useUser from "../../hooks/useUser/useUser";
import { Button, Flex, Select, Stack, Text } from "@chakra-ui/react";
import { formatDate } from "../../utilities/utilities";
import { useNavigate } from "react-router";
import { useAllPallsQuery } from "../../features/statistics/api/client";

interface TreatmentHistoryPageProps {}

const StatisticsPage: FunctionComponent<
  TreatmentHistoryPageProps
> = () => {
  //const [filter, setFilter] = useState<string>("");
  //const [filterOptions, setFilterOptions] = useState<string[]>([]);

  const { profile, token } = useUser();

  const navigate = useNavigate();

  const { data: allPalls } = useAllPallsQuery(
    profile?.id ? profile?.id : "1"
  );

  // useEffect(() => {
  //   if (!filterOptions.length && history) {
  //     setFilterOptions(history?.map((record) => record.title));
  //   }
  // }, [history]);

  return (
    <Stack alignItems="center" gap={{ base: "2rem", sm: "3.75rem" }}>
      <Text
        color="main"
        fontSize={{ base: "lg", sm: "xl" }}
        fontWeight="500"
        lineHeight="normal"
        textAlign="center"
        order={1}
      >
        Переглянути статистику опитування
      </Text>
      <Flex
        order={{ base: 3, lg: 2 }}
        flexDirection={{ base: "column", lg: "row" }}
        width="100%"
        gap="3rem"
      >
        <Stack gap="1.5rem" flexGrow={1}>
          {allPalls?.map((record) => (
            <Flex
            flexDirection={{ base: "column", sm: "row" }}
            cursor="pointer"
            px="2rem"
            py="1.5rem"
            justifyContent="space-between"
            alignItems="center"
            gap={{ base: "1.2rem", sm: "3rem" }}
            width="100%"
            bgColor="#1F5D72"
            borderRadius="0.5rem"
            color="white"
            onClick={() => navigate(`${record.id}`)}
          >
          <Text fontWeight="500">{record?.pollTitle}</Text>
          <Text fontWeight="500">{record?.pollDate}</Text>
          <Text fontWeight="500">Перейти</Text>
          </Flex>
        ))}
        </Stack>
      </Flex>
    </Stack>
  );
};

export default StatisticsPage;
