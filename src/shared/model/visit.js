import { Jinaga as j } from "jinaga";

export class Domain {
    constructor(
        identifier
    ) {
        this.type = Domain.Type;
        this.identifier = identifier;
    }
}
Domain.Type = 'MyApplication.Domain';

export class Visit {
    constructor(
        domain,
        user
    ) {
        this.type = Visit.Type;
        this.domain = domain;
        this.user = user;
        this.time = new Date();
    }

    static inDomain(d) {
        return j.match({
            type: Visit.Type,
            domain: d
        });
    }

    static user(v) {
        v.has('user');
        return j.match(v.user);
    }
}
Visit.Type = 'MyApplication.Visit';

export function authorizeVisit(a) {
    return a
        .any(Domain.Type)
        .type(Visit.Type, j.for(Visit.user))
        ;
}