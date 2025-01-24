import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens"
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMin: number;
} //робимо типізацію

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
})
const axiosPublicInstance = axios.create({
    baseURL: "https://dummyjson.com",
});


axiosInstance.interceptors.response.use((requestObject ) => {
    if(requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
        // retriveLocalStorage<IProductsResponseModel[]>('products')
    }
    return requestObject;
})//перехоплюємо всі запити

export const login = async ({username, password, expiresInMin}:LoginData):Promise<void> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('login', {username, password, expiresInMin});//повертає нам відповідь в середині якої будуть зберігатись з нашими токенами
    console.log(userWithTokens);
    //робимо постовий запит
    //сервер що присилає нам відповідь
    localStorage.setItem('user', JSON.stringify(userWithTokens));//зберігаємо в локалсторидж

}

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosPublicInstance.get<IProductsResponseModel>('/products');
    return products;
}
//завантажуємо продукти з аутинтифікованої точки

export const refresh = async () => {
    // const refreshToken = retriveLocalStorage<IUserWithTokens>('user').refreshToken;
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');//дістали з локалсторидж
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });//отримали оновлені аксус і рефреш токени
    console.log(accessToken);
    console.log(refreshToken);
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;//замінили все на те що потрібно
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));//запхали назад в локалсторидж оновленим

}
