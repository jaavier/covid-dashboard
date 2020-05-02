import React from "react";
import { useLocation } from "react-router-dom";

export default function Welcome() {
  const { pathname } = useLocation();
  return (
    <div className={`p-4`}>
      <div className="text-2xl text-center lg:text-left pb-4 px-2">
        Este es un sitio experimental y su código está disponible en <a href="https://github.com/jaavier" className="underline">Github 😄</a> 
      </div>
    </div>
  );
}
