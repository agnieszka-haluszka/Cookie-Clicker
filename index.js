const cookie = document.querySelector("#cookie");

const updateScore = cookies => {
    const title = document.querySelector("title")
    const score = document.querySelector("#score span")

    score.innerText = cookies;
    title.innerHTML = cookies + "cookies - Cookie Clicker"

    localStorage.setItem("cookies", cookies);
}

const getStorage = () => {}
const cookies = localStorage.getItem("cookies")  || [];
const powerups = JSON.parse(localStorage.getItem("powerups")) || [];

const storage = {
    "cookies": cookies,
    "powerups": powerups
}

return storage;
