import { getBillList } from "@/store/modules/billStore"
import { TabBar } from "antd-mobile"
import {
  AddCircleOutline,
  BillOutline,
  CalculatorOutline,
} from "antd-mobile-icons"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router"
import { useNavigate } from "react-router-dom"
import "./index.scss"

const tabs = [
  {
    key: "/month",
    title: "阅读账单",
    icon: <BillOutline />,
  },
  {
    key: "/new",
    title: "记账",
    icon: <AddCircleOutline />,
  },
  {
    key: "/year",
    title: "年度账单",
    icon: <CalculatorOutline />,
  },
]

const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch])

  const navigate = useNavigate()
  const switchRoute = (path) => {
    console.log(path)
    navigate(path)
  }
  return (
    <div className="layout">
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
        <TabBar onChange={switchRoute}>
          {tabs.map((item) => (
            <TabBar key={item.key} icon={item.icon} title={item.title}></TabBar>
          ))}
        </TabBar>
      </div>
    </div>
  )
}
export default Layout
