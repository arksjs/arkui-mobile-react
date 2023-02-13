import { TaTag, TaCell, TaGroup, showToast } from '@/index'

export default function ExpTag() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="pattern=light" className="exp-tag-compact-box">
          <TaTag type="default">default</TaTag>
          <TaTag type="primary">primary</TaTag>
          <TaTag type="success">success</TaTag>
          <TaTag type="warning">warning</TaTag>
          <TaTag type="danger">danger</TaTag>
        </TaCell>
        <TaCell label="pattern=dark" className="exp-tag-compact-box">
          <TaTag type="default" pattern="dark">
            default
          </TaTag>
          <TaTag type="primary" pattern="dark">
            primary
          </TaTag>
          <TaTag type="success" pattern="dark">
            success
          </TaTag>
          <TaTag type="warning" pattern="dark">
            warning
          </TaTag>
          <TaTag type="danger" pattern="dark">
            danger
          </TaTag>
        </TaCell>
        <TaCell label="pattern=plain" className="exp-tag-compact-box">
          <TaTag type="default" pattern="plain">
            default
          </TaTag>
          <TaTag type="primary" pattern="plain">
            primary
          </TaTag>
          <TaTag type="success" pattern="plain">
            success
          </TaTag>
          <TaTag type="warning" pattern="plain">
            warning
          </TaTag>
          <TaTag type="danger" pattern="plain">
            danger
          </TaTag>
        </TaCell>
      </TaGroup>
      <TaGroup title="自定义颜色">
        <TaCell label="长春花色#6667AB">
          <TaTag type="default" pattern="plain" color="#6667AB">
            plain
          </TaTag>
        </TaCell>
        <TaCell label="莲花色#E2C0BF">
          <TaTag type="default" color="#6667AB">
            dark
          </TaTag>
          <TaTag type="default" closable color="#E2C0BF">
            light
          </TaTag>
        </TaCell>
      </TaGroup>
      <TaGroup title="标签大小">
        <TaCell label="size=small">
          <TaTag type="primary" pattern="light" size="small">
            标签
          </TaTag>
          <TaTag type="primary" pattern="dark" size="small">
            标签
          </TaTag>
          <TaTag type="primary" pattern="plain" size="small">
            标签
          </TaTag>
        </TaCell>
        <TaCell label="size=middle">
          <TaTag type="primary" pattern="light" size="middle">
            标签
          </TaTag>
          <TaTag type="primary" pattern="dark" size="middle">
            标签
          </TaTag>
          <TaTag type="primary" pattern="plain" size="middle">
            标签
          </TaTag>
        </TaCell>
        <TaCell label="size=large">
          <TaTag type="primary" pattern="light" size="large">
            标签
          </TaTag>
          <TaTag type="primary" pattern="dark" size="large">
            标签
          </TaTag>
          <TaTag type="primary" pattern="plain" size="large">
            标签
          </TaTag>
        </TaCell>
      </TaGroup>
      <TaGroup title="其他">
        <TaCell label="可关闭的">
          <TaTag type="primary" pattern="dark" size="large" closable>
            标签
          </TaTag>
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="click & close &long-press">
          <TaTag
            type="default"
            closable
            onClick={() => showToast('点击事件')}
            onClose={() => showToast('关闭事件')}
            onLongPress={() => showToast('长按事件')}
          >
            标签
          </TaTag>
        </TaCell>
      </TaGroup>
    </>
  )
}
