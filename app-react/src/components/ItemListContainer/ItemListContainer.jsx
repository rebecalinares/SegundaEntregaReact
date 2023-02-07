
import { useEffect, useState } from "react";
import { books } from "../../assets/books";
import { customPromise } from "../../assets/customPromise";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{

    const [listBooks, setListBooks] = useState ([])
    const [Loader, setLoader] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        customPromise(books)
            .then(res => {
                if (id){
                    setLoader(false)
                    setListBooks(res?.filter(el => el.categoria === id))
                } else {
                    setLoader(false)
                    setListBooks(res)
                }
            })
    }, [id])

    return(
        <div>
            <ItemList listBooks = {listBooks} />
        </div>
    )
}

export { ItemListContainer } 