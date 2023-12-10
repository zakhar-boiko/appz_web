import { FunctionComponent } from "react";
import { useParams } from "react-router";
import { useTreatmentHistoryDetailsQuery } from "../../features/treatment-history/api/client";
import useUser from "../../hooks/useUser/useUser";
import {
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { formatDate } from "../../utilities/utilities";
interface MedicalRecordPageProps {}

const MedicalRecordPage: FunctionComponent<MedicalRecordPageProps> = () => {
  const { profile } = useUser();

  const { id } = useParams();

  const { data: medicalRecord } = useTreatmentHistoryDetailsQuery(
    id ?? "",
    profile?.id ?? "1"
  );

  return (
    <Stack alignItems="center" gap={{ base: "2rem", sm: "3.75rem" }}>
      <Text
        color="main"
        fontSize={{ base: "lg", sm: "xl" }}
        fontWeight="500"
        lineHeight="normal"
      >
        {medicalRecord?.title}
      </Text>

      <TableContainer width="100%">
        <Table align="center" variant="simple">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th fontSize={{ base: "sm", sm: "md" }} fontWeight="500">
                Дата візиту
              </Th>
              <Th fontSize={{ base: "sm", sm: "md" }} fontWeight="500">
                Лікар
              </Th>
              <Th fontSize={{ base: "sm", sm: "md" }} fontWeight="500">
                Висновок
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr >
              <Td> {formatDate(medicalRecord?.dateofvisit??'')}</Td>
              <Td>{medicalRecord?.doctorName}</Td>
              <Td>{medicalRecord?.doctorNotes}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default MedicalRecordPage;
