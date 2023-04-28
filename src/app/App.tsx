import './styled/index.scss'
import { AppRouter } from './providers/router/ui/AppRouter'

import { Header } from 'widgets/Header'

function App() {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  )
}

export default App
