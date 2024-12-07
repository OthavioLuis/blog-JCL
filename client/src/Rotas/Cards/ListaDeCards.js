import React from "react";
import Card from "./Card";

const ListaDeCards = () => {
    return(
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <Card></Card>
        </div>
    )
}

export default ListaDeCards;