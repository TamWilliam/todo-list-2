import Link from "@/components/Link"
import classNames from "classnames"
import { useRouter } from "next/router.js"
import Tabs from "@/components/Tabs.jsx"

const NavLink = (props) => {
  const { asPath } = useRouter()

  return (
    <Link
      {...props}
      className={classNames("text-lg font-semibold", {
        underline: asPath === props.href,
      })}
    />
  )
}

const Page = (props) => {
  const { title = "Todo List", children } = props

  return (
    
  )
}

export default Page