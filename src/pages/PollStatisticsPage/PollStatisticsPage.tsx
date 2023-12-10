
import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Flex, Select, Stack, Text } from "@chakra-ui/react";
import { formatDate } from "../../utilities/utilities";
import useUser from "../../hooks/useUser/useUser";
import { useTreatmentHistoryQuery } from "../../features/treatment-history/api/client";

import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { useDataByPollQuery } from "../../features/statistics/api/client";

interface PollStatisticsProps {}


const PollStatistics: FunctionComponent<PollStatisticsProps> = () => {
  const { id } = useParams();

  const [filter, setFilter] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<string[]>([]);

  const { profile, token } = useUser();
    let fff = null;
    if(filter.replaceAll(" ", "").length > 0){
      fff = filter;
    }
    
    const { data: statistics } = useDataByPollQuery(
      id as string,
      fff,
      profile?.id ? profile?.id : "1",
    );


    console.log(statistics)
  
  

  const data = {
    labels: ['Негативні (погані) показники', 'Позитивні (добрі) показники'],
    datasets: [
      {
        label: '# of Votes',
        data: [statistics?.statistic.negative, statistics?.statistic.positive],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Add this to maintain aspect ratio but fit to container
  };


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
        {statistics?.titleOfPoll}
      </Text>
      <Flex
        order={{ base: 3, lg: 2 }}
        flexDirection={{ base: "column", lg: "row" }}
        width="100%"
        gap="3rem"
      >
        <Stack gap="1.5rem" flexGrow={1}>
        <Flex
        order={{ base: 3, lg: 2 }}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        width="100%"
        gap="3rem">
        <div style={{ width: '600px', height: '600px' }}> {/* Adjust the size as needed */}
        <Pie data={data} options={options} />
        </div>
        </Flex>
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
            Обрати блок
          </Text>
          <Select
  placeholder="Усі запитання"
  value={filter}
  onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value)}
  variant="outlined"
  bg="white"
  _active={{}}
  _focus={{}}
  outline="none !important"
>
  {statistics?.questionBlockSet?.map((block) => (
    <option key={block.id} value={block.id}>
      {block.blockName}
    </option>
  ))}
</Select>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default PollStatistics;
