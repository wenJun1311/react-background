import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <h1>一级路由组件</h1>
      <Link to="/main">toMain</Link>
      <Link to="/footer">toFooter</Link>
      {/* 二级路由出口 */}
      <Outlet />
    </div>
  )
}

export default Layout
