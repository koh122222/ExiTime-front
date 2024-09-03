import {create} from "zustand";

function setTokensToLocalStorage({ accessToken, refreshToken }) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
}

function removeTokensFromLocalStorage() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}

export const useAuthStore = create((set, get) => ({
    accessToken: "",
    refreshToken: "",
    isLoggedIn: () => !!get().accessToken,
    setTokens: (tokens) => {
        setTokensToLocalStorage(tokens);
        set((state) => ({
            ...state,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
        }));
    },
    removeTokens: () => {
        removeTokensFromLocalStorage();
        set((state) => ({
            ...state,
            accessToken: null,
            refreshToken: null,
        }));
    },
}));