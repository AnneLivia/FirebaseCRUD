const validation = (schema) => (req, res, next) => {
    
    const {error} = schema.validate(req.body, {abortEarly: false});
    if (error) {
        return res.status(400).json(
        {
            message: "Os dados informados são invalidos", 
            errors: error.details.map(({ message }) => message)
        });
    }
    // can continue
    next();
}

export default validation;