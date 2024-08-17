import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { ArrowUpIcon, Button } from './styles';

const BackToTopButton = () => {
    const [scrollTop, setScrollTop] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 340 ? setScrollTop(true) : setScrollTop(false);
        });
    }, []);

    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {scrollTop && (
                <Button
                    onClick={bottomToTop}
                    className="backToTop"
                    backgroundcolor={theme.buttonBackground}
                >
                    <ArrowUpIcon size={30} color={theme.buttonColor} />
                </Button>
            )}
        </>
    );
};

export default BackToTopButton;
