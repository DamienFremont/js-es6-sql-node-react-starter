import bodyParser from 'body-parser';
import { Router } from 'express';

import helloApi from './helloApi';

export default () => {
	let api = Router();

	api.use(bodyParser.json());

	// perhaps expose some API metadata at the root
	api.use('/hello', helloApi());

	return api;
}