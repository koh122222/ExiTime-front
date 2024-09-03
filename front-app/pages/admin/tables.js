import React, {useEffect, useState} from "react";

// components

import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";
import {getUserSessions} from "../../services/services";
import {useSessionsStore} from "../../stores/sessionsStore";
import {useFiltersStore} from "../../stores/filtersStore";

export default function Tables() {

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
      {!isLoading ? <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable/>
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark"/>
        </div>
      </div> : "loading..."}
    </>
  );
}

Tables.layout = Admin;
