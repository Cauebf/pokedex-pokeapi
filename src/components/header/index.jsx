import styled from "styled-components"
import ThemeTogglerButton from "../theme-toggle-button"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <PokemonHeader>
            <Link to="/">
                <Img src="/images/pokemon-logo.png" alt="Pokémon Logo" />
            </Link>
            <ThemeTogglerButton />
        </PokemonHeader>
    )
}

const PokemonHeader = styled.header`    
    background-color: #313131;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-bottom: 3px solid #1E90FF;
`

const Img = styled.img`
    height: 80px;
`

export default Header