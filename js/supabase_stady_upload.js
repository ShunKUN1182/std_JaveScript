const supabaseUrl = "https://jmbbgtqiiwwcnfyokiam.supabase.co";
const supabaseKey = "sb_publishable_0oQmgJP5Q9S3QnAqfxgZLA_QsuFsR1i";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
const inputText = document.querySelector("#input_text");
const btn = document.querySelector("button");
const list = document.querySelector("ul");
const inputFile = document.querySelector("#input_file");
const bucketName = "ramen_image";

// async function loadData() {
//     const { data, error } = await supabase.from("ramen").select("*");
//     console.log("data:", data);
//     console.log("error:", error);
// }

async function insertTest() {
    const { error } = await supabase.from("ramen").insert({ title: inputText.value });
    console.log("無事成功しました");
    console.log(error);
}

btn.addEventListener("click", async () => {
    // insertTest();
    // console.dir(inputFile);
    // console.log(inputFile.files[0].name);
    let file = inputFile.files[0];
    console.log(crypto.randomUUID());
    const fileName = `${crypto.randomUUID()}.${file.name.split(".").pop()}`;
    console.log(fileName);
    const { data, error } = await supabase.storage.from(bucketName).upload(fileName, file);
    console.log("data:", data);
    console.log("error:", error);
    const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(fileName);
    console.log(urlData);
    await supabase.from("ramen").insert({
        title: inputText.value,
        image_url: urlData.publicUrl,
    });
});

async function imageUpload() {}
