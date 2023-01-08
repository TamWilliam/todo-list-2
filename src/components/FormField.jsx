import Input from "@/components/Input.jsx"
import classNames from "classnames"
import { useField } from "formik"

const FormField = (props) => {
  const {
    as = Input,
    name,
    label,
    placeholder,
    className,
    ...otherProps
  } = props
  const [field, { error, touched }] = useField({ name })
  const Component = otherProps.type === "color" ? ColorField : as

  return (
    <label className={classNames("flex flex-col gap-2", className)}>
      <span>{label}</span>
      <Component
        {...field}
        {...otherProps}
        placeholder={placeholder ?? label}
      />
      {error && touched ? (
        <span className="text-red-600 text-sm">{error}</span>
      ) : null}
    </label>
  )
}

export default FormField
