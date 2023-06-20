import Card from "./card";
import i1 from "/public/image-01-new.png";
import i2 from "/public/image-02-new.png";
import i3 from "/public/image-03.png";
import i4 from "/public/image-04.png";
export default function Working() {
  const cardData = [
    {
      title: "Chat with our Concierge",
      body: " Connect with our dedicated WhatsApp Concierge. Explore Unique Experiences: Discover a variety of exciting activities for your team.",
      imgSrc: i1,
    },
    {
      title: "Utilize Managerial Discretionary Budget",
      body: "Make a lasting impression with carefully planned experiences within your budget. (All invoices stored at one place)",
      imgSrc: i2,
    },
    {
      title: "Effortless Booking",
      body: " Our Concierge takes care of all the details, from booking to logistics.",
      imgSrc: i3,
    },
    {
      title: "Impress and Connect",
      body: "Strengthen team bonds and create memorable moments through exceptional activities.",
      imgSrc: i4,
    },
  ];
  const cardElements = cardData.map((data) => {
    return <Card title={data.title} body={data.body} imgSrc={data.imgSrc} />;
  });
  return (
    <div className="flex flex-col justify-center items-center px-8 md:px-16 mb-32 md:mb-56">
      <h1 className=" text-4xl md:text-5xl font-extrabold text-white">
        How it Works
      </h1>
      <p className="text-lg md:text-xl text-white md:px-24 mt-4 md:mt-8">
        Employers don't have to deal with unnecessary queries, no need to be in
        contact with multiple vendors and set deals. With zero employer hassle &
        set and forget experience, get things done more quicker.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 xl:gap-x-20 mt-8">
        {cardElements}
      </div>
    </div>
  );
}
