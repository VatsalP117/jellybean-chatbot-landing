import Image from "next/image";
import logo from "/public/logo.png";
export default function Footer() {
    return (
        <section className="relative h-400 text-white pt-20 pb-20 bg-black">
            <div className=" flex flex-row md:gap-40 justify-evenly md:text-lg text-sm ">
                <div className=" flex flex-col justi">
                    <Image className="pt-2"
                        src={logo}
                        alt="logo"
                        width={100}
                        height={100}/>
                    <p className=" text-lg font-bold">JellyBeans</p>
                </div>
                <div className=" flex flex-col">
                    <p>Address</p>
                    <p>Contact no.</p>
                    <p>Email</p>
                </div>
                <div className=" flex flex-col">
                    <p>About the Company</p>
                    <p>Lorem ipsum</p>
                </div>

            </div>
        </section>
    );
}
