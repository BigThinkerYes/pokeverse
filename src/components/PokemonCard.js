import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Modal,
  Row,
  Col,
  CardGroup,
} from "react-bootstrap";
// import { AppBar, ToolBar } from "@material-ui/core";
// const useStyles = makeStyles({
//   p_container: {
//     paddingTop: "20px",
//     paddingLeft: "50px",
//     paddingRight: "50px",
//   },
// });
const PokemonCard = ({ id, image, type, url, name }) => {
  // const classes = useStyles();
  return (
    <Container>
      <Row xs={12} md={8} lg={12}>
        {/* <Col xs={12} md={8} lg={3}> */}
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={image}
              alt={name}
              height={"150"}
            />
            <Card.Body>
              <Card.Title>
                <h3>{name}</h3>
              </Card.Title>
              <Card.Text>
                <small>
                  {id} <br />
                </small>
                <small>
                  {type}
                  <br />
                </small>
                <small>{url}</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        {/* <div>pokemon card</div> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
};

export { PokemonCard };
