import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({ listBooks }) => {

    const { imagen, nombre, precio, autor } = listBooks

    return (
        <div className="cardDetail">
            <img className="cardDetail-img" src={imagen} alt={nombre} />
            <div className="cardDetail-books">
                <div className="cardDetail-book">
                    <div className="cardDetail-name">
                        <h2>{nombre}</h2>
                        {/*<i className="bi bi-box-arrow-left btn"></i>*/}
                    </div>
                    <p>{autor}</p>
                    <h5>${precio}</h5>
                </div>
                <div className="cardDetail-btn">
                    <ItemCount center />
                </div>
            </div>
        </div>
    )
}