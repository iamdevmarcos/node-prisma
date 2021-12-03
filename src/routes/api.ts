import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        hello: 'world'
    });
});

router.get('/test', (req, res) => {
    res.json({
        test: 'ok'
    });
});

export default router;