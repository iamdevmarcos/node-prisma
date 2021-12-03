import { Request, Response } from 'express';
import { PostService } from '../services/PostService';
import { UserService } from '../services/UserService';

export const all = async (req: Request, res: Response) => {
    const posts = await PostService.findAll();

    res.json({ posts });
}

export const one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await PostService.findOne(parseInt(id));

    if(post) {
        res.json({ post });
    } else {
        res.json({ error: 'post not found...' });
    }
}


export const create = async (req: Request, res: Response) => {
    const { title, body, author } = req.body;

    if(title && body && author) {
        const user = await UserService.findOne({
            id: parseInt(author)
        });

        if(user) {
            const post = await PostService.create({
                title, body, authorId: user.id
            });

            res.status(201).json({ post });
        } else {
            res.json({ error: 'author not found...' });
        }
    } else {
        res.json({ error: 'Data is empty...' });
    }
}
export const togglePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const post = await PostService.findOne(parseInt(id));
    if(post) {

        const postUpdated = await PostService.update(
            post.id,
            { published: !post.published }
        );

        res.json({ post: postUpdated });

    } else {
        res.json({ error: 'Post not found...' });
    }
}

export const deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const post = await PostService.findOne(parseInt(id));
    
    if(post) {
        await PostService.remove(parseInt(id));
        res.json({ status: 'true' });
    } else {
        res.json({ error: 'post not found...' });
    }
}