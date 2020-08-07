import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {movies, promoMovie, moviesComments} from "./mocks/films.js";

const init = () => {

  ReactDOM.render(
      <App
        promo = {promoMovie}
        movies = {movies}
        moviesComments = {moviesComments}
      />,
      document.querySelector(`#root`));
};

init();
