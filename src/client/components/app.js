import React from "react";
import { VisitCounter } from "./visit-counter";
import { Domain } from "@shared/model/visit";

export const App = ({ user }) => (
    <>
        <p>Welcome!</p>
        <VisitCounter user={ user } fact={ new Domain("myapplication") } />
    </>
);