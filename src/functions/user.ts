import moongoseController from "../db/mongoose";
import { IUser } from "../interface/IUser";
import { userModel } from "../schemas/user/user";
import { Request, Response } from 'express';

class User {

    async save(req: Request, res: Response){
        await moongoseController.connect();
        const body: IUser = req.body;
        const userData = new userModel(body);
        await userData.save();
        await moongoseController.disconnect();
        return res.json({user:body})
    }
}

const user = new User;

export default user;