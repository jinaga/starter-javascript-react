import { Jinaga as j } from "jinaga";

export function visitsInDomain(d) {
    return j.match({
        type: 'MyApplication.Visit',
        domain: d
    });
}

export function createDomain(identifier) {
    return {
        type: 'MyApplication.Domain',
        identifier
    };
}

export function createVisit(domain, time) {
    return {
        type: 'MyApplication.Visit',
        domain,
        time
    };
}