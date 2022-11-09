import { SelectedCarImage } from "./styles";
import { useContext, useEffect, useRef } from "react";
import { SelectedImgContext } from "../../context/SelectedImgContext";

const SelectedCar = ({ img }) => {
  const { selectedImg } = useContext(SelectedImgContext);
  const ref = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 2008;
  }, [selectedImg]);

  return (
    <SelectedCarImage color={selectedImg.color} ref={ref}>
      <img src={selectedImg.img} alt={selectedImg.name} />
    </SelectedCarImage>
  );
};

export default SelectedCar;
