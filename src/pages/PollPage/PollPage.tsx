import { FunctionComponent, useEffect, useMemo, useState } from "react";
import {
  useAssignedPollsQuery,
  useFetchPollQuery,
  useSendPollMutation,
} from "../../features/poll/api/client";
import useUser from "../../hooks/useUser/useUser";
import { Button, Center, Radio, RadioGroup, Spinner, Stack, Text, useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router";
import { PollDetailsType } from "../../features/poll/api/types";

interface PollPageProps {}

type AnswerType = {
  userId: string;
  pollId: string;
  answers: {
    questionId: string;
    answerId: string;
  };
};
const PollPage: FunctionComponent<PollPageProps> = () => {
  const { id } = useParams();
  const { profile } = useUser();
  const toast = useToast();

  const { data: poll, isLoading: isPollLoading } = useFetchPollQuery(
    id ?? "",
    profile?.id ? profile.id : "1"
  );

  const navigate = useNavigate();

  const [answers, setAnswers] = useState<any>(null);

  const { mutate: sendAnswers, isLoading } = useSendPollMutation();


  const isFormFilled = useMemo(() => {
    return answers?.every((question: any) => question?.answerId != null && question.answerId != undefined);
  }, [answers]);


  const setValue = (questionId: string, answerId: string) => { 
 
    setAnswers((prevAnswer: any[]) => {
      return prevAnswer.map((answer: any) => {        
        if (String(answer.questionId) === String(questionId)) {
          return {
            ...answer,
            answerId: parseInt(answerId) // Конвертуємо вхідне значення у строку
          };
        }

        return answer;
      });
    });
  };


  useEffect(() => {
    if (poll && !answers) {
      const initialFormState = poll.questionDtos.map((question) => {
        return {
          questionId: question.questionId,
          answerId: null,
        };
      });
      

      setAnswers(initialFormState);
    }
  }, [poll]);


  const submit = () => {
    if(!isFormFilled) {
      toast({
        status: "error",
        title: "Помилка",
        description:
          "Будь ласка, дайте відповіді на всі запитання перед їх затвердженням!",
        duration: 3000,
        isClosable: true,
      });
      return;
    }  
    sendAnswers({
      userId: parseInt(profile?.id??''),
      pollId: parseInt(id??''),
      answers: answers
    }, {
      onSuccess: () => {
        toast({
          status: "success",
          title: "Успіх",
          description:
            "Ваші відповіді успішно збережені!",
          duration: 3000,
          isClosable: true,
        });

        setTimeout(() =>  navigate('/profile'), 1000)
       ;
      },
      onError: () => {
        toast({
          status: "error",
          title: "Помилка",
          description:
            "Щось пішло не так, спробуйте надіслати відповіді ще раз!",
          duration: 3000,
          isClosable: true,
        });
      }
    })
  }


  if(isPollLoading) {
    return <Center width='100%' flexGrow={1} pt='3.75rem'>
      <Spinner size='xl'/>
    </Center>
  }

  return (
    <Stack alignItems="center" gap={{ base: "2rem", sm: "3.75rem" }}>
      <Text
        color="main"
        fontSize={{ base: "lg", sm: "xl" }}
        fontWeight="500"
        lineHeight="normal"
        textAlign="center"
      >
        {poll?.pollTitle}
      </Text>
      <Stack gap='1.5rem' width='100%'>
        {poll?.questionDtos.map((question) => {
          return (
            <Stack gap='1rem'>
              <Text fontSize={{ base:'md', sm:'lg'}} color='main'>{question.questionTitle}</Text>
              <RadioGroup
                onChange={(value: any) =>
                    setValue(
                      question?.questionId.toString(),
                        value as string
                  )
                }
              >
                <Stack>
                  {question.answerDtoList.map((answer) => {
                    return (
                      <Radio value={answer.answerId.toString()}>
                        {answer.answerTitle}
                      </Radio>
                    );
                  })}
             
                </Stack>
              </RadioGroup>
            </Stack>
          );
        })}
        <Button disabled={true} width='fit-content' isLoading={isLoading} onClick={submit} alignSelf='center' variant='primary'>Надіслати відповіді</Button>
      </Stack>
    </Stack>
  );
};

export default PollPage;
