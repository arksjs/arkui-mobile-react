import classNames from 'classnames'
import type { PriceProps } from './types'
import type { FC } from '../helpers'
import { getPrice } from './util'

const TaPrice: FC<PriceProps> = ({
  price = 0,
  thousands = false,
  decimalDigits = 2,
  ...props
}) => {
  const classes = classNames('ta-price', props.className)

  const priceStr = getPrice({
    decimalDigits,
    thousands,
    price
  })

  return (
    <div className={classes}>
      {props.children}
      {props.symbol ? (
        <span className="ta-price_symbol">{props.symbol}</span>
      ) : (
        <></>
      )}
      <span className="ta-price_integer">{priceStr.split('.')[0]}</span>
      {decimalDigits && decimalDigits > 0 ? (
        <span className="ta-price_decimal">.{priceStr.split('.')[1]}</span>
      ) : (
        <></>
      )}
    </div>
  )
}

export default TaPrice
