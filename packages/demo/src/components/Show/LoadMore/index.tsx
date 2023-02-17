import { TaLoadMore, TaGroup } from '@/index'

export default function ExpLoadMore() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaLoadMore />
      </TaGroup>
      <TaGroup title="自定义内容">
        <TaLoadMore>暂无数据</TaLoadMore>
      </TaGroup>
      <TaGroup title="loading=true">
        <TaLoadMore loading>加载中...</TaLoadMore>
      </TaGroup>
    </>
  )
}
