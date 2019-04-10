import { Domain } from "@shared/model/visit";
import * as React from "react";
import { VisitCounter } from "./visit-counter";

export const App = ({ user }) => (
    <>
        <p>Welcome!</p>
        <VisitCounter user={ user } fact={ new Domain("myapplication") } />
    </>
);