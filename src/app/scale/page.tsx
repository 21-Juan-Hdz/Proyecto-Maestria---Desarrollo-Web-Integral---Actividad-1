import scaleImg from "public/scale.jpg"
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero 
    imgAlt="img"
    imgData={scaleImg}
    title="Scael you app to infinity"></Hero>
  );
}
