import { Provider } from "@/components/ui/provider";
import { Button } from "@/components/ui/button";
import { Flex, Text } from "@chakra-ui/react";

const App = () => {
  return (
    <Provider>
      <Flex flexDir="column" gap={2}>
        <Flex>
          <Button px={[0, 10]}>Just a chakra button</Button>
        </Flex>
      </Flex>
    </Provider>
  );
};

export default App;
