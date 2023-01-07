import { useContext } from "@/components/ContextProvider.jsx"
import Page from "@/components/Page.jsx"
import TodoForm from "@/components/TodoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      todoId: Number.parseInt(params.todoId, 10),
    },
  },
})

const TodoEditPage = (props) => {
  const {
    params: { todoId },
  } = props
  const { updateTodo, todos } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      updateTodo(values)
      router.push("/")
    },
    [router, updateTodo]
  )

  return (
    <Page>
      <TodoForm
        onSubmit={handleSubmit}
        initialValues={todos.find(({ id }) => id === todoId)}
      />
    </Page>
  )
}

export default TodoEditPage
