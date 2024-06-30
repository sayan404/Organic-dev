"use client"
import Image from "next/image";
// import Modal from "../components/Modal";
import Link from "next/link";
import "./globals.css";
import MultiButton from "../components/Multibutton";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useRouter } from "next/navigation";

const Index: React.FC = async () => {
  const router = useRouter()
  router.push("/home")
  return (
    <main>
      {/* <Header />
      <Hero /> */}
    </main>
  );
};

export default Index;
