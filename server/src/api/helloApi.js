import { Router } from 'express';
import { HelloResponse } from '../../../client/src/model/HelloModel';

export default () => {
    let api = Router();

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        const body = new HelloResponse({express: 'Hello From Express in JS (ES6)'});
        res.send(body);
    });

    return api;
}