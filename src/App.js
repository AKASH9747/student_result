import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen/>}/>
        <Route path="/homes" element={<HomeScreen/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
