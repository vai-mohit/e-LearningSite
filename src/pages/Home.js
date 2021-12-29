import "./Home.css";
import Homepic from "./Home.jpeg";
import { Card, CardGroup, Row } from "react-bootstrap";
export default function Home() {
  return (
    <div className="Home">
      <CardGroup>
        <Row style={{ height: "90vh" }} className="align-items-center">
          <Card>
            <Card.Img variant="top" src={Homepic} />
          </Card>
        </Row>
        <Card>
          <Card.Body>
            <Card.Title>
              Artificial Intelligence And Machine Language
            </Card.Title>
            <Card.Text>
              Artificial intelligence is a technology which enables a machine to
              simulate human behavior. Machine learning is a subset of AI which
              allows a machine to automatically learn from past data without
              programming explicitly. The goal of AI is to make a smart computer
              system like humans to solve complex problems
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title> Cloud Computing</Card.Title>
            <Card.Text>
              Cloud computing is the on-demand availability of computer system
              resources, especially data storage and computing power, without
              direct active management by the user. Large clouds often have
              functions distributed over multiple locations, each location being
              a data center
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title>Data Analytics</Card.Title>
            <Card.Text>
              Data analysis is a process of inspecting, cleansing, transforming,
              and modelling data with the goal of discovering useful
              information, informing conclusions, and supporting decision-making
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title>Cyber Security</Card.Title>
            <Card.Text>
              Computer security, cybersecurity, or information technology
              security is the protection of computer systems and networks from
              information disclosure, theft of or damage to their hardware,
              software, or electronic data, as well as from the disruption or
              misdirection of the services they provide.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title>Internet Of Things</Card.Title>
            <Card.Text>
              The Internet of things describes physical objects that are
              embedded with sensors, processing ability, software, and other
              technologies that connect and exchange data with other devices and
              systems over the Internet or other communications networks.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
