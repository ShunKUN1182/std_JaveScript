const supabaseUrl = "https://jmbbgtqiiwwcnfyokiam.supabase.co";
const supabaseKey = "sb_publishable_0oQmgJP5Q9S3QnAqfxgZLA_QsuFsR1i";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
const inputText = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

async function insertTest() {
    const { error } = await supabase.from("ramen").insert({ title: inputText.value });
    console.log("無事成功しました");
    console.log(error);
}

btn.addEventListener("click", () => {
    insertTest();
});

loadData();
