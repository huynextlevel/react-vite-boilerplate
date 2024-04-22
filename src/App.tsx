import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom'

import routes from './routes'
import { ScrollIntoView } from './components/extras'

function App() {

  return (
    <BrowserRouter>
      <ScrollIntoView>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </ScrollIntoView>
    </BrowserRouter>
  )
}

export default App