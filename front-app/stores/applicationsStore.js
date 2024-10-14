import {create} from "zustand";

export const useApplicationsStore = create((set, get) => ({
    applications: [],
    setApplications: (value) => {
        set((state) => ({
            ...state,
            applications: value,
        }))
    }
}))