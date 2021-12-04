import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export const all = async (req: Request, res: Response) => {
    const users = await UserService.findAll();

    res.json({ users });
}

export const create = async (req: Request, res: Response) => {
    const { email, name, age } = req.body;
    
    if(email && name) {
        const user = await UserService.findOne({ email });

        if(!user) {
            const newUser = await UserService.create({
                email, name, age: age ?? 18
            });

            res.status(201).json({ user: newUser });
        } else {
            res.json({ error: 'Já existe usuário com este e-mail' });
        }

        res.status(201).json({ user });
    } else {
        res.json({ error: 'Data is empty...' });
    }
}

export const one = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await UserService.findById(parseInt(id));
    if(user) {
        res.json({ user });
    } else {
        res.json({ error: 'user not found' });
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await UserService.findById(parseInt(id));
    if(user) {
        await UserService.remove(parseInt(id));
        res.json({});
    } else {
        res.json({ error: "user not found..." });
    }
}