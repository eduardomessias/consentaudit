import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Layout from './components/ui/layout'
import Home from './pages/Home'
import Audit from './pages/Audit'
import GetStarted from './pages/GetStarted'
import Credits from './pages/Credits'
import LearnMore from './pages/LearnMore'
import ApplicationRegistry from './pages/application/registry/ApplicationRegistry'


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/application">
            <Route path="/registry" element={<ApplicationRegistry />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App