import { Provider as ChakraProvider } from "@/components/ui/provider";
import { CalculatorForm } from "@/features/8klasa/components/CalculatorForm";
import { Badge } from "@chakra-ui/react";
import "@fontsource-variable/montserrat/index.css";

const App = () => {
  return (
    <ChakraProvider>
      <CalculatorForm />
      <Badge>{import.meta.env.VITE_WIDGET_VERSION}</Badge>
    </ChakraProvider>
  );
};

export default App;
