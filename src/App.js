import logo from './logo.svg';
import './App.css';
import colalogo from './image.png'
import extrazone from './image2.png'
import image1 from './image 19.png'
import image2 from './image 20.png'
import image3 from './image 11.png'
import image4 from './image 12.png'
import image5 from './image 13.png'
import image15 from './image 15.png'
import image14 from './image 14.png'
import image16 from './image 16.png'
import image17 from './image 17.png'
import image21 from './image 21.png'

function App() {
  return (
    <div className="App">
      <header>
        <div className="headerdiv">
          <img className="colalogo" src={colalogo}/>
        </div>
      </header>
      <main>
        <div className="extrazone">
          <img src={extrazone}/>
        </div>
        <div className="roditel">
          <div className="socialprojects">
            <p className="text1">OUR SOCIAL PROJECTS</p>
            <p className="text2">Information about The<br/>
            Coca‑Cola Company's<br/>
            sustainability vision and<br/>
            projects</p>
          </div>
          <div className="image1">
            <img className="our" src={image1}/>
          </div>
        </div>
        <div className="roditel2">
          <div className="image2">
            <img className="our" src={image2}/>
          </div>
          <div className="socialprojects2">
            <p className="text1">ABOUT COMPANY</p>
            <p className="text2">General information about the<br/>
            work of the Coca‑Cola<br/>
            company</p>
          </div>
        </div>
        <p className="meetourbrands">Meet our brands</p>
        <div className="roditel1stroka">
          <div className="cubic">
            <img src={image4}/>
          </div>
          <div className="cubic">
            <img src={image3}/>
          </div>
          <div className="cubic">
            <img src={image5}/>
          </div>
        </div>
        <div className="roditel1stroka">
          <div className="cubic">
            <img src={image15}/>
          </div>
          <div className="cubic">
            <img src={image14}/>
          </div>
          <div className="cubic">
            <img src={image16}/>
          </div>
        </div>
        <div className="roditel1stroka">
          <div className="cubic">
            <img src={image17}/>
          </div>
        </div>
      </main>
      <footer>
        <div className="diver">
          <div className="divdiv"><img className="image21" src={image21}/></div>
          <div className="divdiv2"><p className="text21">© 2023 The Coca‑Cola Company. All rights reserved.</p></div>
          <div className="fff"><div className="divdiv3"></div></div>
        </div>
      </footer>
    </div>
  );
}

export default App;