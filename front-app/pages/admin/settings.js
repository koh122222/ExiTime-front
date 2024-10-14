import React, { useEffect, useState } from "react";
import {useApplicationsStore} from "../../stores/applicationsStore";

// components

import CardSettings from "components/Cards/CardSettings.js";

// layout for page

import Admin from "layouts/Admin.js";
import { getApplications } from "services/services";

export default function Settings() {

  const [applications, setApplications] = useApplicationsStore((state) => [state.applications, state.setApplications])

    useEffect(() => {
        const unsibscribe = useApplicationsStore.subscribe((state) => {
            console.info(state)
        })

        return () => {unsibscribe()}
    }, [])

    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getApplications()
    .then((response) => {
      setApplications(response.data.applications)
      console.info(response)
      
    })
    .then(() => {console.info(applications)})
    .finally(() => {setIsLoading(false)})
  }, [])

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          {isLoading 
          ? "loading"
          : <CardSettings/>
          }
          
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;
