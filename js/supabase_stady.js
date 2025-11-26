const supabaseUrl = "https://jmbbgtqiiwwcnfyokiam.supabase.co";
const supabaseKey = "sb_publishable_0oQmgJP5Q9S3QnAqfxgZLA_QsuFsR1i";
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
const inputText = document.querySelector("input");
const btn = document.querySelector("button");

async function loadData() {
    const { data, error } = await supabaseClient.from("ramen").select("*");

    console.log("data:", data);
    console.log("error:", error);
}

async function insertTest() {
    const { error } = await supabase.from("ramen").insert({ title: inputText.value });
}

btn.addEventListener("click", () => {
    insertTest();
});

loadData();
