import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import ListCars from "./components/ListCars";
import Footer from "./components/Footer";
import styled from "styled-components";

const Body = styled.div`
  background-color: rgb(20, 20, 20);
`;

function App() {
  return (
    <Body>
      <Header />
      <IntroSection />
      <ListCars />
      <Footer />
    </Body>
  );
}

export default App;
