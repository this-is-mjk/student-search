import { TypeAnimation } from "react-type-animation";
import "./intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Want to know your batchmates?",
          1000, // wait 2s before replacing "Mice" with "Hamsters"
          "Want to Reach out to them?",
          1000,
          "Want to search your juniors?",
          1000,
        ]}
        wrapper="div"
        speed={50}
        style={{
          fontSize: "2em",
          alignItems: "start",
          textWrap: "nowrap",
          textAlign: "center"
        }}
        repeat={Infinity}
      />
    </div>
  );
}
