import {IReqResinResponse} from "../models/IReqResinResponse.ts";

//
// const basUrl = 'https://reqres.in/api'

// const pgUrl = {
//     pgAll: async (pg:string) => {
//         return await fetch(basUrl + '/users?page=')
//             .then(value => value.json())
//     }
// }

export const getAllUsers = async (pg: string):Promise<IReqResinResponse> => {
    return await fetch('https://reqres.in/api/users?page=' + pg )
        .then(value => value.json())

}

