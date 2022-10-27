import React, { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// const LIMIT = 150;
// const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;
// useEffect(() => {
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`)
//     .then(function (response) {
//       const { data } = response;
//       const { results } = data;
//       const newPokeITdata = {};
//       results.forEach((pokemon, index) => {
//         newPokeITdata[index + 1] = {
//           id: index + 1,
//           name: pokemon.name,
//           sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//             index + 1
//           }.png`,
//         };
//       });
//       setPokemonData(newPokeITdata);
//     });
// }, []);
// };
//
function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState("");
  const LIMIT = 150;
  const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

  //get api data
  useEffect(() => {
    async function fetchData() {
      // check for responses
      console.log(response);
      let response = await getAll(pokeApi);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  //  loading
  const loadingPokemon = async (data) => {
    let _poke = await Promise.all(data.map(async (pokemon) => {}));
  };

  return (
    <div data-testid="app">
      <InputGroup>
        <InputGroup.Text>Find:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <Navigation />
      <div>{loading ? <h1>loading...</h1> : <h1>Gotta catch em all</h1>}</div>
      <PokemonCard />
    </div>
  );
}

export { App };
