import React from "react";
import { j } from "../jinaga-config";
import { visitsInDomain, createVisit } from "../../shared/visit";

export class VisitCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visits: 0
        };
    }

    componentDidMount() {
        this.watch = j.watch(this.props.domain, j.for(visitsInDomain),
            visit => this.countVisit());
        j.fact(createVisit(this.props.domain, new Date()));
    }

    componentWillUnmount() {
        this.watch.stop();
    }

    render() {
        return (this.state.visits
            ? <p>You are visitor number {this.state.visits}.</p>
            : null
        );
    }

    countVisit() {
        this.setState({
            ...this.state,
            visits: this.state.visits + 1
        });
    }
}