import { DatePicker, NavBar } from "antd-mobile"
import { useState } from "react"
import "./month.scss"

const Month = () => {
  const [dateVisible, setDataVisible] = useState(false)
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backIcon={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDataVisible(true)}>
            <span className="text">2023 | 3月账单</span>
            <span className="arrow expand"></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={false}
            onCancel={() => setDataVisible(false)}
            onConfirm={() => setDataVisible(false)}
            onClose={() => setDataVisible(false)}
            max={new Date()}
          />
        </div>
      </div>
    </div>
  )
}

export default Month
