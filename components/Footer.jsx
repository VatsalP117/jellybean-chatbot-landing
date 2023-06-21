import Image from "next/image";
import logo from "/public/logo.png";

export default function Footer() {
  return (
    <section className="relative h-400 text-white pt-20 pb-20 bg-black">
      <div className=" flex flex-row md:gap-40 gap-10 justify-around px-5 md:text-sm text-xs ">
        <div className=" flex flex-col justi">
          <Image
            className="pt-2"
            src={logo}
            alt="logo"
            width={100}
            height={100}
          />
          <p className=" text-lg font-bold">JellyBeans</p>
        </div>
        <div className=" flex flex-col my-auto">
          <div className="flex flex-row gap-2 items-center">
            <p>Address</p>
            <p className="text-xs md:text-sm ">
              A-305 Divya MSR Gateway,Banglore
            </p>
          </div>

          <p>Contact no.</p>

          <p>Email</p>
        </div>
      </div>
    </section>
  );
}
