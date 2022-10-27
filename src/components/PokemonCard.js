import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";

// const PokeIt = (props) => {
//   const [pokemonData, setPokemonData] = useState({});
//   const [filter, setFilter] = useState("");

export async function PokemonCard({ url, name }) {
  return new Promise((resolve, reject) => {
    fetch(url, name)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
  // return (
  //   <Container>
  //     <Row>
  //       <Col xs={12} md={8}>
  //         <CardGroup>
  //           <Card>
  //             {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
  //             <Card.Body>
  //               <Card.Title>Card title</Card.Title>
  //               <Card.Text>
  //                 This is a wider card with supporting text below as a natural
  //                 lead-in to additional content. This content is a little bit
  //                 longer.
  //               </Card.Text>
  //             </Card.Body>
  //             <Card.Footer>
  //               <small className="text-muted">Last updated 3 mins ago</small>
  //             </Card.Footer>
  //           </Card>
  //         </CardGroup>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
}

// export { PokemonCard };
