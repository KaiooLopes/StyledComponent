import Cars from "./components/Cars";
import eclipse from "./Cars/eclipse.jpg";
import skyline from "./Cars/skyline.jpg";
import huracan from "./Cars/huracan.jpg";
import supra from "./Cars/supra.jpg";
import gtr from "./Cars/gtr.jpg";
import n350z from "./Cars/350z.jpg";
import mustang from "./Cars/mustang.jpg";
import focus from "./Cars/focus.jpg";
import veneno from "./Cars/veneno.jpg";
import golfGti from "./Cars/golfGti.jpg";

import { SectionCars } from "./styles";

const ListCars = () => {
  return (
    <SectionCars id="list-car">
      <Cars
        img={eclipse}
        name="Mitsubishi Eclipse"
        color={"rgb(49, 253, 0)"}
        rank={1}
      />
      <Cars
        img={huracan}
        name="Lamborguini Huracan"
        color={"rgb(49, 253, 0)"}
        rank={2}
      />
      <Cars
        img={supra}
        name="Toyota Supra"
        color={"rgb(215, 134, 6)"}
        rank={3}
      />
      <Cars img={skyline} name="Skyline R34" color={"rgb(0,0,200)"} rank={4} />
      <Cars img={gtr} name="Nissan Gtr" color={"rgb(166, 168, 169)"} rank={5} />
      <Cars img={n350z} name="Nissan 350z" color={"rgb(56, 55, 55)"} rank={6} />
      <Cars
        img={mustang}
        name="Ford Mustang"
        color={"rgb(150, 69, 0)"}
        rank={7}
      />
      <Cars img={focus} name="Ford Focus" color={"rgb(0,0,250)"} rank={8} />
      <Cars
        img={veneno}
        name="Lamborguini Veneno"
        color={"rgb(19, 48, 20)"}
        rank={9}
      />
      <Cars img={golfGti} name="Golf Gti" color={"rgb(59, 35, 37)"} rank={10} />
    </SectionCars>
  );
};

export default ListCars;
