import moongoseController from "../db/mongoose";
import { IUser } from "../interface/IUser";
import { userModel } from "../schemas/user/user";
import { Request, Response } from 'express';
import { MESSAGES, STATUS_CODE } from "../common/response";
import { getResponse, response } from "../common/common";
import validatorFields from "../common/validatorFields";

class User {

    async save(req: Request, res: Response) {
        await moongoseController.connect();
        const body: IUser = req.body;
        const userData = new userModel(body);
        await userData.save();
        await moongoseController.disconnect();
        return res.json({ user: body })
    }

    async findOne(req: Request, res: Response) {
        let response;
        const email: string = req.params.email;
        const data = await user.findByEmail(email); 
        const myUser = data.data
        if (myUser.length === 0) {
            response = getResponse(STATUS_CODE.Success, MESSAGES.NotFound, {});
            return response
        }
        console.log(myUser[0])
        response = getResponse(STATUS_CODE.Success, MESSAGES.Success, myUser[0]);
        return res.json(data)
    }

    async findByEmail(email: string) : Promise<response> {
        let response;
        try {
            await moongoseController.connect();
            const isValidEmail: boolean = await validatorFields.validateEmail(email);
            if (!isValidEmail) {
                response = getResponse(STATUS_CODE.BadRequest, MESSAGES.BadRequest, null);
                return response
            }
            const user = await userModel.find({ email });
            response = getResponse(STATUS_CODE.Success, MESSAGES.Success, user)
            return response
        } catch (e: any) {
            response = getResponse(STATUS_CODE.InternalError, MESSAGES.InternalError, e.message);
            return response
        }
    }
}

const user = new User;

export default user;