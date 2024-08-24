import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import GSAPTo from "./GSAP Pages/GSAPTo";
import GsapFrom from "./GSAP Pages/GsapFrom";
import GsapFromTo from "./GSAP Pages/GsapFromTo";
import GsapTimeline from "./GSAP Pages/GsapTimeline";
import GsapStagger from "./GSAP Pages/GsapStagger";
import GsapScrollTrigger from "./GSAP Pages/GsapScrollTrigger";
import GsapText from "./GSAP Pages/GsapText";
import FirstSplineObject from "./Spline Animations/FirstSplineObject";
import GsapScrollTrigger2 from "./Sheryans Coding School/GsapScrollTrigger2";
import GsapScrollTriggerMy from "./My Learning and Experiments/GsapScrollTriggerMy";
import GsapPin from "./Sheryans Coding School/GsapPin";
import GsapScrollTriggerVideoMy from "./My Learning and Experiments/GsapScrollTriggerVideoMy";
import Navbar from "./Navbar";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<GSAPTo />} />
          <Route path="/from" element={<GsapFrom />} />
          <Route path="/from-to" element={<GsapFromTo />} />
          <Route path="/timeline" element={<GsapTimeline />} />
          <Route path="/stagger" element={<GsapStagger />} />
          <Route path="/scroll" element={<GsapScrollTrigger />} />
          <Route path="/text" element={<GsapText />} />
          <Route path="/spline" element={<FirstSplineObject />} />
          <Route path="/scroll-scs2" element={<GsapScrollTrigger2 />} />
          <Route path="/scroll-pin" element={<GsapPin />} />
          <Route path="/scroll-my" element={<GsapScrollTriggerMy />} />
          <Route path="/scrollvideo-my" element={<GsapScrollTriggerVideoMy />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
