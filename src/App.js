//note install react-router-dom before starting the app
import './App.css';
import Signin from './components/routes/Signin';
import Signup from './components/routes/signup';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Offer from './components/routes/Offer';
import Home from './components/routes/Home';
import FindOffer from './components/routes/FindOffer';
import GetAllOffers from './components/routes/GetAllOffers';
// import FilteredOffer from './components/routes/FilteredOffer';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/player' element={<FindOffer/>}/>
        <Route path='/getoffers' element={<GetAllOffers/>}/>

        {/* <Route path='/filteredoffer' element={<FilteredOffer/>}/> */}
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
