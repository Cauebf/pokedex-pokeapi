import { useContext, useState } from 'react';
import { TypeContext } from '../../contexts/type-context';
import {
    CardLink,
    PokeballSvg,
    PokemonID,
    PokemonLi,
    PokemonSprite,
    TypeLi,
} from './styles';

const PokemonCard = ({ pokemon, index }) => {
    const { types } = useContext(TypeContext);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <PokemonLi
            key={index}
            backgroundcolor={
                types.find((t) => t.name === pokemon.types[0].type.name)
                    .cardColor
            }
            isimageloaded={isImageLoaded ? 'true' : undefined}
        >
            <CardLink
                to={`/pokemon/${pokemon.id}`}
                state={{ pokemon: pokemon }}
                key={index}
            >
                <PokeballSvg src="/svg/pokeball.svg" alt="Pokeball Pattern" />
                {pokemon.sprites.front_default !== null ? (
                    <PokemonSprite
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        rendering={'pixelated'}
                        loading="lazy"
                        onLoad={() => setIsImageLoaded(true)}
                    />
                ) : (
                    <PokemonSprite
                        src="/images/pikachu-silhouette.png"
                        alt={pokemon.name}
                        rendering={'auto'}
                        loading="lazy"
                        onLoad={() => setIsImageLoaded(true)}
                    />
                )}

                <div>
                    <PokemonID>
                        #{pokemon.id.toString().padStart(4, '0')}
                    </PokemonID>
                    <h3>{pokemon.name}</h3>

                    <ul>
                        {pokemon.types.map((pokemonType, index) => (
                            <TypeLi
                                key={index}
                                type={types.find(
                                    (t) => t.name === pokemonType.type.name
                                )}
                            >
                                <img
                                    src={
                                        types.find(
                                            (t) =>
                                                t.name === pokemonType.type.name
                                        ).svg
                                    }
                                    alt={`${pokemonType.type.name} icon`}
                                />
                                <span>{pokemonType.type.name}</span>
                            </TypeLi>
                        ))}
                    </ul>
                </div>
            </CardLink>
        </PokemonLi>
    );
};

export default PokemonCard;
