const dobValidator = (dob) => {
    try {

        const array = dob.split('/')

        let month = true;
        let day = true;
        let year = true;

        if (parseInt(array[0]) > 12 || parseInt(array[0]) < 1 || isNaN(parseInt(array[0]))) {
            month = false
        }
        if (parseInt(array[1]) > 31 || parseInt(array[1]) < 1 || isNaN(parseInt(array[1]))) {
            day = false
        }
        if (parseInt(array[2]) > 2024 || parseInt(array[2]) < 1900 || isNaN(parseInt(array[2]))) {
            year = false
        }
        console.log(month, day, year)
        return day && month && year
    } catch (err) {
        return false;
    }
}

export default dobValidator;
