import Button from "@/components/Button.jsx"
import FormField from "@/components/FormField.jsx"
import { todonameValidator } from "@/validators.js"
import classNames from "classnames"
import { Form, Formik } from "formik"
import * as yup from "yup"

const defaultValidationSchema = yup.object().shape({
  todoname: todonameValidator.required()
})

const defaultInitialValues = {
  todoname: ""
}

const TodoForm = (props) => {
  const {
    className,
    onSubmit,
    initialValues = defaultInitialValues,
    validationSchema = defaultValidationSchema,
  } = props

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className={classNames("flex flex-col gap-4 p-4", className)}>
        <FormField name="todoname" label="Todoname" />
        <Button type="submit" className="mt-8">
          SAVE
        </Button>
      </Form>
    </Formik>
  )
}

export default TodoForm
