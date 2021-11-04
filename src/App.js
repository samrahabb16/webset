import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Intro from "./components/introduction/intro";
import CatagotyFields from "./components/catagorySection/catFields";
import Slider1 from "./components/bothSliders/slider1";
import Slider2 from "./components/bothSliders/slider2";
import MailandCard from "./components/mailANDcards/MailandCard";
import Contact from "./components/contact/Contact";
import Canvas from "./components/can/Canvas";
function App() {
  return (
    <div>
      {/* <Header /> */}
      <Intro />
      <CatagotyFields />
      <Slider1 />
      <Slider2 />
      <MailandCard />
      <Contact />
      <Canvas />
    </div>
  );
}

export default App;
