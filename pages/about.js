import Navbar from "@/components/Navbar";
export default function about() {
  return (
    <section className="relative h-screen myclass2 text-white">
      <Navbar />
      <div className=" container flex flex-col gap-12 justify-right">
        <p className=" font-bold text-5xl pt-40 font-sans">Goodscenes</p>
        <p className="text-xl z-10">
          Goodscenes is your ultimate WhatsApp Concierge for elevating team
          experiences. We empower<br></br>managers to impress and connect with
          their teams through curated, memorable activities. With our
          <br></br>expert guidance and seamless planning, you can make the most
          of your managerial discretionary budget
          <br></br>and create remarkable experiences that foster teamwork and
          engagement.
        </p>
        <p className="text-lg z-0">
          Contact Us<br></br>Email:
          <br></br>Phone:
        </p>
      </div>
    </section>
  );
}
