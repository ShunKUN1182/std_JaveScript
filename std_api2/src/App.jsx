import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [apiData, setApiData] = useState([]);
    async function getApi() {
        const res = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "emilys",
                password: "emilyspass",
            }),
        });
        const tokenData = await res.json();
        if (res.ok) {
            console.log(tokenData);
            tokenApi(tokenData);
        } else {
            throw new Error(tokenData.message ?? "ログインに失敗しました。");
        }
    }
    useEffect(() => {
        getApi();
    }, []);

    async function tokenApi(tokenData) {
        const response = await fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${tokenData.accessToken}`,
            },
        });
        const data = await response.json();
        setApiData(data);
        console.log(data);
    }
    return (
        <>
            <h1>データをとってみろー</h1>
            <h2>私は{apiData.firstName}です</h2>
        </>
    );
}

export default App;
