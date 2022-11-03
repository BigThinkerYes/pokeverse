import React from "react";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import InputGroup from "react-bootstrap/InputGroup";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";
import Form from "react-bootstrap/Form";

// const LIMIT = 150;
// const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=150"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
        console.log(data);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div data-testid="app">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div data-testid="app">
              <Navigation />

              <InputGroup className="mb-3">
                <Button
                  variant="outline-secondary"
                  id="button-addon1"
                  className="load-more"
                >
                  Search
                </Button>
                <Form.Control
                  aria-label="search pokemon"
                  // aria-describeby="basic-addon1"
                />
              </InputGroup>
             
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          
            {allPokemons.map((pokemon, index) => (
              <Col>
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
              />
              </Col>
      
            ))}
            {/* <h1>Pokemon should appear here</h1> */}
        
        </Row>
      </Container>
    </div>
  );
}

export { App };
