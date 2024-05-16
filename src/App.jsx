import { ThemeProvider } from "./contexts/theme-context"
import { TypeProvider } from "./contexts/type-context"
import AppRoutes from "./pages/routes"

function App() {
  return (
    <>
      <ThemeProvider>
        <TypeProvider>
          <AppRoutes />
        </TypeProvider>
      </ThemeProvider>
    </>
  )
}

export default App
