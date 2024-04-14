import {Sidebar} from "./component/sidebar";
import {Main} from "./component/main";

function App() {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <Main />
        </div>
    );
}

export default App;
