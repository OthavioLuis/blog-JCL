import React from "react";
import "./Card.css";
import FormDialog from "../dialog/dialog";

export default function Card(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true)
    }

    return (
        <>
            <FormDialog
                open={open}
                setOpen={setOpen}
                id={props.id}
                capa={props.imagem}
                titulo={props.titulo}
                texto={props.texto}
                lista={props.lista}
                setLista={props.setLista}
            />
            <div className="card" onClick={() => handleClickCard()}>
                <div className="card-imagem">
                    <img src={props.imagem} alt="" />
                </div>
                <div className="card-filho">
                    <h2 className="card-titulo">{props.titulo}</h2>
                    <p className="card-texto">{props.texto}</p>
                </div>
            </div>
        </>
    )
}
