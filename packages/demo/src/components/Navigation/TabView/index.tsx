import {
  AkTabView,
  AkScrollView,
  AkEmpty,
  AkGroup,
  ScrollViewOnRefreshing
} from '@/index'

export default function ExpTabView() {
  const onRefreshing: ScrollViewOnRefreshing = (res, done) => {
    setTimeout(() => {
      done()
    }, 2000)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkTabView className="exp-tabView">
          <AkTabView.Item name="Tab 1">
            <AkScrollView
              className="exp-tabView-scroll-view"
              enablePullDirections={['down']}
              scrollY
              scrollX
              onRefreshing={onRefreshing}
            >
              <AkEmpty
                className="exp-tabView-empty"
                description="Tab 1 下拉刷新"
              ></AkEmpty>
            </AkScrollView>
          </AkTabView.Item>
          <AkTabView.Item name="Tab 2">
            <AkEmpty
              className="exp-tabView-empty"
              description="Tab 2"
            ></AkEmpty>
          </AkTabView.Item>
        </AkTabView>
      </AkGroup>
      <AkGroup title="垂直">
        <AkTabView className="exp-tabView" initialVertical scrollThreshold={1}>
          <AkTabView.Item name="Tab 1">
            <AkScrollView
              className="exp-tabView-scroll-view"
              enablePullDirections={['down']}
              scroll-y
              onRefreshing={onRefreshing}
            >
              <AkEmpty
                className="exp-tabView-empty"
                description="Tab 1 下拉刷新"
              ></AkEmpty>
            </AkScrollView>
          </AkTabView.Item>
          <AkTabView.Item name="Tab 2">
            <AkEmpty
              className="exp-tabView-empty"
              description="Tab 2"
            ></AkEmpty>
          </AkTabView.Item>
        </AkTabView>
      </AkGroup>
    </>
  )
}
