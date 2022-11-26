import "./App.css";
import Navbar from "./components/layouts/navbar/Navbar";
import HeadTile from "./components/layouts/headTile/Main";
import Stat from "./components/layouts/stats/Stat";
import Features from "./components/layouts/features/Feature";
import Plan from "./components/layouts/plans/Plan";
import Network from "./components/layouts/networks/Network";
import Platform from "./components/layouts/platform/Platform";
import Review from "./components/layouts/review/Review";
import Subscribe from "./components/layouts/subscribe/Subscribe";
import Footer from "./components/layouts/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeadTile />
      <Stat />
      <Features />
      <Plan />
      <Network />
      <Platform />
      <Review />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
