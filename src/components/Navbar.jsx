import React from "react";
import {
  useLocation,
  Link,
} from "react-router-dom";

export default function Navbar() {

  const [page, setPage] = React.useState("/");
  let location = useLocation();

  React.useEffect(() => {
    setPage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-blue-700 text-white p-4 relative border-blue-800 border">
        <div className="absolute h-8 top-0 mt-2 hidden lg:block px-2">
          <div class="text-2xl">
            <a href="https://tioprogramador.com">@tioprogramador</a>
          </div>
        </div>
        <div className="flex lg:justify-end justify-center">
          <div className="px-2">
            <div className={`${page === "/" && "bg-blue-900" || "hidden"} p-2 px-3 rounded-md`}>
              <Link to="/">Hello World!</Link>
            </div>
          </div>
          <div className="px-2">
          <div className={`${page === "/comparecountries" && "bg-blue-900"} p-2 px-3 rounded-md`}>
              <Link to="/comparecountries">Comparar Países</Link>
            </div>
          </div>
          <div className="px-2">
          <div className={`${page === "/chile" && "bg-blue-900"} p-2 px-3 rounded-md`}>
              <Link to="/chile">Resumen Chile</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
