import { Request, Response } from 'express';
import { PostService } from '../services/PostService';

export const all = async (req: Request, res: Response) => {
    const posts = await PostService.findAll();

    res.json({ posts });
}

export const one = async (req: Request, res: Response) => {}
export const create = async (req: Request, res: Response) => {}
export const togglePost = async (req: Request, res: Response) => {}
export const deletePost = async (req: Request, res: Response) => {}