import Image from "next/image";
// import Modal from "../components/Modal";
import Link from "next/link";
import MultiButton from "./components/Multibutton";

const Index: React.FC = async () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      Hey Solana is here
      <MultiButton />
    </div>
  );
};

export default Index;
