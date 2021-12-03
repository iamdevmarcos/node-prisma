import { Router } from 'express';

import * as ApiController from '../controllers/api.controller';

const router = Router();

router.get('/', ApiController.home);
router.get('/test', ApiController.test);

export default router;