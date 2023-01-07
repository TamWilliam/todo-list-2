import { useContext } from "@/components/ContextProvider.jsx"
import Page from "@/components/Page.jsx"
import TodoForm from "@/components/TodoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const CreateTodoPage = () => {
  const { createTodo } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      createTodo(values)
      router.push("/")
    },
    [router, createTodo]
  )

  return (
    <Page>
      <TodoForm onSubmit={handleSubmit} />
    </Page>
  )
}

export default CreateTodoPage
