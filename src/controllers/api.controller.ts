import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => res.json({ hello: 'world' });

export const test = (req: Request, res: Response) => res.json({ error: 'nothing' });