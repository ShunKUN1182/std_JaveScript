const supabaseUrl = "https://jmbbgtqiiwwcnfyokiam.supabase.co";
const supabaseKey = "sb_publishable_0oQmgJP5Q9S3QnAqfxgZLA_QsuFsR1i";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
const inputText = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

async function loadData() {
    const { data, error } = await supabase.from("ramen").select("*");
    console.log("data:", data);
    console.log("error:", error);
    for (let i = 0; i < data.length; i++) {
        list.insertAdjacentHTML("beforeend", `<li> ${i + 1} : ${data[i].title}</li>`);
        list.insertAdjacentHTML("beforeend", `<img src="${data[i].image_url}">`);
    }
}

async function insertTest() {
    const { error } = await supabase.from("ramen").insert({ title: inputText.value });
    console.log("無事成功しました");
    console.log(error);
}

btn.addEventListener("click", () => {
    insertTest();
});

loadData();
