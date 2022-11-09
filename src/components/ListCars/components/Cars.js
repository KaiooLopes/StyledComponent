import { Car, ContentCar } from "./styles";

const Cars = ({ img, name, color, rank }) => {
  return (
    <Car color={color} rank={rank} img={img}>
      <ContentCar color={color}>
        <span>{`${rank}º`}</span>
        <h2>{name}</h2>
      </ContentCar>
    </Car>
  );
};

export default Cars;
