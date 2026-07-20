import Carriers from "./component/Carriers";
import CtaBand from "./component/CtaBand";
import Hero from "./component/Hero";
import Situations from "./component/Situations";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider" />
      <Situations />
      <CtaBand />
    </>
  );
}