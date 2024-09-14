import { Input } from './styles';

const InputSearch = ({ setPokemonSearched, setFocus, inputRef }) => {
    return (
        <>
            <Input
                placeholder="Search for your Pokémon"
                onChange={(e) => setPokemonSearched(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                ref={inputRef}
                data-test="input-search"
            />
        </>
    );
};

export default InputSearch;
