import {ParamsDictionary} from "express-serve-static-core";
import express, { Application, Request } from 'express';
import bodyParser from 'body-parser';

export interface ExpressRequest<RequestBodyT = any, ParamsT = any>
    extends Request<ParamsDictionary, any, RequestBodyT> {
    paramsTyped?: ParamsT;
}

const app: Application = express();
app.use(bodyParser.json());