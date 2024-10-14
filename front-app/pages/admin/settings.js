import React, { useEffect, useState } from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";

// layout for page

import Admin from "layouts/Admin.js";
import { getApplications } from "services/services";

export default function Settings() {

  const [applications, setApplications] = useState([])

  useEffect(() => {
    getApplications()
    .then((data) => {
      setApplications(data?.data?.applications)
      console.info(data)
      console.info(applications)
    })
  }, [])

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          {applications 
          ? "loading"
          : <CardSettings apps={applications}/>
          }
          
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;
