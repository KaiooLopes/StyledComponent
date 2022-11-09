import { useContext } from "react";
import { SelectedImgContext } from "../../../context/SelectedImgContext";
import { Car, ContentCar } from "./styles";

const Cars = ({ img, name, color, rank }) => {
  const { setSelectedImg } = useContext(SelectedImgContext);

  const handleSelectImg = () => {
    setSelectedImg({ img, color, name });
  };

  return (
    <Car color={color} rank={rank} img={img} onClick={() => handleSelectImg()}>
      <ContentCar color={color}>
        <span>{`${rank}º`}</span>
        <h2>{name}</h2>
      </ContentCar>
    </Car>
  );
};

export default Cars;
