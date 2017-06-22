const Joi = require('joi');

const exampleSchema = Joi.object().keys({
  a: Joi.string().required(),
  b: Joi.object().keys({ aa: Joi.string().required() }).required()
});

const contextSchema = Joi.object().keys({
  statusCode: Joi.number().required(),
}).required();

const errorSchema = Joi.object().keys({
  sterror: Joi.object().keys({
    errorno: Joi.number().required(),
  }).required(),
}).required();

Joi.validate({ a: 'a string' }, exampleSchema, (error, value) => {
    console.log('Error:', error);
    console.log('Valid:', value);
});

Joi.validate(undefined, contextSchema, (error, value) => {
    console.log('Error:', error);
    console.log('Valid:', value);
});

Joi.validate({
  statusCode: 201,
}, contextSchema, (error, value) => {
    console.log('Error:', error);
    console.log('Valid:', value);
});

Joi.validate({
  error: ''
}, errorSchema, (error, value) => {
  console.log('Error:', error);
  console.log('Valid:', value);
});
