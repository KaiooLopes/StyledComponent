import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import ListCars from "./components/ListCars";
import Footer from "./components/Footer";
import styled from "styled-components";
import SelectedCar from "./components/SelectedCar";
import { useContext } from "react";
import { SelectedImgContext } from "./context/SelectedImgContext";

const Body = styled.div`
  background-color: rgb(20, 20, 20);
`;

function App() {
  const { selectedImg } = useContext(SelectedImgContext);
  return (
    <Body>
      <Header />
      <IntroSection />
      <ListCars />
      {selectedImg && <SelectedCar />}
      <Footer />
    </Body>
  );
}

export default App;
