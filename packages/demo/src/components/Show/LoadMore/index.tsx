import { AkLoadMore, AkGroup } from '@/index'

export default function ExpLoadMore() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkLoadMore />
      </AkGroup>
      <AkGroup title="自定义内容">
        <AkLoadMore>暂无数据</AkLoadMore>
      </AkGroup>
      <AkGroup title="loading=true">
        <AkLoadMore loading>加载中...</AkLoadMore>
      </AkGroup>
    </>
  )
}
