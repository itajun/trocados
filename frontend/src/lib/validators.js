export const validate = (validationContext, state) => {
    const fields = validationContext.fields;
    const errors = {};
    const fieldNames = Object.keys(fields);
    fieldNames.forEach(fieldName => {
        const field = fields[fieldName];
        field.rules.forEach(rule => {
            const message = rule(field, state[fieldName], validationContext);
            if (message != null) {
                errors[fieldName] = message;
            }
        })
    })
    return errors;
}

export const required = (field, value, validationContext) => {
    return value != null && value.trim().length > 0 ? null :
        field.message == null ? "Field is required" : field.message;
}