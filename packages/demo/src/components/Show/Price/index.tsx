import { TaPrice, TaCell, TaGroup } from '@/index'

export default function ExpPrice() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="默认">
          <TaPrice price="1234.56" />
        </TaCell>
        <TaCell label="设置符号">
          <TaPrice price="1234.56" symbol="￥" />
        </TaCell>
        <TaCell label="千分位">
          <TaPrice price="1234.56" thousands />
        </TaCell>
        <TaCell label="保留3位小数">
          <TaPrice price="1234.56" decimalDigits={3} />
        </TaCell>
      </TaGroup>
      <TaGroup title="设置样式">
        <TaCell label="自定义颜色">
          <TaPrice
            className="exp-price-custom-color"
            price="1234.56"
            symbol="￥"
            thousands
          />
        </TaCell>
        <TaCell label="自定义大小">
          <TaPrice
            className="exp-price-custom-size"
            price="1234.56"
            symbol="￥"
            thousands
          />
        </TaCell>
      </TaGroup>
    </>
  )
}
