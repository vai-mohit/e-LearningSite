import AIpic from "./AI.jpg";
import "./AI.css";
import { Image } from "react-bootstrap";
export default function AI() {
  return (
    <div>
      <div className="Image">
        <Image src={AIpic} fluid />
      </div>
      <div>AI is</div>
    </div>
  );
}
