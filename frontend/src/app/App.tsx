import {StoreProvider} from "@/app";
import {HomePage} from "@/pages";

function App() {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
}

export default App;
