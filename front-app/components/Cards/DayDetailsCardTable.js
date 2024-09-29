import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

// components

import {useSessionsStore} from "../../stores/sessionsStore";
import {Accordion, AccordionDetails, AccordionSummary, Grid2, IconButton, Typography} from "@mui/material";
import {ArrowDropDown} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import DayDetailsDrawer from "components/Drawers/DayDetailsDrawer";
export default function DayDetailsCardTable({ color }) {

  const [sessions] = useSessionsStore((state) => [state.sessions])

  useEffect(() => {
    const unsibscribe = useSessionsStore.subscribe((state) => state)

    return () => {unsibscribe()}
  }, [])

  const calculatePercent = (total, part) => {
    return !isNaN(part/total) ? (part / total) * 100 : 0
  }

  const formatSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
  }

  const [open, setOpen] = useState(false)
  const [detailsSession, setdetailsSession] = useState({})

  return (
      <>
        <div
            className={
                "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
            }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                    className={
                        "font-semibold text-lg " +
                        (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                >
                  Card Tables
                </h3>
              </div>
            </div>
          </div>
          {sessions.departments.map(department =>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDown />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                  <Typography variant={'h6'}>{department.department}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {department["small_users_info"].map(user =>
                      <Accordion
                          TransitionProps={{
                          timeout: 5
                      }}
                      >
                        <AccordionSummary
                            expandIcon={<ArrowDropDown />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                          <Typography variant={'body1'}>{`${user.surname} ${user.name} ${user.patronymic}`}</Typography>
                        </AccordionSummary>
                      <AccordionDetails>
                        <Grid2 container direction={'row'} spacing={2} className={"p-4 px-6"}>
                          <Grid2 display="flex" justifyContent="left" alignItems="center" size={1.5}>
                          <span
                              className={
                                  "ml-3 font-semibold " +
                                  +(color === "light" ? "text-blueGray-600" : "text-white")
                              }
                          >
                            {`${user.surname} ${user.name} ${user.patronymic}`}
                          </span>
                          </Grid2>
                          <Grid2 size={6}>
                          <span
                              className={
                                  "ml-3 font-semibold " +
                                  +(color === "light" ? "text-blueGray-600" : "text-white")
                              }
                          >
                            {formatSeconds(user["total_idle"] + user["total_length"])}
                          </span>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blueGray-200">
                                <div style={{width: `${calculatePercent(Number(user["total_length"]) + Number(user["total_idle"]), Number(user["total_idle"]))}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                <div style={{width: `${calculatePercent(Number(user["total_length"]) + Number(user["total_idle"]), Number(user["total_length"]))}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
                              </div>
                            </div>
                          </Grid2>
                          <Grid2 display="flex" justifyContent="center" alignItems="center" size={2}>
                          <span
                              className={
                                  "ml-3 font-semibold " +
                                  +(color === "light" ? "text-blueGray-600" : "text-white")
                              }
                          >
                            ОТВЛЕЧЕНИЯ: {formatSeconds(user["total_idle"])}
                          </span>
                          </Grid2>
                          <Grid2 display="flex" justifyContent="center" alignItems="center" size={2}>
                          <span
                              className={
                                  "ml-3 font-semibold " +
                                  +(color === "light" ? "text-blueGray-600" : "text-white")
                              }
                          >
                            ПРОДУКТИВНОЕ: {formatSeconds(user["total_length"])}
                          </span>
                          </Grid2>
                        </Grid2>
                        <table className="items-center w-full bg-transparent border-collapse">
                          <thead>
                          <tr>
                              <th
                                  className={
                                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                      (color === "light"
                                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                  }
                              >
                                  СЕССИЯ
                              </th>
                              <th
                                  className={
                                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                      (color === "light"
                                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                  }
                              >
                                  ОТРАБОТАНО
                              </th>
                              <th
                                  className={
                                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                      (color === "light"
                                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                  }
                              >
                                  Начало сессии
                              </th>
                              <th
                                  className={
                                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                      (color === "light"
                                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                  }
                              >
                                  Конец сессии
                              </th>
                              <th
                                  className={
                                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                      (color === "light"
                                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                  }
                              ></th>
                          </tr>
                          </thead>
                          <tbody>
                          {user["sessions"]?.map(session =>
                              <tr key={session.id}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal-wrap p-4 max-w-120-px text-left">
                                        <span
                                            className={
                                                "font-bold " +
                                                +(color === "light" ? "text-blueGray-600" : "text-white")
                                            }
                                        >
                                          {session.id}
                                        </span>
                                </th>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 w-6/12 text-xs whitespace-nowrap p-4 ">
                            <span
                                className={
                                    "ml-3 font-bold " +
                                    +(color === "light" ? "text-blueGray-600" : "text-white")
                                }
                            >
                                    {formatSeconds(session["idle_length"] + session["length"])}
                              </span>
                                      <div className="relative pt-1">
                                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blueGray-200">
                                              <div style={{width: `${calculatePercent(Number(session["length"]) + Number(session["idle_length"]), Number(session["idle_length"]))}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                              <div style={{width: `${calculatePercent(Number(session["length"]) + Number(session["idle_length"]), Number(session["length"]))}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
                                          </div>
                                      </div>
                                  </td>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 w-1/12 text-xs whitespace-nowrap p-4">
                            <span
                                className={
                                    "ml-3 font-bold " +
                                    +(color === "light" ? "text-blueGray-600" : "text-white")
                                }
                            >
                                    {/* {formatSeconds(session["idle_length"])} */}
                                    {new Date(session.start).toLocaleString()}
                                  </span>
                                  </td>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs w-1/12 whitespace-nowrap p-4">
                            <span
                                className={
                                    "ml-3 font-bold " +
                                    +(color === "light" ? "text-blueGray-600" : "text-white")
                                }
                            >
                                    {/* {formatSeconds(session["length"])} */}
                                    {new Date(session.start).toLocaleString()}
                                  </span>
                                  </td>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 w-1/12 text-xs whitespace-nowrap p-4 text-right">
                                      <IconButton onClick={() => {
                                            setOpen(true)
                                            setdetailsSession(session)
                                          }
                                        }>
                                          <SearchIcon />
                                      </IconButton>
                                      
                                  </td>
                              </tr>
                          )}
                          </tbody>
                        </table>
                      </AccordionDetails>
                      </Accordion>
                    )}
                </AccordionDetails>
              </Accordion>
          )}
        </div>
        <DayDetailsDrawer
          open={open}
          session={detailsSession}
          onClose={() => setOpen(false)}
          formatSeconds={formatSeconds}
        />
      </>
  );
}

DayDetailsCardTable.defaultProps = {
  color: "light",
};

DayDetailsCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
