import Link from "@/components/Link"
import classNames from "classnames"
import Head from "next/head.js"
import { useRouter } from "next/router.js"

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
    <main className="flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex p-4 justify-between items-center border-b">
        <nav>
        </nav>
      </header>
      <section>{children}</section>
    </main>
  )
}

export default Page
