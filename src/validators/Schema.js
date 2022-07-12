import joiImported from 'joi';
import joiDate from '@joi/date'

const Joi = joiImported.extend(joiDate);

const SchemaUser = Joi.object({
    name: Joi.string().required().min(2).max(50).trim(),
    gender: Joi.string().valid('Female', 'Male').required(),
    birthDate: Joi.date().required().format('MM/DD/YYYY')
});

const SchemaNote = Joi.object({
    note: Joi.string().max(200).required(),
    userId: Joi.string().required(),
});

export { SchemaUser, SchemaNote };