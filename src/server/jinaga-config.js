import { JinagaServer } from "jinaga";

export function configureJinaga(app) {
    const pgConnection = process.env.JINAGA_POSTGRESQL ||
        'postgresql://dev:devpw@localhost:5432/myapplication';
    const { handler } = JinagaServer.create({
        pgKeystore: pgConnection,
        pgStore: pgConnection
    });

    app.use('/jinaga', handler);
}