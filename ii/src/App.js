import "./App.css";
import React from "react";
import HomeNasa from "./Component/HomeNasa";
import Topics from "./Component/Topics";
import Mission from "./Component/Mission";
import Galleries from "./Component/Galleries";
import NasaTv from "./Component/NasaTv";
import FollowNasa from "./Component/FollowNasa";
import Downloads from "./Component/Downloads";
import About from "./Component/About";
import NasaAudiences from "./Component/NasaAudiences";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Human from "./HomeComponent/Human";
import Moon from "./HomeComponent/Moon";
import Flight from "./HomeComponent/Flight";
import Space from "./HomeComponent/Space";
import Earth from "./HomeComponent/Earth";
import Solar from "./HomeComponent/Solar";
import "bootstrap/dist/css/bootstrap.min.css";
import Steam from "./HomeComponent/Steam";
import History from "./HomeComponent/History";
import Benefits from "./HomeComponent/Benefits";

const App = () => {
  return (
    <div className="App">
      <Router>
        <HomeNasa />
        <Routes>
          <Route path="/Topics" element={<Topics />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/Galleries" element={<Galleries />} />
          <Route path="/NasaTv" element={<NasaTv />} />
          <Route path="/FollowNasa" element={<FollowNasa />} />
          <Route path="/Downloads" element={<Downloads />} />
          <Route path="/About" element={<About />} />
          <Route path="/NasaAudiences" element={<NasaAudiences />} />

          <Route path="/Human" element={<Human />} />
          <Route path="/Moon" element={<Moon />} />
          <Route path="/Space" element={<Space />} />
          <Route path="/Earth" element={<Earth />} />
          <Route path="/Flight" element={<Flight />} />
          <Route path="/Solar" element={<Solar />} />
          <Route path="/Steam" element={<Steam />} />
          <Route path="/History" element={<History />} />
          <Route path="/Benefits" element={<Benefits />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
