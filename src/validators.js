import * as yup from "yup"

export const todonameValidator = yup
  .string()
  .matches(
    /^[a-z][a-z0-9_]{1,}$/,
    "Your todoname must start with a lower case letter and contain only digits or letters or `_`"
  )
  .label("Todoname")
