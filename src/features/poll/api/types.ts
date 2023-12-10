export type PollResponseType = {
  id: string;
  pollTitle: string;
  pollDate: string;
  doctorName: string;
};

export type PollDetailsType = {
  pollId: string;
  pollTitle: string;
  questionDtos: {
    questionId: number;
    questionTitle: string;
    answerDtoList: {
        answerTitle: string,
        answerId: number
    }[]
  }[];
};
