import React, { useState, useEffect } from "react";
// import './CriarTema.css'
import Axios from "axios";
import Card from './Cards/Card';

const CriarTema = () => {
    const [values, setValues] = useState()
    const [lista, setLista] = useState()

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            titulo: values.titulo,
            texto: values.texto,
            imagem: values.imagem,
        }).then(() => {
            setLista([
                ...lista,
                {
                    titulo: values.titulo,
                    texto: values.texto,
                    imagem: values.imagem,
                }
            ])
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
            setLista(response.data)
        })
    }, [])

    return (
        <div style={{ padding: '20px' }}>
            <div>
                <h2>Criar Tema</h2>
                <input
                    type="text"
                    placeholder="Titulo"
                    name="titulo"
                    onChange={handleChangeValues}
                    style={{ display: 'block', marginBottom: '10px' }}
                />
                <textarea
                    placeholder="Texto"
                    name="texto"
                    onChange={handleChangeValues}
                    style={{ display: 'block', marginBottom: '10px' }}
                />
                <input
                    type="file"
                    name="imagem"
                    onChange={handleChangeValues}
                    style={{ display: 'block', marginBottom: '10px' }}
                />
                <button onClick={() => handleClickButton()}>Criar Tema</button>
            </div>
            {typeof lista !== "undefined" && lista.map((value) => {
                return (
                    <Card
                        key={value.id}

                        lista={lista} 
                        setLista={setLista}

                        id={value.id}
                        capa={value.imagem}
                        titulo={value.titulo}
                        texto={value.texto}
                    />
                )
            })}
        </div>
    )
}

export default CriarTema;