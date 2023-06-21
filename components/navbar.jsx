import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className=" w-full relative h-24 shadow-x ">
      <div
        className="flex justify-between text-white items-center h-full w-full px-4"
        onClick={(e) => {
          e.preventDefault();
          console.log("clicked");
          router.push("/");
        }}
      >
        <Image
          className="pt-4"
          src={logo}
          alt="logo"
          width={150}
          height={120}
        />

        <Link
          href="/about"
          className=" hover:text-violet-700 font-extrabold text-lg px-12"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}
