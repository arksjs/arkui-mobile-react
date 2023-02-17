import {
  TaTabView,
  TaScrollView,
  TaEmpty,
  TaGroup,
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
      <TaGroup title="基础用法">
        <TaTabView className="exp-tabView">
          <TaTabView.Item name="Tab 1">
            <TaScrollView
              className="exp-tabView-scroll-view"
              enablePullDirections={['down']}
              scrollY
              scrollX
              onRefreshing={onRefreshing}
            >
              <TaEmpty
                className="exp-tabView-empty"
                description="Tab 1 下拉刷新"
              ></TaEmpty>
            </TaScrollView>
          </TaTabView.Item>
          <TaTabView.Item name="Tab 2">
            <TaEmpty
              className="exp-tabView-empty"
              description="Tab 2"
            ></TaEmpty>
          </TaTabView.Item>
        </TaTabView>
      </TaGroup>
      <TaGroup title="垂直">
        <TaTabView className="exp-tabView" initialVertical scrollThreshold={1}>
          <TaTabView.Item name="Tab 1">
            <TaScrollView
              className="exp-tabView-scroll-view"
              enablePullDirections={['down']}
              scroll-y
              onRefreshing={onRefreshing}
            >
              <TaEmpty
                className="exp-tabView-empty"
                description="Tab 1 下拉刷新"
              ></TaEmpty>
            </TaScrollView>
          </TaTabView.Item>
          <TaTabView.Item name="Tab 2">
            <TaEmpty
              className="exp-tabView-empty"
              description="Tab 2"
            ></TaEmpty>
          </TaTabView.Item>
        </TaTabView>
      </TaGroup>
    </>
  )
}
