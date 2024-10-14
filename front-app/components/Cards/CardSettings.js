import React from "react";

// components

export default function CardSettings(color="light", apps) {
  return (
    <>
    <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
      <table className="items-center z-100 w-full bg-transparent border-collapse">
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
                        Приложение
                      </th>
                      <th
                          className={
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                              (color === "light"
                                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                  : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                          }
                      >
                        Синоним
                      </th>
                      <th
                          className={
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                              (color === "light"
                                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                  : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                          }
                      >
                        Категория
                      </th>
                      <th
                          className={
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                              (color === "light"
                                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                  : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                          }
                      >
                        
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
                      {apps?.map(
                        (app) => (
                          <tr>
                            <td>
                              {app?.name}
                            </td>
                            <td>
                              {app?.synonym}
                            </td>
                            <td>
                              {app?.category?.name}
                            </td>
                          </tr>
                        )
                      )}
                      
                    </tbody>
      </table>
      </div>
    </>
  );
}
