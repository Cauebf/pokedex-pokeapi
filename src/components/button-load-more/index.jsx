import styled from "styled-components"

const ButtonLoadMore = ({ loadMorePokemons }) => {
    const handleClick = async () => {
        loadMorePokemons()
    }

    return (
        <>
            <Button onClick={handleClick}>Carregar mais</Button>    
        </>
    )
}

export default ButtonLoadMore

const Button = styled.button`   
    background-color: #1E90FF;
    color: #eeeeee;
    margin: 5px 0 30px 0;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;

    @media (max-width: 530px) {
        font-size: 11px;
    }
`