import { Router } from 'express';

import * as PostController from '../controllers/post.controller';
import * as UserController from '../controllers/user.controller';

const router = Router();

router.get('/posts', PostController.all);
router.get('/users', UserController.all);
router.get('/post/:id', PostController.one);

router.post('/post', PostController.create);
router.post('/user', UserController.create);

router.put('/post/:id', PostController.togglePost);

router.delete('/post/:id', PostController.deletePost);

export default router;