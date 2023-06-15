"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start: function () {
    personalMovieDB.count = +prompt("How many films did you watch?", ""); // + ставим, чтобы значение было числом

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      //isNaN - возвращает true, если аргумент не является числом
      personalMovieDB.count = +prompt("How many films did you watch?", ""); //повторяем вопрос, пока пользователь не введет ожидаемое значение
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = prompt("На сколько оцените его?", "");

      if (a !== "" && b !== "" && a !== null && b !== null && a.length <= 50) {
        console.log("done");
        personalMovieDB.movies[a] = b;
      } else {
        console.log("erroe");
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },

  showMyDB: function () {
    if (!personalMovieDB.private) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (genre === "" || genre === null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`любимый жанр №${i + 1} - это ${item}`);
    });
  },

  toggleVisibleMyDB: function () {
    personalMovieDB.private = !personalMovieDB.private;
  },
};
