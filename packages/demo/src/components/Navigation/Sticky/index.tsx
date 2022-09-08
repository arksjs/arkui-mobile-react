import { AkStickyView, AkGroup, StickyViewOnChange } from '@/index'

export default function ExpSticky() {
  const onChange: StickyViewOnChange = res => {
    console.log('change', res)
  }

  return (
    <>
      <AkGroup title="Sticky View">
        <AkStickyView className="exp-sticky-box" onChange={onChange}>
          <AkStickyView.Item name="Sticky 1">
            <div className="exp-sticky-box-1"></div>
          </AkStickyView.Item>
          <AkStickyView.Item name="Sticky 2">
            <div className="exp-sticky-box-2"></div>
          </AkStickyView.Item>
          <AkStickyView.Item name="Sticky 3">
            <div className="exp-sticky-box-3"></div>
          </AkStickyView.Item>
          <AkStickyView.Item name="Sticky 4">
            <div className="exp-sticky-box-4"></div>
          </AkStickyView.Item>
        </AkStickyView>
      </AkGroup>
    </>
  )
}
