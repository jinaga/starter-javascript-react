import { collection, field, useJinaga } from "jinaga-react";
import * as React from "react";
import { createVisit, visitsInDomain } from "../../shared/visit";
import { j } from "../jinaga-config";

export const VisitCounter = ({ domain }) => {
    const state = useJinaga(j, domain, [
        collection('visits', j.for(visitsInDomain), v => v.key, [
            field('key', v => j.hash(v))
        ])
    ]);

    React.useEffect(() => {
        j.fact(createVisit(domain, new Date()))
            .catch(err => console.error(err));
    }, []);

    return (state.visits.length > 0
        ? <p>You are visitor number {state.visits.length}.</p>
        : null
    );
};