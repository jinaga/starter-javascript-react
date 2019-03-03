import React from "react";
import { VisitCounter } from "./visit-counter";

export const App = ({ domain, user }) => (
    <>
        <p>Welcome!</p>
        <VisitCounter domain={ domain } />
    </>
);