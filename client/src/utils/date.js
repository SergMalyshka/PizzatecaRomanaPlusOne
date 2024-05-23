export const getDateNow = () => {
    const date = new Date()
    let month

    if (date.getMonth() + 1 < 10) {
        month = `0${date.getMonth() + 1}`
    } else {
        month = date.getMonth() + 1
    }

    const formattedDate = `${month}/${date.getDate()}/${date.getFullYear()}`
    return formattedDate
}

