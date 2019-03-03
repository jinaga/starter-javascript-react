import { Visit } from "@shared/model/visit";
import { collection, field, useJinaga } from "jinaga-react";
import * as React from "react";
import { j } from "../jinaga-config";

export const VisitCounter = ({ domain }) => {
    const state = useJinaga(j, domain, [
        collection('visits', j.for(Visit.inDomain), v => v.key, [
            field('key', v => j.hash(v))
        ])
    ]);

    return (state.visits.length > 0
        ? <p>You are visitor number {state.visits.length}.</p>
        : null
    );
};