let startValue = document.getElementById("startValue")
let endValue = document.getElementById("endValue")
let root = document.getElementById("roots")
root.classList.add("hidden")
let array = [];
const handleRoots = () => {
    array = [];
    root.innerHTML = '';
    let start = parseInt(startValue.value)
    let end = parseInt(endValue.value)
    for (let i = start; i <= end; i++) {
        let answer = i ** 2
        array.push(answer)
    }
    root.innerHTML += `Roots : ${array}`
    root.classList.remove("hidden")
}
