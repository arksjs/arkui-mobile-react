import { AkCell, AkTimeAgo, AkGroup } from '@/index'
import dayjs from 'dayjs'

const time = new Date()
const time2 = dayjs('2021-05-01', 'YYYY-MM-DD').toDate()

export default function ExpTimeAgo() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="当前">
          <AkTimeAgo time={time} />
        </AkCell>
        <AkCell label="2021-05-01">
          <AkTimeAgo time={time2} />
        </AkCell>
      </AkGroup>
      <AkGroup title="间隔">
        <AkCell label="interval=2">
          <AkTimeAgo time={time} interval={2} />
        </AkCell>
      </AkGroup>
    </>
  )
}
