import React, {useState} from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { DateRangePicker } from "mui-daterange-picker";
import {useFiltersStore} from "../../stores/filtersStore";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import {IconButton} from "@mui/material";

export default function Navbar() {

  const {setMonths} = useFiltersStore.getState()

  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prev) => !prev)

  const onDateRangeChange = (values) => {
      setMonths(values.startDate, values.endDate)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <p
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
          >
            Фильтры: 
          </p>
          <IconButton onClick={toggle}>
            <EditCalendarIcon/>
          </IconButton>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Введите запрос..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      <div className={"absolute z-10"}>
        <DateRangePicker open={open} toggle={toggle} onChange={(range) => onDateRangeChange(range)}/>
      </div>
      {/* End Navbar */}
    </>
  );
}
