export type ShortPollType = {
    id: number;
    pollTitle: string;
    pollDate: string;
  };
  

  export type  BigStatisticType = {
    filterId: number;
    titleOfPoll: string;
    statistic: StatisticType;
    questionBlockSet: QuestionBlockType[];
  };


  export type StatisticType = {
    negative : number,
    positive : number,
  };


  export type QuestionBlockType = {
    id: number;
    blockName: string;
  };