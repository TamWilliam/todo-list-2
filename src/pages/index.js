import { useContext } from "@/components/ContextProvider.jsx"
import Page from "@/components/Page.jsx"
import { TrashIcon, PlusIcon, PencilSquareIcon, checkIcon } from "@heroicons/react/24/solid"
import { useCallback } from "react"
import Checkbox from "@/components/Checkbox.jsx"

const IndexPage = () => {
  const { todos, deleteTodo } = useContext()
  const handleClickDelete = useCallback(
    (event) => {
      const todoId = Number.parseInt(
        event.currentTarget.getAttribute("data-todo-id"),
        10
      )

      deleteTodo(todoId)
    },
    [deleteTodo]
  )

  return (
    <Page title="Todo List">
      <PlusIcon class="w-6 space-x-1 " />
      <PencilSquareIcon class="w-6 space-x-1 " />
      <TrashIcon class="w-6 space-x-1 " />
      <table className="w-full mt-8">
        <thead>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="border px-4 py-2">
                <Checkbox />
                {todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  )
}

export default IndexPage
