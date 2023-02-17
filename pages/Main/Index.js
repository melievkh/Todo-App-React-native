import Footer from "../../components/Footer";
import Home from "../Home";

const Main = ({ navigation }) => {
  return (
    <>
      <Home />
      <Footer navigation={navigation} />
    </>
  );
};

export default Main;
