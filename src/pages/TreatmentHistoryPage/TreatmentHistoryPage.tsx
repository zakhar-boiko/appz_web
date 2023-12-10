import {
  ChangeEvent,
  ChangeEventHandler,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { useTreatmentHistoryQuery } from "../../features/treatment-history/api/client";
import useUser from "../../hooks/useUser/useUser";
import {
  Button,
  Center,
  Flex,
  Select,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatDate } from "../../utilities/utilities";
import { useNavigate } from "react-router";

interface TreatmentHistoryPageProps {}

const TreatmentHistoryPage: FunctionComponent<
  TreatmentHistoryPageProps
> = () => {
  const [filter, setFilter] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<string[]>([]);

  const { profile, token } = useUser();

  const navigate = useNavigate();

  const { data: history, isLoading } = useTreatmentHistoryQuery(
    profile?.id ? profile?.id : "1",
    filter
  );

  useEffect(() => {
    if (!filterOptions.length && history) {
      setFilterOptions(history?.map((record) => record.title));
    }
  }, [history]);

  if (isLoading) {
    return (
      <Center width="100%" flexGrow={1} pt="3.75rem">
        <Spinner size="xl" />
      </Center>
    );
  }

  if ((history?.length ?? 0) < 1) {
    return (
      <Stack
        alignItems="center"
        gap="1.5rem"
        width="100%"
        flexGrow={1}
        pt="3.75rem"
      >
        <Text
          color="main"
          fontSize={{ base: "lg", sm: "xl" }}
          fontWeight="500"
          lineHeight="normal"
          textAlign="center"
        >
          У вас немає записів про лікування
        </Text>
        <Button
          width="fit-content"
          variant="primary"
          onClick={() => navigate("/profile")}
        >
          Повернутись в кабінет
        </Button>
      </Stack>
    );
  }

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
        Переглянути історію лікування
      </Text>
      <Flex
        order={{ base: 3, lg: 2 }}
        flexDirection={{ base: "column", lg: "row" }}
        width="100%"
        gap="3rem"
      >
        <Stack gap="1.5rem" flexGrow={1}>
          {history?.map((record) => {
            return (
              <Flex
                flexDirection={{ base: "column", sm: "row" }}
                cursor="pointer"
                _hover={{ opacity: 0.5 }}
                onClick={() => navigate(`${record.id}`)}
                key={record.title}
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
                <Text fontWeight="500">{record.title}</Text>
                <Text fontWeight="500">{record.doctorName}</Text>
                <Text fontWeight="500">{formatDate(record.dateofvisit)}</Text>
              </Flex>
            );
          })}
        </Stack>
        <Stack
          height="fit-content"
          alignItems="center"
          gap="1.25rem"
          bg="#F0F0F0"
          px="1.5rem"
          py="2rem"
          minWidth="15rem"
          borderRadius="2rem"
          order={{ base: 2, lg: 3 }}
        >
          <Text fontWeight="700" fontSize={{ base: "md", sm: "lg" }}>
            Обрати хворобу
          </Text>
          <Select
            placeholder="Усі хвороби"
            value={filter}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setFilter(e.target.value)
            }
            variant="outlined"
            bg="white"
            _active={{}}
            _focus={{}}
            outline="none !important"
          >
            {filterOptions?.map((filter) => {
              return <option value={filter}>{filter}</option>;
            })}
          </Select>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default TreatmentHistoryPage;
