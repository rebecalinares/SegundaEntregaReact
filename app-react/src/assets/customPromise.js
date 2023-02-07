export const customPromise = (books) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(books)
        }, 2000)
    })
}