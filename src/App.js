import Home from "./routes/home/home.components";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.components";


const Shop = () => {
    return (
        <h1>I am the shop</h1>
    );
}


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="shop" element={<Shop/>}/>
            </Route>
        </Routes>
    );
}

export default App;
