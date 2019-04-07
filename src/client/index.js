import { UserName } from "@shared/model/user";
import { Domain, Visit } from "@shared/model/visit";
import "babel-polyfill";
import { JinagaBrowser } from "jinaga";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";

(async () => {
    const j = JinagaBrowser.create({
        httpEndpoint: '/jinaga'
    });

    const domain = new Domain('myapplication');
    const { userFact: user, profile } = await j.login();

    // Query for the user's current name.
    const names = await j.query(user, j.for(UserName.forUser));
    if (names.length !== 1 || names[0].value != profile.displayName) {
        // Set their name if it is not set, in conflict, or different.
        await j.fact(new UserName(user, profile.displayName, names));
    }

    // Record this user's visit.
    await j.fact(new Visit(domain, user));

    ReactDOM.render(<App domain={domain} />, document.getElementById('application-host'));
})().catch(err => console.error(err));