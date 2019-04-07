import React from "react";
import { VisitCounter } from "./visit-counter";

export const App = ({ domain }) => (
    <>
        <p>Welcome!</p>
        <VisitCounter fact={ domain } />
    </>
);