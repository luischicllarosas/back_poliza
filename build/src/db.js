"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const env_1 = require("./env");
(0, mongoose_1.connect)(env_1.mongodb.URI);
mongoose_1.connection.once('open', _ => console.info('DB is connected', env_1.mongodb.URI));
mongoose_1.connection.once('error', err => console.info('Error in : ', err.message));
