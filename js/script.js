'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            
                while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
                }
            },
    rememberMyFilms: function () {
                for (let i = 0; i < 2; i++) {
                    const a = prompt('Один из последних просмотренных фильмов?', ''),
                        b = prompt('На сколько оцените его?', '');
                
                    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                    } else {
                        console.log('error');
                        i--;
                    }
                }
            },
    detectPersonalLevel: function () {
                if (personalMovieDB.count < 10) {
                    console.log("Просмотрено довольно мало фильмов");
                } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                    console.log("Вы классический зритель");
                } else if (personalMovieDB.count >= 30) {
                    console.log("Вы киноман");
                } else {
                    console.log("Произошла ошибка");
                }
            },
    showMyDB: function (hidden) {
                if (!hidden) {
                    console.log(personalMovieDB);
                }
            },
    toggleVisibleMyDB: function(){
            if(personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
    },
    writeYourGenres: function () {
                for (let i = 1; i < 2; i++) {
                    // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

                    // if(genre === '' || genre === null ) {
                    //     console.log('Вы ввели некорректные данные или не ввели их вовсе!');
                    //     i--;
                    // } else {
                    //     personalMovieDB.genres[i - 1] = genre;
                    // }   
                    
                    let genres = prompt(`Введите ваши любимые жанры через запятую`);

                    if (genres === '' || genres == null) {
                        console.log('Вы ввели некорректные данные или не ввели их вовсе!');
                        i--;
                    } else {
                        personalMovieDB.genres = genres.split(', ');
                        personalMovieDB.genres.sort();
                    }
                }

                personalMovieDB.genres.forEach((item, i) => {
                    console.log(`Любимый жанр ${i + 1} - это ${item}`);
                });
            }
};

// 1) метод String превращает в строку
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) способ Конкатенация превращает в строку
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// 1) способ Number превращает в Число
console.log(typeof(Number('4')));

// 2) унарный плюс превращает в Число
console.log(typeof(+'5'));

// 3) метод parseInt превращает в Число
console.log(typeof(parseInt("15px", 10)));
console.log(parseInt("15px", 10));


let answer = +prompt("Hello", "");

// 1) 0, '', null, undefined, NaN - всегда false, а остальные значения true
let switcher = null;

if(switcher){
    console.log('Working...');
}

switcher = 1;

if(switcher){
    console.log('Working...');
}

// 2) метод Boolean 
console.log(typeof(Boolean('4')));

// 3) два знака отрицания !!
console.log(typeof(!!"44444"));