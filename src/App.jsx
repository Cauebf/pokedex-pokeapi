import { StyleSheetManager } from 'styled-components';
import { ThemeProvider } from './contexts/theme-context';
import { TypeProvider } from './contexts/type-context';
import { AppRoutes } from './routes/index';

function App() {
    return (
        <>
            <StyleSheetManager shouldForwardProp={() => true}>
                <ThemeProvider>
                    <TypeProvider>
                        <AppRoutes />
                    </TypeProvider>
                </ThemeProvider>
            </StyleSheetManager>
        </>
    );
}

export default App;
