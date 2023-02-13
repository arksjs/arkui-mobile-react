import { TaNoticeBar, TaGroup, showToast } from '@/index'

const text1 = '简单不先于复杂，而是在复杂之后。'
const text2 =
  '作为一个真正的程序员，首先应该尊重编程，热爱你所写下的程序，他是你的伙伴，而不是工具。'

export default function ExpNoticeBar() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaNoticeBar className="exp-noticeBar-item" title={text1} />
        <TaNoticeBar className="exp-noticeBar-item" title={text2} />
      </TaGroup>
      <TaGroup title="跑马灯">
        <TaNoticeBar className="exp-noticeBar-item" marquee title={text2} />
      </TaGroup>
      <TaGroup title="左侧图标">
        <TaNoticeBar
          className="exp-noticeBar-item"
          left-icon="SoundOutlined"
          title={text1}
        />
      </TaGroup>
      <TaGroup title="mode closable/clickable">
        <TaNoticeBar
          className="exp-noticeBar-item"
          mode="closable"
          title={text1}
          onCloseClick={() => showToast('点击了关闭按钮')}
        />
        <TaNoticeBar
          className="exp-noticeBar-item"
          mode="clickable"
          title={text1}
          onClick={() => showToast('点击了通告栏')}
        />
      </TaGroup>
      <TaGroup title="type=success/primary/danger">
        <TaNoticeBar
          left-icon="SoundOutlined"
          className="exp-noticeBar-item"
          type="success"
          title={text1}
        />
        <TaNoticeBar
          left-icon="SoundOutlined"
          className="exp-noticeBar-item"
          type="primary"
          title={text1}
        />
        <TaNoticeBar
          left-icon="SoundOutlined"
          className="exp-noticeBar-item"
          type="danger"
          title={text1}
        />
      </TaGroup>
      <TaGroup title="自定义颜色(#000000)">
        <TaNoticeBar
          className="exp-noticeBar-item"
          left-icon="SoundOutlined"
          title={text1}
          color="#000000"
        />
      </TaGroup>
    </>
  )
}
