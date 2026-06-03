import { Joi, Segments } from "celebrate";
import { isValidObjectId } from "mongoose";

export const getNoteSchema = {
  [Segments.QUERY]:
    Joi.object({
      page:
        Joi.number().integer().min(1).default(1),
      perPage:
        Joi.number().integer().min(5).max(15).default(10),
      tag:
        Joi.string().valid('Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'),
      search:
      Joi.string().trim().allow('')
    }),
};

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const updateNoteSchema = {
  [Segments.PARAMS]:
    Joi.object({
      noteId:
        Joi.string().custom(objectIdValidator).required(),
    }),
  [Segments.BODY]:
    Joi.object({
      title:
        Joi.string().min(1),
      content:
        Joi.string().valid(''),
      tag:
        Joi.string().valid('Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'),
    }).min(1),
};

export const noteIdSchema = {
  [Segments.PARAMS]:
    Joi.object({
      noteId:
        Joi.string().custom(objectIdValidator).required(),
    }),
};

export const getAllNotesSchema = {
  [Segments.BODY]:
    Joi.object({
      title:
        Joi.string().min(1).required(),
      content:
        Joi.string().valid(''),
      tag:
        Joi.string().valid('Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo')
    }),
};
