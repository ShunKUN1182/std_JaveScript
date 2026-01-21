const url = "https://click.ecc.ac.jp/ecc/webdesign/wdct/api/v1/schewd/";

async function callApi() {
    const apiDatas = await fetch(url);
    const users = await apiDatas.json();
    console.log(users);
}

callApi();
