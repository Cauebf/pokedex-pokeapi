import { useState, useRef, useEffect, useContext } from 'react';
import { TypeContext } from '../../contexts/type-context';
import { FilterButton, TypeButton, TypeUl } from './styles';

const TypeFilter = ({
    filteredType,
    setFilteredType,
    fetchInitialPokemons,
}) => {
    const [showTypeList, setShowTypeList] = useState(false);
    const { types } = useContext(TypeContext);
    const typeUlRef = useRef(null);
    const filterButtonRef = useRef(null);

    const handleClickOutside = (e) => {
        if (
            typeUlRef.current &&
            !typeUlRef.current.contains(e.target) &&
            filterButtonRef.current &&
            !filterButtonRef.current.contains(e.target)
        ) {
            setShowTypeList(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <FilterButton
                ref={filterButtonRef}
                onClick={() => setShowTypeList(!showTypeList)}
            >
                <img src="/svg/filter.svg" alt="Filter icon" />
            </FilterButton>

            {showTypeList && (
                <TypeUl ref={typeUlRef}>
                    {types.map((type, index) => (
                        <li key={index}>
                            <TypeButton
                                color={type.color}
                                onClick={() => {
                                    filteredType !== type.name
                                        ? setFilteredType(type.name)
                                        : fetchInitialPokemons();
                                    setShowTypeList(false);
                                }}
                            >
                                <img src={type.svg} alt={`${type.name} icon`} />
                                <span>{type.name}</span>
                            </TypeButton>
                        </li>
                    ))}
                </TypeUl>
            )}
        </>
    );
};

export default TypeFilter;
