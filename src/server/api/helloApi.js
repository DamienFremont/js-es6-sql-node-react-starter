import { Router } from 'express';

export default () => {
	let api = Router();

	// perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        const body = {
            express: 'Hello From Express in JS s'
        };
        res.send(body);
    });

	return api;
}