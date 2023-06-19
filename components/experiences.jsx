import Swip from "./swip";
import ImageCard from "./image-card";
export default function Experiences() {
  return (

    <div className="  flex flex-col h-full px-8 md:px-16 mb-32 md:mb-56">
      <div className="flex flex-col gap-2 md:px-24 mb-6 md:mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Experiences
        </h1>
        <p className="text-lg md:text-xl text-white mt-4 md:mt-8">

          Our experiences create opportunities for teams to work together and
          share ideas leading increased innovation and productivity.
        </p>
      </div>
      <Swip />
    </div>
  );
}
