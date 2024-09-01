import React, {useEffect, useState} from "react";

// components

import DayDetailsCardTable from "components/Cards/DayDetailsCardTable.js";

// layout for page

import Admin from "layouts/Admin.js";
import {useSessionsStore} from "../../stores/sessionsStore";
import {useFiltersStore} from "../../stores/filtersStore";
import {getUserSessions} from "../../services/services";

export default function DayDetails() {

  const {sessions, setSessions} = useSessionsStore.getState()
  const {startDate, endDate} = useFiltersStore.getState()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(!sessions) {
      setIsLoading((prev) => !prev)
      getUserSessions(startDate, endDate)
          .then((response) => {
            setSessions(response.data)
            setIsLoading(prevState => !prevState)
          })
    }
  },[])

  useEffect(() => {
    setIsLoading((prev) => !prev)
    getUserSessions(startDate, endDate)
        .then((response) => {
          setSessions(response.data)
          setIsLoading(prevState => !prevState)
        })
  },[startDate, endDate])

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
