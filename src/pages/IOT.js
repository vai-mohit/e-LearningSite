import IOTpic from "./IOT.jpg";
import { Image } from "react-bootstrap";
export default function IOT() {
  return(
    <div><div className="Image">
    <Image src={IOTpic} fluid />
    <div><h1>Information Systems</h1></div>
    <div>The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.<br/>Definition
What is internet of things (IoT)?

Alexander S. Gillis
By

    Alexander S. Gillis, Technical Writer and Editor

The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.

A thing in the internet of things can be a person with a heart monitor implant, a farm animal with a biochip transponder, an automobile that has built-in sensors to alert the driver when tire pressure is low or any other natural or man-made object that can be assigned an Internet Protocol (IP) address and is able to transfer data over a network.<br/>Increasingly, organizations in a variety of industries are using IoT to operate more efficiently, better understand customers to deliver enhanced customer service, improve decision-making and increase the value of the business.</div>
    <div><h2>How does IoT work?</h2></div>
    <div>An IoT ecosystem consists of web-enabled smart devices that use embedded systems, such as processors, sensors and communication hardware, to collect, send and act on data they acquire from their environments. IoT devices share the sensor data they collect by connecting to an IoT gateway or other edge device where data is either sent to the cloud to be analyzed or analyzed locally. Sometimes, these devices communicate with other related devices and act on the information they get from one another. The devices do most of the work without human intervention, although people can interact with the devices -- for instance, to set them up, give them instructions or access the data.<br/>The connectivity, networking and communication protocols used with these web-enabled devices largely depend on the specific IoT applications deployed.<br/>IoT can also make use of artificial intelligence (AI) and machine learning to aid in making data collecting processes easier and more dynamic.</div>
  </div></div>
  );
}
