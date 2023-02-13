import { TaBackTop, TaGroup } from '@/index'

export default function ExpBackTop() {
  return (
    <>
      <TaGroup title="基础用法">
        <ul className="exp-backTop-box">
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
        </ul>
      </TaGroup>
      <TaBackTop />
      <TaBackTop offset={[0, -50]}>UP</TaBackTop>
    </>
  )
}
