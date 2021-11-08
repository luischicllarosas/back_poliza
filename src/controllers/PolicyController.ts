import { Request, Response } from 'express'
import PolicyModel, { Policy } from '../models/Poliza';


class PolicyController {

    public async addPolicy(req: Request, res: Response) {
        const body = req.body;
        console.log(body);

        const policy: Policy = new PolicyModel(body)
        const newPolicy = await policy.save()

        res.status(201).send(newPolicy)
    }

    public async getAllPolicy(req: Request, res: Response) {
        const Policy: Policy[] = await PolicyModel.find()

        res.send(Policy)
    }
}
export default new PolicyController()