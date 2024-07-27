import { TypeAnimation } from "react-type-animation";
import "./intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Looking to connect with your batchmates?",
          1000, // wait 1s before replacing the text
          "Need to get in touch with them?",
          1000,
          "Introducing Student Search Y24 Exclusive: Your Gateway to Connection",
          1000,
        ]}
        wrapper="div"
        speed={50}
        style={{
          fontFamily:"serif",
          fontWeight: 200,
          fontSize: "2em",
          alignItems: "start",
          textWrap: "nowrap",
          textAlign: "center",
        }}
        repeat={Infinity}
      />
    </div>
  );
}
