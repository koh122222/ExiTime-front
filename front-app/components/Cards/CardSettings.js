import React, { useEffect, useState } from "react";
import {useApplicationsStore} from "../../stores/applicationsStore";
import {IconButton} from "@mui/material";
import Button from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { setApplicationCategory, setApplicationSynonim } from "services/services";

// components

export default function CardSettings(color="light") {

  const [applications] = useApplicationsStore((state) => [state.applications])

  useEffect(() => {
    const unsibscribe = useApplicationsStore.subscribe((state) => state)

    return () => {unsibscribe()}
  }, [])

  const [open, setOpen] = React.useState(false);
  const [synonim, setSynonim] = useState('')
  const [category, setCategory] = useState('')
  const [id, setId] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

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
                      {applications?.map(
                        (app) => (
                          <tr key={app.id}>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 w-6/12 text-xs whitespace-nowrap p-4 ">
                              {app?.name}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 w-6/12 text-xs whitespace-nowrap p-4 ">
                              {app?.synonym}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 w-6/12 text-xs whitespace-nowrap p-4 ">
                              {app?.category?.name}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 w-1/12 text-xs whitespace-nowrap p-4 text-right">
                            <IconButton onClick={() => {
                                            setId(app.id)
                                            handleClickOpen()
                                          }
                                        }>
                                          <ModeEditIcon />
                                      </IconButton>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
      </table>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            setApplicationSynonim(id, synonim)
            setApplicationCategory(id, category)
            handleClose();
          },
        }}
      >
        <DialogTitle>Изменить приложение</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="synonim"
            name="synonim"
            label="Синоним"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setSynonim(e.target.value)}
          />
          <TextField
            margin="dense"
            id="category"
            name="category"
            label="Категория"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={() => {
            setApplicationSynonim(id, synonim)
            setApplicationCategory(id, category)
            handleClose();
          }}>Сохранить</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
