import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export const all = async (req: Request, res: Response) => {
    const users = await UserService.findAll();

    res.json({ users });
}
export const create = async (req: Request, res: Response) => {}