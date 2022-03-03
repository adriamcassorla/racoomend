import Nav from "./Nav";
import styles from "./../styles/Home.module.css"

type LayoutProps = {
  children: any
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default Layout;