import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home , ContactUs} from './app/pages';
import './App.css';
import Booking from './app/pages/Booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/contact' element={<ContactUs title='Titan Team'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
