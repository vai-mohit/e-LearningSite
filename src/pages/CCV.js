import CCVpic from "./CCV.jpg";
import "./AI.css";
import { Image, Card } from "react-bootstrap";
export default function CCV() {
  return (
    <div>
      <div className="Image">
        <Image src={CCVpic} fluid />
      </div>
      <div>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>CLOUD COMPUTING AND VIRTUALIZATION</Card.Title>
            <Card.Text>
              Below Are The Steps To Understand This Course -
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                “I don’t need a hard disk in my computer if I can get to the
                server faster… carrying around these non-connected computers is
                byzantine by comparison.”
              </p>
              <footer className="blockquote-footer">
                - Steve Jobs, Co-founder, CEO and Chairman, Apple Inc.
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
      <div>
        <br></br>
        <br></br>
      </div>
      <div>
        <Card>
          <Card.Header as="h5">Step 1 - Learn Basics Of Cloud</Card.Header>
          <Card.Body>
            <Card.Title>From javatpoint</Card.Title>
            <Card.Text>
              Javatpoint consist of all the basic knowledge you need to
              understand the technology.
            </Card.Text>
            <Card.Link href="https://www.javatpoint.com/cloud-computing-tutorial">
              Click Here To Visit The Website
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <br></br>
        <br></br>
      </div>
      <div>
        <Card>
          <Card.Header as="h5">Step 2 - Learn Basics Of Networking</Card.Header>
          <Card.Body>
            <Card.Title>From GeekForGeeks</Card.Title>
            <Card.Text>GeekForGeeks is the warehouse of knowledge.</Card.Text>
            <Card.Link href="https://www.geeksforgeeks.org/basics-computer-networking/">
              Click Here To Visit The Website
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
