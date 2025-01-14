import {Support} from "./Support.ts";
import {IUser} from "./IUser.ts";

export interface IReqResinResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
    support: Support;
}