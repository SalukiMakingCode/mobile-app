import * as React from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
    const initialEntries = ['/', '/'];
    return (
        <NativeRouter initialEntries={initialEntries}>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </NativeRouter>
    );
}

export default App;