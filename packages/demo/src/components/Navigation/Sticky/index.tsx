import { TaStickyView, TaGroup, StickyViewOnChange } from '@/index'

export default function ExpSticky() {
  const onChange: StickyViewOnChange = res => {
    console.log('change', res)
  }

  return (
    <>
      <TaGroup title="Sticky View">
        <TaStickyView className="exp-sticky-box" onChange={onChange}>
          <TaStickyView.Item name="Sticky 1">
            <div className="exp-sticky-box-1"></div>
          </TaStickyView.Item>
          <TaStickyView.Item name="Sticky 2">
            <div className="exp-sticky-box-2"></div>
          </TaStickyView.Item>
          <TaStickyView.Item name="Sticky 3">
            <div className="exp-sticky-box-3"></div>
          </TaStickyView.Item>
          <TaStickyView.Item name="Sticky 4">
            <div className="exp-sticky-box-4"></div>
          </TaStickyView.Item>
        </TaStickyView>
      </TaGroup>
    </>
  )
}
