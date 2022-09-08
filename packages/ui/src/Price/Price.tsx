import classNames from 'classnames'
import type { PriceProps } from './types'
import type { FC } from '../helpers/types'
import { getPrice } from './util'

const AkPrice: FC<PriceProps> = ({
  price = 0,
  thousands = false,
  decimalDigits = 2,
  ...props
}) => {
  const classes = classNames('ak-price', props.className)

  const priceStr = getPrice({
    decimalDigits,
    thousands,
    price
  })

  return (
    <div className={classes}>
      {props.children}
      {props.symbol ? (
        <span className="ak-price_symbol">{props.symbol}</span>
      ) : (
        <></>
      )}
      <span className="ak-price_integer">{priceStr.split('.')[0]}</span>
      {decimalDigits && decimalDigits > 0 ? (
        <span className="ak-price_decimal">.{priceStr.split('.')[1]}</span>
      ) : (
        <></>
      )}
    </div>
  )
}

export default AkPrice
