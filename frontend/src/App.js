import "./App.css";
import React from "react";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransferProperty from "./Pages/TransferProperty";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route
                        path="/transfer"
                        element={<TransferProperty></TransferProperty>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
