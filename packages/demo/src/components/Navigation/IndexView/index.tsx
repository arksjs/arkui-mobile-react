import { TaIndexView, TaCell, TaGroup, IndexViewOnChange } from '@/index'

const offsetTop = 52
const indexList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function ExpIndexView() {
  const onChange: IndexViewOnChange = res => {
    console.log('change', res)
  }

  const renderItems = () =>
    indexList.map(item => (
      <TaIndexView.Item name={item} key={item}>
        <TaCell label="单元格" />
        <TaCell label="单元格" />
        <TaCell label="单元格" />
        <TaCell label="单元格" />
        <TaCell label="单元格" />
      </TaIndexView.Item>
    ))

  return (
    <>
      <TaGroup title="基础用法">
        <TaIndexView stickyOffsetTop={offsetTop} onChange={onChange}>
          {renderItems()}
        </TaIndexView>
      </TaGroup>
    </>
  )
}
