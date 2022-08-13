function getData(e) {
    return e?.response?.data
}
function getErrors(e) {
    return getData(e)?.errors || []
}

function getMsg(e) {
    const data = getData(e)
    const errors = getErrors(e)
    if (errors?.length > 0) {
        return errors[0].message
    } else if (data?.message) {
        return data.message
    } else {
        return e?.message || 'There was an error we could not handle. Please try again.'
    }
}


module.exports = {
    getData,
    getMsg,
    getErrors
}