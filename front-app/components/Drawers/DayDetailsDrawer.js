import { Drawer } from "@mui/material"

const DayDetailsDrawer = ({open, onClose, session, formatSeconds}) => {

    return (
        <>
            <Drawer
                anchor="right"
                open={open}
                onClose={onClose}
            >
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                        <th
                                  className={
                                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                          "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                  }
                              >
                                  Категория
                              </th>
                              <td
                                  className={
                                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                          "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                  }
                              >
                                  Время
                              </td>
                        </tr>
                    </thead>
                    <tbody>
                    {session["categories_length"]?.map(category => 
                        <tr key={category.category}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal-wrap p-4 max-w-120-px text-left">
                                <span
                                    className={
                                        "font-bold " +
                                        "text-blueGray-600"
                                    }
                                >
                                  {category?.category ? category?.category : "Не указано"}
                                </span>
                            </th>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal-wrap p-4 max-w-120-px text-left">
                                <span
                                    className={
                                        "font-bold " +
                                        "text-blueGray-600"
                                    }
                                >
                                  {formatSeconds(category?.length)}
                                </span>
                            </th>
                        </tr>
                    )}
                    </tbody>
                </table>
            </Drawer>
        </>
    )
}

export default DayDetailsDrawer