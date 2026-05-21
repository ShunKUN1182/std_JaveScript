import "./App.css";
import { useState } from "react";

const user = {
    name: "fukusima",
    age: 19,
    course: "Web",
};

const wd2a = [
    {
        name: "さかぐち",
        age: 19,
        hobby: "ボートレース",
    },
    {
        name: "ほそかわ",
        age: 19,
        hobby: "デザイン",
    },
    {
        name: "ふくしま",
        age: 19,
        hobby: "ブロスタ",
    },
];

function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        // alert("You clicked me!");
        setCount(count + 1);
    }
    return (
        <>
            <button onClick={handleClick}>今 {count} 回やで</button>
        </>
    );
}

const listItems = wd2a.map((member) => (
    <li key={member.name}>
        私は{member.name}です。{member.age}歳です。{member.hobby}が好きです。
    </li>
));

export default function App() {
    return (
        <>
            <div>
                <h1>これは{user.name}のアプリです</h1>
                <MyButton />
            </div>
            <ul>{listItems}</ul>
        </>
    );
}
