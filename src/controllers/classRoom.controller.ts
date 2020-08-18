import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { ClassRoom } from '../entity/ClassRoom';

export const createClassRoom = async (req: Request, res: Response): Promise<Response> => {
    const newClassRoom =  getRepository(ClassRoom).create(req.body);
    const result = await getRepository(ClassRoom).save(newClassRoom);
    return res.status(200).json({ msg: "class room create successfully", data: result });

}

export const updateClassRoom = async (req: Request, res: Response): Promise<Response> => {
    const classRoomId = await getRepository(ClassRoom).findOne(req.params.id);
    /**
     * * if id class Room exist
     */
    if (classRoomId) {
        getRepository(ClassRoom).merge(classRoomId, req.body);
        const result = await getRepository(ClassRoom).save(classRoomId);
        return res.status(200).json({ msg: "class room update successfully", data: result });
        
        
    }
    else {
        return res.json({ msg: "class room not found" });
    }
}

export const getClassRooms = async (req: Request, res: Response): Promise<Response> => {
    const result = await getRepository(ClassRoom).find();
    return res.json(result);
}
export const getClassRoom = async (req: Request, res: Response): Promise<Response> => {
    const classRoom = await getRepository(ClassRoom).findOne(req.params.id);
    return res.json(classRoom);
}

export const deleteClassRoom = async (req: Request, res: Response): Promise<Response> => {
    const classRoom = await getRepository(ClassRoom).delete(req.params.id);
    return res.status(200).json({ msg: "class room delete successfully", data: classRoom });
}

