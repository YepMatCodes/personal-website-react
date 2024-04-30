import "./css/Home.css";

import Logo from "../components/Logo";
import ExternalLinks from "../components/ExternalLinks";

function Home() {
  return (
    <div className="App">
      <header className="landing-page-container">
        <Logo />
      </header>
      <footer>
        <ExternalLinks />
      </footer>
    </div>
  );
}

export default Home;