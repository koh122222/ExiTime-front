import {create} from "zustand";

const date = new Date()
date.setHours(0,0,0,0)

export const useFiltersStore = create((set, get) => ({
    startDate: new Date(new Date().setMonth(date.getMonth() - 1, 0)).toISOString(),
    endDate: date.toISOString(),
    startDay: date.toISOString(),
    endDay: new Date(date.setHours(23,59,59)).toISOString(),
    setMonths: (startDate, endDate) => {
        set((state) => ({
            ...state,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString()
        }))
    },
    setDays: (date) => {
        set((state) => ({
            ...state,
            startDay: date.setHours(0, 0, 0).toISOString(),
            endDay: date.setHours(23, 59, 59).toISOString()
        }))
    },
}))