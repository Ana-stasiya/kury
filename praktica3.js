
let numberOfFilms;

function start(){
     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');
     }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i=0;i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('Нас колько оцените его?','');
        
        if (a!=null && b!= null && a!='' && b!='' && a.length<50){
            personalMovieDB[a]=b;
            console.log('done');
        } else {
            console.log('error');
        }
    }
}

// rememberMyFilms();

function detectPersonallevel(){
    if (personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count<=10 && personalMovieDB<30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count>=30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonallevel();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    } else {
        console.log("у вас нет доступа")
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i=1;i<=3;i++){
        // let a=prompt(`Ваш любимый жанр под номером ${i}`,'');
        // personalMovieDB.genres[i-1]=a; 
        personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`,'');; 
    }
}

writeYourGenres();

console.log(personalMovieDB);