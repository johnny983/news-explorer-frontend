import { BrowserRouter } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
