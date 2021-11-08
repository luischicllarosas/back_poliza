import { Document, model, Schema } from "mongoose";

export interface Policy extends Document {
    // num_poliza: String, // El ID sera el `num-_poliza` 
    persona_id: String,
    fec_inicio_vigencia: Date,
    monto_prima_bruta: Number,
    igv: Number,
    monto_prima_neta: Number
}

const PolicySchema = new Schema<Policy>({
    // num_poliza: String, // El ID sera el `num-_poliza` 
    persona_id: String,
    fec_inicio_vigencia: Date,
    monto_prima_bruta: Number,
    igv: Number,
    monto_prima_neta: Number
})

export default model<Policy>('Policy', PolicySchema);