import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Experiences from "@/components/experiences";
import Footer from "@/components/Footer";
import Working from "@/components/working";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 h-full my-bg">
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <LandingPage />
      </div>
      <Experiences />
      <Working />
      <Footer />
  </div>
  );
}
