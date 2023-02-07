import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { books } from "../../assets/books"
import { ItemDetail } from "../ItemDetail/ItemDetail"



export const ItemDetailContainer = () => {

    const [listBooks, setBookList] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const info = new Promise((resolve) => {
        setTimeout(() => {
            resolve(books.find(book => book.id === parseInt(id)))
        }, 1000)
    }) 
    info.then((info) => {

        setBookList(info)
    })
    }, [id])

    return (
        <div>
            <ItemDetail listBooks={listBooks} />
        </div>
    )

}
