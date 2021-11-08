import { Request, Response } from 'express'
import PersonModel, { Person } from '../models/Person'


class PersonController {

    public async addPerson(req: Request, res: Response) {
        const body = req.body;

        const person: Person = new PersonModel(body)
        const newPerson = await person.save()

        res.status(201).send(newPerson)
    }

    public async getAllPerson(req: Request, res: Response) {
        const Person: Person[] = await PersonModel.find()

        res.send(Person)
    }
}
export default new PersonController()