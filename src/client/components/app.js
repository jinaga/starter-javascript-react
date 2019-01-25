import React from "react";
import { createDomain } from "../../shared/visit";
import { VisitCounter } from "./visit-counter";

export const App = ({}) => (
    <>
        <p>Welcome!</p>
        <VisitCounter domain={ createDomain('myapplication') } />
    </>
);