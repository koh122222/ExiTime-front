import React, {useEffect, useState} from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import {useSessionsStore} from "../stores/sessionsStore";
import {useFiltersStore} from "../stores/filtersStore";
import {getUserSessions} from "../services/services";

export default function Admin({ children }) {

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
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats sessions={sessions}/>
          {!isLoading ? <div className="px-4 md:px-10 mx-auto w-full -m-24">
              {children}
          </div> : "loading..."}
      </div>
    </>
  );
}
