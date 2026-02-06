import React, { useEffect } from "react";
import ColorBends from '../../src/ColorBends.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <div className="app-wrapper">

      {/* Background Layer */}
      <div className="bg-layer">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
        />
      </div>

      {/* Foreground Content */}
      <div className="content-layer">
        <Router basename={process.env.PUBLIC_URL}>
          
          <div className="cursor__dot">
            <AnimatedCursor
              innerSize={15}
              outerSize={15}
              color="255, 255 ,255"
              outerAlpha={0.4}
              innerScale={0.7}
              outerScale={5}
            />
          </div>

          <ScrollToTop>
            <Headermain />
            <AppRoutes />
          </ScrollToTop>

        </Router>
      </div>

    </div>
  );
}
