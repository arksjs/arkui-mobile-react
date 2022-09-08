import { AkBackTop, AkGroup } from '@/index'

export default function ExpBackTop() {
  return (
    <>
      <AkGroup title="基础用法">
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
      </AkGroup>
      <AkBackTop />
      <AkBackTop offset={[0, -50]}>UP</AkBackTop>
    </>
  )
}
