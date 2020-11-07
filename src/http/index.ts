import axios from "axios";

const apiKey = "d2f15e49dcb2162b105abee53a52b9a643d0b2bfe4e4538525eb61f4e744c060"

export const cryptoHttp = axios.create({
    baseURL: "https://min-api.cryptocompare.com/data",
    headers: {
        authorization: `ApiKey ${apiKey}`
    }
})