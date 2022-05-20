//Если элемент не извлекается из корня целиком, то он возводится в квадрат
// function squareOrSquareRoot(array) {
//     array.forEach((el, count) => {(Math.floor(Math.sqrt(el)) !== Math.sqrt(el))   ? array[count] = array[count] ** 2 : array[count] = Math.floor(Math.sqrt(array[count]))});
//     return array;
// }
// console.log([1,2,3,4,5,6,9,10,25])

//Проверка схоже ли строки по case (капс или нет)
// function sameCase(a, b){
//     if (!a.match(/[a-z,A-Z]/) || !b.match(/[a-z,A-Z]/)){
//         return -1
//     } else{
//         return (a == a.toUpperCase() ? 1 : 0) == (b == b.toUpperCase() ? 1 : 0) ? 1 : 0
//     }
// }
// console.log(sameCase(':', 'V'))


//Сравнение среднего значения массива с заданным числом
// function betterThanAverage(classPoints, yourPoints) {
//     sum = 0
//     classPoints.forEach(element => {sum += element});
//     return yourPoints >= sum/classPoints.length ? true : false
// }
// console.log(betterThanAverage([1, 2, 3, 4, 10, 22], 15))

//short + long + short
// function solution(a, b){
//     return a.length < b.length ? a + b + a : b + a + b
// }
// console.log(solution('45', '1'))


//Разбивание строки на количество в ней заглавных, строчных букв, цифр и специальных символов
// function solve(s){
//     upperCase=0
//     lowerCase=0
//     numbers=0
//     specaialChars=0
//     s.split('').forEach((el, count) => {
//         if ((el.match(/[a-zA-Z]/i))){
//             str = el.match(/[a-zA-Z]/i)
//             str[0] == str[0].toLowerCase() ? lowerCase++ : upperCase++
//         }
//         else if(el.match(/[0-9]/i)){
//             numbers++
//         } else{
//             specaialChars++
//         }
//     });
//     return [upperCase, lowerCase, numbers, specaialChars]
// }
// console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"))


//Равенство суммы возведенных в степень каждой цифре числа самому числу
// function isNarcissistic(n){
//     sum = 0; s = String(n)
//     s.split('').forEach(el => {
//         sum += el**s.length
//     });
//     return n == sum ? true : false
// }
// console.log(isNarcissistic(1634))


//Цепной вывод
// function add(num) {
//     return num + 10
// }
// function mult(num) {
//     return num * 30
// }
// function chain(input, fs) {
//     return fs(1)(fs(0)(input))
// }
// console.log(chain(2, [add, mult]))


//Вывод расположения всех гласных
// function vowelIndices(word){
//     arr = []
//     word.split('').forEach((el,n) => {
//         word[n].match(/[aeiouy]/i) ? arr.push(n+1) : false;
//     });
//     return arr;
// }
// console.log(vowelIndices("supercalifragilisticexpialidocious"))


// Соотношение возраста кота, собаки по отношению к человеческому
// var humanYearsCatYearsDogYears = function(hY) {
//     function f(dif){
//         return count = hY == 1 ? hY * 15 : ((hY == 2) ? 15 + 9 : (15 + 9) + dif * (hY - 2));
//     }
//     return [hY, f(4),f(5)];
// }
// console.log(humanYearsCatYearsDogYears(1))


//Adding Arrays
// function arrAdder(arr) {
//     array = []
//     for (let i = 0; i < arr.length; i++){
//         let ar = []
//         for (let j = 0; j < arr.length; j++){
//             ar.push(arr[j][i])
//         }
//         array.push(ar.join(''))
//     }
//     str = array.join(' ')
//     return str.trim()
// }

// console.log(arrAdder(
//     [
//         [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//         [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//         [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//         [ '', 'o', '', '', 'e', '', '', '' ],
//         [ '', 'c', '', '', 'r', '', '', 'l' ],
//         [ '', 'h', '', '', 'h', '', '', '' ],
//         [ '', 'o', '', '', 'o', '', '', '' ],
//         [ '', 'n', '', '', 'u', '', '', '' ],
//         [ '', 'd', '', '', 's', '', '', '' ],
//         [ '', 'r', '', '', 'e', '', '', '' ],
//         [ '', 'i', '', '', '', '', '', '' ],
//         [ '', 'a', '', '', '', '', '', '' ] ]
// ))


//Binary scORe
// function score(n){
//     str = ''
//     for (let i = 0; i <= n; i++){
//         str |= i
//     }
//     return str
// }
// console.log(score(457630833))
