import "./App.css";

const user = {
    name: "fukusima",
    age: 19,
    course: "Web",
};

function MyButton() {
    return (
        <>
            <button>私はボタンです</button>
        </>
    );
}

export default function MyApp() {
    return (
        <>
            <div>
                <h1>これは{user.name}のアプリです</h1>
                <MyButton />
            </div>
        </>
    );
}
