import "./App.css";
import ScrollInView from "./components/scrollInView/scrollInView";

//這裡使用一般的 anime 來展示 callback 的效果，不然可以考慮使用 react-animejs
import anime from "animejs/lib/anime.es.js";

function App() {
    return (
        <div className="App">
            <ScrollInView
                className="box"
                callback={(dom) => {
                    anime({
                        targets: dom,
                        translateX: 250,
                    });
                }}
            ></ScrollInView>
            <ScrollInView
                className="box"
                addClass="active"
                callback={(dom) => {
                    anime({
                        targets: dom,
                        width: 600,
                        duration: 3000,
                    });
                }}
            ></ScrollInView>
        </div>
    );
}

export default App;
