export const selectText = event => {
    event.target.setSelectionRange(0, event.target.value.length)
}

export const findErrorMessage = error => {
    let response = error.response;

    if (response == null) {
        return error.message;
    }

    if (typeof response === "string") {
        return response;
    }

    let data = response.data;

    if (typeof data === "string") {
        return data;
    }

    let cause = data.cause;

    if (cause == null) {
        return data.message;
    } else {
        return cause.message;
    }
}