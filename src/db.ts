import { connect, connection, Mongoose } from "mongoose";
import { mongodb } from "./env";


connect(mongodb.URI)

connection.once('open', _ => console.info('DB is connected', mongodb.URI))

connection.once('error', err => console.info('Error in : ', err.message))