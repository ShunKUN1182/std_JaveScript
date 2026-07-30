import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const URL = "https://dummyjson.com/auth/login";

    async function handleLogin(e) {
        e.preventDefault();
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            localStorage.setItem("accessToken", data.accessToken);
            getUserData();
        } else {
            console.log("error");
        }
    }

    async function getUserData() {
        const token = localStorage.getItem("accessToken");
        const url = "https://dummyjson.com/auth/me";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        setUser(data);
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button type="submit">ログイン</button>
            </form>
            <h1>{user ? user.firstName + "さんようこそ！！" : "ログインしてください"}</h1>
        </>
    );
}

export default App;
