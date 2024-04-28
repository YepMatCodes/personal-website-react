import "./css/Home.css";

import Logo from "../components/Logo";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <Logo />
      </header>
      <footer>
      <div className="logo-background">
        Testing the fonts and stuff
      </div>
      </footer>
    </div>
  );
}

export default Home;