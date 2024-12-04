//Una función que devuelve true si a es menor que b, false en caso contrario. 
function isLessThan(a, b) {
    return a < b;
}
console.log(isLessThan(3, 5));
console.log(isLessThan(5, 3));

//Función que devuelve true si a es mayor o igual que b, false en caso contrario. 
function isGtREqual2(a, b) {
    return a >= b;
}
console.log(isGtREqual2(3, 5));
console.log(isGtREqual2(5, 3));

//Función que devuelve true si el valor de speed es mayor que 120, false en caso contrario. 
function isSpeeding(speed) {
    return speed > 120;
}
console.log(isSpeeding(110));
console.log(isSpeeding(130));

//Una función que devuelve true si el valor de age está entre 13 y 18 inclusive, false en caso contrario. 
function isTeenager(age) {
    return age >= 13 && age <= 18;
}
console.log(isTeenager(15));
console.log(isTeenager(20));

/*
Una función que devuelve true si el valor de artist es miembro de una matriz que contiene los nombres de
 todos tus artistas musicales favoritos, false en caso contrario. 
*/
const favoriteArtists = ["Artist1", "Artist2", "Artist3"];
function isGoodMusic(artist) {
    return favoriteArtists.includes(artist);
}
console.log(isGoodMusic("Artist1"));
console.log(isGoodMusic("Artist4"));
