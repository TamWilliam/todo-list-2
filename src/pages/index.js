import Button from "@/components/Button.jsx"
import { useContext } from "@/components/ContextProvider.jsx"
import Link from "@/components/Link.jsx"
import Page from "@/components/Page.jsx"
import { TrashIcon, PlusIcon, PencilSquareIcon, checkIcon } from "@heroicons/react/24/solid"
import { useCallback } from "react"

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
      <table className="w-full mt-8">
        <thead>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="border px-4 py-2">
                <input id="checkbox" type="checkbox" value="" class="w-6 h-6" />
                {todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  )
}

export default IndexPage
