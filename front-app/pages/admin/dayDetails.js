import React, {useEffect, useState} from "react";

// components

import DayDetailsCardTable from "components/Cards/DayDetailsCardTable.js";

// layout for page

import Admin from "layouts/Admin.js";
import {useSessionsStore} from "../../stores/sessionsStore";
import {useFiltersStore} from "../../stores/filtersStore";
import {getUserSessions} from "../../services/services";

export default function DayDetails() {

    const [sessions, setSessions] = useSessionsStore((state) => [state.sessions, state.setSessions])

    useEffect(() => {
        const unsibscribe = useSessionsStore.subscribe((state) => {
            console.info(state)
        })

        return () => {unsibscribe()}
    }, [])

    const [startDay, endDay] = useFiltersStore((state) => [state.startDay, state.endDay])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsibscribe = useFiltersStore.subscribe((state) => {
            console.info(state)
        })

        return () => {unsibscribe()}
    }, [])

  useEffect(() => {
    if(!sessions) {
      setIsLoading((prev) => !prev)
      getUserSessions(startDay, endDay)
          .then((response) => {
            setSessions(response.data)
            setIsLoading(prevState => !prevState)
          })
    }
  },[])

  useEffect(() => {
    setIsLoading((prev) => !prev)
    getUserSessions(startDay, endDay)
        .then((response) => {
          setSessions(response.data)
          setIsLoading(prevState => !prevState)
        })
  },[startDay, endDay])

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <DayDetailsCardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <DayDetailsCardTable color="dark" />
        </div>
      </div>
    </>
  );
}

DayDetails.layout = Admin;
