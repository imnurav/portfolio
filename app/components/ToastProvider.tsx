"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/globals.scss";
import "./css/card.scss";

export default function ToastProvider() {
    return <ToastContainer position="top-right" />;
}
