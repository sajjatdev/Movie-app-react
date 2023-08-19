import { useState, useEffect } from "react";
import Header from "../components/Header";

function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function getMovieData() {
      const get = await fetch(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      );
      if (get.ok) {
        const data = await get.json();
        setdata(data);
        console.log(data);
      }
    }
    getMovieData();
  });

  return (
    <>
      <div className="w-full space-y-10">
        <Header />

        <div className="grid grid-cols-4 justify-items-center">
          {data.map((element, index) => {
            return (
              <div
                className={
                  !element.Poster
                    ? "invisible"
                    : "space-y-4 hover:shadow-md shadow-sm rounded-md duration-200"
                }
              >
                <img
                  src={element.Poster}
                  draggable="false"
                  ondragstart="return false;"
                  className="w-[300px] h-[300px] object-cover hover:shadow-md rounded-md duration-200"
                />
                <div className="flex flex-row justify-between items-center p-3">
                  <h1 className="text-[16px] font-sans font-bold">
                    {element.Title}
                  </h1>
                  <p className="text-green-500">{element.Runtime}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
