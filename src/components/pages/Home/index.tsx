import { useState, useEffect, useMemo } from "react";

import { Container, InputSearchContainer, Card, CardList, Type } from "./styles";

export default function Home() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [searchName, setSearchName] = useState('');

  const filteredPokemons = useMemo(() => pokemons.filter((pokemon) => (
    pokemon.name.toLowerCase().includes(searchName.toLowerCase())
  )), [pokemons, searchName]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(async (response) => {
      const json = await response.json();
      setPokemons(json.pokemon)
    })
    .catch((error) => {
      console.log('erro', error);
    });
  }, [pokemons]);

  function handleSearchName(event: any) {
    setSearchName(event.target.value.toLowerCase());
  }

  return (
    <Container>
      <InputSearchContainer>
        <input
          value={searchName}
          type="text"
          placeholder="Pesquisar pokemon..."
          onChange={handleSearchName}
        />
      </InputSearchContainer>

      <CardList>

        {filteredPokemons.map(pokemon => (
          <Card key={pokemon.id}>
            <div className="image">
              <img src={pokemon.img} alt="Pokemon"/>
            </div>

            <div className="info">
              <span>#{pokemon.num}</span>
              <div className="pokemon-name">
                <strong>{pokemon.name}</strong>
              </div>
              {pokemon.type.map((type: string) =>
                <Type
                  color={type}
                >
                  {type}
                </Type>
              )}
            </div>
          </Card>
        ))}

      </CardList>  
    </Container>
  )
}