const songs = [
    { name: "SLAVE", artist: "nissy", imgPath: "images/slave.png" },
    { name: "あまりにも素敵な夜だから", artist: "[Alexandros]", imgPath: "images/slave.png" },
    { name: "aiueo", artist: "しゅんや", imgPath: "images/slave.png" },
    { name: "Trippin", artist: "しゅんや", imgPath: "images/slave.png" },
    { name: "ねこ", artist: "しゅんや", imgPath: "images/slave.png" },
    { name: "あいうえおそんぐ", artist: "しゅんや", imgPath: "images/slave.png" },
];

const content = document.querySelector(".content");

songs.forEach((e) => {
    content.insertAdjacentHTML(
        "beforeend",
        `
            <div>
                <img src="${e.imgPath}" alt="" />
                <h1>${e.name}</h1>
                <h2>${e.artist}</h2>
            </div>
    `,
    );
});
