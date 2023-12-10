import { FunctionComponent } from "react";
import { useParams } from "react-router";

interface PollStatisticsProps {}

const PollStatistics: FunctionComponent<PollStatisticsProps> = () => {
  const { id } = useParams();

  
  return <>poll statistics</>;
};

export default PollStatistics;
