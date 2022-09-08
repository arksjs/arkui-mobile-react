import { AkIndexView, AkCell, AkGroup, IndexViewOnChange } from '@/index'

const offsetTop = 52
const indexList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function ExpIndexView() {
  const onChange: IndexViewOnChange = res => {
    console.log('change', res)
  }

  const renderItems = () =>
    indexList.map(item => (
      <AkIndexView.Item name={item} key={item}>
        <AkCell label="单元格" />
        <AkCell label="单元格" />
        <AkCell label="单元格" />
        <AkCell label="单元格" />
        <AkCell label="单元格" />
      </AkIndexView.Item>
    ))

  return (
    <>
      <AkGroup title="基础用法">
        <AkIndexView stickyOffsetTop={offsetTop} onChange={onChange}>
          {renderItems()}
        </AkIndexView>
      </AkGroup>
    </>
  )
}
