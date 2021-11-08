import { Document, model, Schema } from "mongoose";

export interface Person extends Document {
    // cod_persona: String, // usare el id como codigo de la persona
    nombre: string
    apellido_paterno: string
    apellido_materno: string
}

const PersonSchema = new Schema<Person>({
    // cod_persona: String, // usare el id como codigo de la persona
    nombre: { type: String, required: true },
    apellido_paterno: { type: String, required: true },
    apellido_materno: { type: String, required: true },
})

export default model<Person>('Person', PersonSchema);