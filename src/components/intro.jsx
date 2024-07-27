import { TypeAnimation } from "react-type-animation";
import "./intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <TypeAnimation
        className=" lg:text-2xl text-lg"
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Looking to connect with your batchmates?",
          1000, // wait 1s before replacing the text
          "Need to get in touch with them?",
          1000,
          "Introducing Y24 Student Search",
          1000,
        ]}
        wrapper="div"
        speed={50}
        style={{
          fontFamily:"serif",
          fontWeight: 200,
          // fontSize: "1.5em",
          alignItems: "start",
          textWrap: "nowrap",
          textAlign: "center",
        }}
        repeat={Infinity}
      />
    </div>
  );
}
