import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

/**
 * 
 * Parte final hacer authProvider
 */
export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
