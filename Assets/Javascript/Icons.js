const icons = [
    {
        href: "https://discord.com/users/922843169480122388/",
        src: "./Assets/Images/Icons/Product Set/Discord.png",
        alt: "Discord - aftxrlifx"
    },
    {
        href: "https://steamcommunity.com/id/aftxr-lifx/",
        src: "./Assets/Images/Icons/Product Set/Steam.png",
        alt: "Steam - jaxx"
    },
    {
        href: "https://github.com/its-Jaxx/",
        src: "./Assets/Images/Icons/Product Set/GitHub.png",
        alt: "GitHub - its-Jaxx"
    },
    {
        href: "https://nixware.cc/x/",
        src: "./Assets/Images/Icons/Product Set/Nixware.png",
        alt: "Nixware - Mod"
    }
];

const container = document.querySelector('.icons');
icons.forEach(icon => {
    const a = document.createElement('a');
    a.href = icon.href;
    a.target = "_blank";
    a.classList.add('icon');

    const img = document.createElement('img');
    img.src = icon.src;
    img.alt = icon.alt;
    img.width = 24;

    a.appendChild(img);
    container.appendChild(a);
});