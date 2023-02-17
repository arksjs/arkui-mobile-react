import { TaCell, TaTimeAgo, TaGroup } from '@/index'
import dayjs from 'dayjs'

const time = new Date()
const time2 = dayjs('2021-05-01', 'YYYY-MM-DD').toDate()

export default function ExpTimeAgo() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="当前">
          <TaTimeAgo time={time} />
        </TaCell>
        <TaCell label="2021-05-01">
          <TaTimeAgo time={time2} />
        </TaCell>
      </TaGroup>
      <TaGroup title="间隔">
        <TaCell label="interval=2">
          <TaTimeAgo time={time} interval={2} />
        </TaCell>
      </TaGroup>
    </>
  )
}
