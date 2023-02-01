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

    async findOne(req: Request, res: Response){
        const email = req.params.email
        const data = await user.findByEmail(email);
        console.log(data.data[0].country)
        return res.json(data)
    }

    async findByEmail(email:string) {
        await moongoseController.connect();
        const user = await userModel.find({email});
        return {status:200, data:user}
    }
}

const user = new User;

export default user;