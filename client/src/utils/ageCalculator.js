const ageCalculator = (dob) => {
    const dateOfBirth = new Date(dob)
    const monthDiff = Date.now() - dateOfBirth.getTime()
    const ageDt = new Date(monthDiff)
    const year = ageDt.getUTCFullYear()
    const age = Math.abs(year - 1970)
    return age
}

export default ageCalculator;
