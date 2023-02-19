import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Navigation from "./Navigation";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
