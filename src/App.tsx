import { Provider as ChakraProvider } from "@/components/ui/provider";
import { CalculatorForm } from "@/features/8klasa/components/CalculatorForm";

const App = () => {
  return (
    <ChakraProvider>
      <CalculatorForm />
    </ChakraProvider>
  );
};

export default App;
