"use cleint";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
    </div>
  );
};

export default PreLoader;
