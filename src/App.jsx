
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';


function App() {

  return (
    <div className="App min-h-screen">
      <Nav />
      <main>
        <div className="hero min-h-screen bg-base-200 mainBcGround">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">Are you interested in greeting in a very special way to your loved ones? <br />
                Here's an Idea for you.... <br />
                A customized greeting card can make the special day unforgettable....
                </p>
                <div style={{color:'rgb(235, 97, 150)', fontSize:'2em'}} heartsDiv>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                <ion-icon name="heart"></ion-icon>
                </div>
              <button style={{margin:'50px'}} className="btn btn-primary">Let's Start</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />







    </div>
  );
}

export default App;
