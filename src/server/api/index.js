import bodyParser from 'body-parser';
import { Router } from 'express';

import HelloApi from './HelloApi';

export default () => {
	let api = Router();

	api.use(bodyParser.json());

	// perhaps expose some API metadata at the root
	api.use('/hello', HelloApi());

	return api;
}