import { createAxiosClient } from "./createAxiosClient";
import { useAuthStore } from "../stores/authStore";

const REFRESH_TOKEN_URL = 'http://62.205.183.86:8182/api/v1/auth/refreshToken'
const BASE_URL = 'http://62.205.183.86:8182/api/v1'

function getCurrentAccessToken() {
    // this is how you access the zustand store outside of React.
    return useAuthStore.getState().accessToken
}

function getCurrentRefreshToken() {
    // this is how you access the zustand store outside of React.
    return useAuthStore.getState().refreshToken
}


function setRefreshTokens(tokens){
    console.log('set refresh tokens...')
    const login = useAuthStore.getState().setTokens
    login(tokens)
}

async function logout(){
    console.log('logout...')
    const logout = useAuthStore.getState().removeTokens
    logout()
}

export const client = createAxiosClient({
    options: {
        baseURL: BASE_URL,
        timeout: 300000,
        headers: {
            'Content-Type': 'application/json',
        }
    },
    getCurrentAccessToken,
    getCurrentRefreshToken,
    refreshTokenUrl: REFRESH_TOKEN_URL,
    logout,
    setRefreshTokens
})