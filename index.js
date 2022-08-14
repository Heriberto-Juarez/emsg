function getData(e) {
    if (e && e.response && e.response.data) {
        return e?.response?.data
    } else {
        return
    }
}
function getErrors(e) {
    const data = getData(e)
    if (data && data.errors) {
        return data
    } else {
        return []
    }
}

function getMsg(e) {
    const data = getData(e)
    const errors = getErrors(e)
    if (errors.length > 0) {
        return errors[0].message
    } else if (data.message) {
        return data.message
    } else {
        return e.message || 'There was an error we could not handle. Please try again.'
    }
}


export default {
    getData,
    getMsg,
    getErrors
}