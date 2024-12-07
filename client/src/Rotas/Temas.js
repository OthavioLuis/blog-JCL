import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../Header";

const Temas = () => {
    const [lista, setLista] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
            setLista(response.data);
        })
    }, [])

    return(
        <div>
            <Header />
            <h1>Temas Disponíveis</h1>
            <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
                {lista.map((value) => (
                    <div
                        key={value.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "8px",
                            width: "250px",
                        }}
                    >

                        <div>
                            <img
                                src={value.imagem}
                                alt={value.titulo}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                        </div>
                        <div>
                            <p>{value.texto}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Temas;