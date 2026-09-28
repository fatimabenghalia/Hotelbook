import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Dining from './pages/Dining'
import Events from './pages/Events'
import Experiences from './pages/Experiences'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Reserve from './pages/Reserve'
import Rooms from './pages/Rooms'
import Spa from './pages/Spa'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="dining" element={<Dining />} />
          <Route path="spa" element={<Spa />} />
          <Route path="events" element={<Events />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
