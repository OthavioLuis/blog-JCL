import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {

    const [editValues, setEditValues] = useState({
        id: props.id,
        titulo: props.titulo,
        texto: props.texto,
        imagem: props.imagem,
    });

    const handleEditTema = () => {
        Axios.put("http://localhost:3001/edit", {
            id: editValues.id,
            titulo: editValues.titulo,
            texto: editValues.texto,
            imagem: editValues.imagem,
        }).then(() => {
            props.setLista(
                props.lista.map((value) => {
                    return value.id === editValues.id
                        ? {
                            id: editValues.id,
                            titulo: editValues.titulo,
                            texto: editValues.texto,
                            imagem: editValues.imagem,
                        }
                        : value;
                })
            );
        });
        handleClose();
    };

    const handleDeleteTema = () => {
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`)
        handleClose()
        document.location.reload()
    };

    // const handleClickOpen = () => {
    //     props.setOpen(true)
    // }

    const handleClose = () => {
        props.setOpen(false)
    }

    const handleChangeValues = (values) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.id]: values.target.value,
        }));
    };

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Editar</DialogTitle>
                <DialogContent>
                    <TextField
                        disabled
                        margin="dense"
                        id="id"
                        label="id"
                        defaultValue={props.id}
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="titulo"
                        label="Titulo do Tema"
                        defaultValue={props.titulo}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="texto"
                        label="Texto"
                        defaultValue={props.texto}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="imagem"
                        label="Imagem"
                        defaultValue={props.imagem}
                        type="image"
                        onChange={handleChangeValues}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={() => handleDeleteTema()}>
                        Excluir
                    </Button>
                    <Button color="primary" onClick={() => handleEditTema()}>
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}