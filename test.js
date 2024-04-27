setTimeout(() => {
    console.log('hi!')
}, 1000)
async function Data() {
    try {
        const data = await fetch();
        console.lof(data);
    } catch (error) {
        console.error()
    }
}
// {/* <style>
//    input[type="number"] {
//     border: 1px solid red; /* Параметры рамки */
//     border-radius: 4px; /* Радиус скругления */
//     width: 3em; /* Ширина */
//     padding: 5px; /* Поля */
//    }
//   </style>
//   <p>Возраст: <input type="number" name="age" value="18"></p> */}
console.log(2 & 1);