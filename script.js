
// HALAMAN PEMBUKA
const welcome = document.getElementById("welcome");
const mainWebsite = document.getElementById("mainWebsite");
const enterButton = document.getElementById("enterButton");
const visitorName = document.getElementById("visitorName");

enterButton.addEventListener("click", () => {
    const name = visitorName.value.trim();

    if (name === "") {
        alert("Masukkan nama kamu terlebih dahulu!");
        visitorName.focus();
        return;
    }

    welcome.classList.add("hidden");
    mainWebsite.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// BISA MASUK DENGAN MENEKAN ENTER
visitorName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        enterButton.click();
    }
});

// GANTI TEMA WEBSITE
const themeButton = document.getElementById("themeButton");

const themes = [
    {
        name: "green",
        label: "🌿 Tema Hijau"
    },
    {
        name: "dark",
        label: "🌙 Tema Gelap"
    },
    {
        name: "blue",
        label: "💙 Tema Biru"
    },
    {
        name: "pink",
        label: "🌸 Tema Pink"
    }
];

let currentTheme = 0;

themeButton.addEventListener("click", () => {
    currentTheme = (currentTheme + 1) % themes.length;

    const selectedTheme = themes[currentTheme];

    document.body.dataset.theme = selectedTheme.name;
    themeButton.textContent = selectedTheme.label;
});

// TAHUN TIMELINE
console.log("REAL GRIYA WEBSITE BERHASIL DIMUAT!");
