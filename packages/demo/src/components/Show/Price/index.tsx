import { AkPrice, AkCell, AkGroup } from '@/index'

export default function ExpPrice() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="默认">
          <AkPrice price="1234.56" />
        </AkCell>
        <AkCell label="设置符号">
          <AkPrice price="1234.56" symbol="￥" />
        </AkCell>
        <AkCell label="千分位">
          <AkPrice price="1234.56" thousands />
        </AkCell>
        <AkCell label="保留3位小数">
          <AkPrice price="1234.56" decimalDigits={3} />
        </AkCell>
      </AkGroup>
      <AkGroup title="设置样式">
        <AkCell label="自定义颜色">
          <AkPrice
            className="exp-price-custom-color"
            price="1234.56"
            symbol="￥"
            thousands
          />
        </AkCell>
        <AkCell label="自定义大小">
          <AkPrice
            className="exp-price-custom-size"
            price="1234.56"
            symbol="￥"
            thousands
          />
        </AkCell>
      </AkGroup>
    </>
  )
}
