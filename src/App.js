
import './App.css';
import Feedback from './components/feedback/Feedback';
import Guarantee from './components/guarantee/Guarantee';
import Header from './components/header/Header';
import OurServices from './components/ourServices/OurServices';
import Review from './components/review/review';
import WhatsTel from './components/whatsTel/whatsTel';
import Work from './components/work/Work'

function App() {
  return (
    <div className="App">
      <Header />
      <Guarantee />
      <Feedback />
      <OurServices />
      <WhatsTel />
      <Work />
      <Review />




    </div>
  );
}

export default App;
