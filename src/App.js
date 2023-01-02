import Header from './component/Header';
import './App.css';
import Footer from './component/Footer'
import Restaurantlist from './component/Restaurantlist';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Viewrest from './component/Viewrest';
function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Header/>
        {/* <h2>Restaurant Application</h2> */}
        <Routes>
          <Route path='/' element={<Restaurantlist/>}/>
          <Route path='/viewrest/:id' element={<Viewrest/>}/>


          </Routes>
        <Footer/>
      </header>
      </Router>
    </div>
  );
}

export default App;
