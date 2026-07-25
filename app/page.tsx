import { Metadata } from "next";
import Carriers from "./component/Carriers";
import CtaBand from "./component/CtaBand";
import Hero from "./component/Hero";
import Situations from "./component/Situations";
export const metadata: Metadata = {
  alternates: { canonical: "https://bestmedicareadvisor.com" },
};
export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider" />
      <Carriers />
      <div className="divider" />
      <Situations />
      <CtaBand />
    </>
  );
}