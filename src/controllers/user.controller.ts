import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { ClassRoom } from '../entity/ClassRoom';
import { getConnection } from "typeorm";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users)
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const result = await getRepository(User).findOne(req.params.id);
    return res.json(result)
}

export const createUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const classRoomId = await getRepository(ClassRoom).findByIds(req.body.class_room_id);
    
    const newUSer = new User();
    newUSer.first_name = req.body.first_name;
    newUSer.last_name = req.body.last_name;
    newUSer.ci = req.body.ci;
    newUSer.password = req.body.password;
    newUSer.is_active = req.body.is_active;
    newUSer.class_room = classRoomId;
    /**
     * ? marico el q lo lea
     */
    const result = await getConnection().manager.save(newUSer);
    return res.json(result);
};

export const updateUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if (user) {
        getRepository(User).merge(user, req.body)
        const result = await getRepository(User).save(user);
        return res.json(result);
    } else {
        return res.status(404).json({ msg: "user not found" });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const result = await getRepository(User).delete(req.params.id);
    return res.json(result)
}

export const signUser = async (req: Request, res: Response): Promise<Response> => {
    return res.json('si')
}