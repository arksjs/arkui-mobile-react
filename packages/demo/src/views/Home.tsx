import { AkGroup, AkCell } from '@/index'
import { useNavigate } from 'react-router-dom'
import { navConfig } from './data'
import Logo from '../assets/logo.svg?jsx'

interface NavItem {
  name: string
  zhName: string
}

export default function ExpHome() {
  const navigate = useNavigate()

  function onItemClick({ name }: NavItem) {
    navigate(`/${name}`)
  }

  function renderList(group: { list: NavItem[] }) {
    return group.list.map(item => {
      return (
        <AkCell
          clickable
          label={item.name + ' ' + item.zhName}
          key={item.name}
          onClick={() => onItemClick(item)}
        ></AkCell>
      )
    })
  }

  function renderGroupList() {
    return navConfig.map(group => {
      return (
        <AkGroup title={group.name + ' ' + group.zhName} key={group.name}>
          {renderList(group)}
        </AkGroup>
      )
    })
  }

  return (
    <div className="exp-home">
      <div className="exp-home-header">
        <Logo className="exp-home-logo" />
        <h1 className="exp-home-title">ArkUI</h1>
      </div>
      <div className="exp-home-body">{renderGroupList()}</div>
    </div>
  )
}
