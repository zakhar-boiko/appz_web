import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import PrimaryLayout from "./ui/layout/PrimaryLayout.tsx/PrimaryLayout";
import { mainTheme } from "./ui/theme/theme";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
  <ChakraProvider theme={mainTheme}>
    <Routes>
      <Route path="/" element={<PrimaryLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </ChakraProvider>
  </QueryClientProvider>

);
