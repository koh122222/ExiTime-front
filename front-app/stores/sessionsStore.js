import {create} from "zustand";

export const useSessionsStore = create((set, get) => ({
    sessions: {},
    setSessions: (value) => {
        set((state) => ({
            ...state,
            sessions: value,
        }))
    }
}))