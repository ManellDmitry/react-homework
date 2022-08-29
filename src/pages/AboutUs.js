import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { InputText } from "../components/Input";
import withLeftSidebar from "../hocs/withLeftSidebar";

function AboutUs() {
  const API_KEY = "563492ad6f91700001000001e699530e579f4688bb7809ad69f88cb3";
  const BASE_URL = "https://api.pexels.com/v1/";
  const endpoint = "search";

  const [currentState, setCurrentState] = useState("start");
  const [isOnline, setIsOnline] = useState(true);
  const [search, setSearch] = useState("");
  const [kittens, setKittens] = useState([]);

  const options = {
    headers: {
      Authorization: API_KEY,
    },
  };

  useEffect(() => {}, []);
  useEffect(() => {}, [currentState]);
  useEffect(() => {}, [isOnline]);
  useEffect(() => {}, [search]);
  useEffect(() => {}, [kittens]);

  const updateState = () => {
    setCurrentState("stop");
  };
  const toggleStatusIsOnline = () => {
    setIsOnline(!isOnline);
  };

  const getData = () => {
    //метод который вызываем по кнопке сабмит
    console.log("search", search);
    if (search) {
      // console.log(search);
      let params = `?query=${search}&orientation=portrait&per_page=3`;
      const url = BASE_URL + endpoint + params;
      fetch(url, options)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          return data.photos;
        })
        .then((kittens) => {
          setKittens(kittens);
        });
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <InputText
        placeholder="enter the value"
        handleInputChange={handleInputChange}
      />
      <Button type="submit" label="search" handleClick={getData} />

      <ul>
        {kittens.map(({ src: { tiny }, alt, id }) => {
          return (
            <li key={id}>
              <img src={tiny} alt={alt} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default withLeftSidebar(AboutUs);
