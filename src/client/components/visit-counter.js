import { Domain, Visit } from "@shared/model/visit";
import { array, field, jinagaContainer, specificationFor } from "jinaga-react";
import * as React from "react";
import { j } from "../jinaga-config";

const visitCounterSpec = specificationFor(Domain, {
    visits: array(j.for(Visit.inDomain), {
        hash: field(v => j.hash(v))
    })
});

const visitCounterMapping = visitCounterSpec(({ visits }) => (
    <p>You are visitor number {visits.length}.</p>
));

export const VisitCounter = jinagaContainer(j, visitCounterMapping);