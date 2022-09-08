import { AkTag, AkCell, AkGroup, showToast } from '@/index'

export default function ExpTag() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="pattern=light" className="exp-tag-compact-box">
          <AkTag type="default">default</AkTag>
          <AkTag type="primary">primary</AkTag>
          <AkTag type="success">success</AkTag>
          <AkTag type="warning">warning</AkTag>
          <AkTag type="danger">danger</AkTag>
        </AkCell>
        <AkCell label="pattern=dark" className="exp-tag-compact-box">
          <AkTag type="default" pattern="dark">
            default
          </AkTag>
          <AkTag type="primary" pattern="dark">
            primary
          </AkTag>
          <AkTag type="success" pattern="dark">
            success
          </AkTag>
          <AkTag type="warning" pattern="dark">
            warning
          </AkTag>
          <AkTag type="danger" pattern="dark">
            danger
          </AkTag>
        </AkCell>
        <AkCell label="pattern=plain" className="exp-tag-compact-box">
          <AkTag type="default" pattern="plain">
            default
          </AkTag>
          <AkTag type="primary" pattern="plain">
            primary
          </AkTag>
          <AkTag type="success" pattern="plain">
            success
          </AkTag>
          <AkTag type="warning" pattern="plain">
            warning
          </AkTag>
          <AkTag type="danger" pattern="plain">
            danger
          </AkTag>
        </AkCell>
      </AkGroup>
      <AkGroup title="自定义颜色">
        <AkCell label="长春花色#6667AB">
          <AkTag type="default" pattern="plain" color="#6667AB">
            plain
          </AkTag>
        </AkCell>
        <AkCell label="莲花色#E2C0BF">
          <AkTag type="default" color="#6667AB">
            dark
          </AkTag>
          <AkTag type="default" closable color="#E2C0BF">
            light
          </AkTag>
        </AkCell>
      </AkGroup>
      <AkGroup title="标签大小">
        <AkCell label="size=small">
          <AkTag type="primary" pattern="light" size="small">
            标签
          </AkTag>
          <AkTag type="primary" pattern="dark" size="small">
            标签
          </AkTag>
          <AkTag type="primary" pattern="plain" size="small">
            标签
          </AkTag>
        </AkCell>
        <AkCell label="size=middle">
          <AkTag type="primary" pattern="light" size="middle">
            标签
          </AkTag>
          <AkTag type="primary" pattern="dark" size="middle">
            标签
          </AkTag>
          <AkTag type="primary" pattern="plain" size="middle">
            标签
          </AkTag>
        </AkCell>
        <AkCell label="size=large">
          <AkTag type="primary" pattern="light" size="large">
            标签
          </AkTag>
          <AkTag type="primary" pattern="dark" size="large">
            标签
          </AkTag>
          <AkTag type="primary" pattern="plain" size="large">
            标签
          </AkTag>
        </AkCell>
      </AkGroup>
      <AkGroup title="其他">
        <AkCell label="可关闭的">
          <AkTag type="primary" pattern="dark" size="large" closable>
            标签
          </AkTag>
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="click & close &long-press">
          <AkTag
            type="default"
            closable
            onClick={() => showToast('点击事件')}
            onClose={() => showToast('关闭事件')}
            onLongPress={() => showToast('长按事件')}
          >
            标签
          </AkTag>
        </AkCell>
      </AkGroup>
    </>
  )
}
