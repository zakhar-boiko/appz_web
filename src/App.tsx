import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import PrimaryLayout from "./ui/layout/PrimaryLayout.tsx/PrimaryLayout";
import { mainTheme } from "./ui/theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PollPage from "./pages/PollPage/PollPage";
import PollStatistics from "./pages/PollStatisticsPage/PollStatisticsPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import TreatmentHistoryPage from "./pages/TreatmentHistoryPage/TreatmentHistoryPage";
import MedicalRecordPage from "./pages/MedicalRecordPage/MedicalRecordPage";
import PollsPage from "./pages/PollsPage/PollsPage";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={mainTheme}>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/treatment-history">
            <Route index element={<TreatmentHistoryPage />} />
            <Route path=":id" element={<MedicalRecordPage />} />
          </Route>
          <Route path="/polls">
            <Route index element={<PollsPage />} />
            <Route path=":id" element={<PollPage />} />
            <Route path="statistics">
              <Route index element={<StatisticsPage />} />

              <Route path=":id" element={<PollStatistics />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </ChakraProvider>
  </QueryClientProvider>
);
