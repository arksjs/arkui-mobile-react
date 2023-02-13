import { TaAvatar, TaCell, TaGroup } from '@/index'

export default function ExpAvatar() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="默认">
          <TaAvatar />
        </TaCell>
        <TaCell label="图片（src=xxx）">
          <TaAvatar src="https://cdn.fox2.cn/vfox/avatar/5.png" />
        </TaCell>
        <TaCell label="文字">
          <TaAvatar>曹</TaAvatar>
        </TaCell>
      </TaGroup>
      <TaGroup title="色彩（color）">
        <div className="exp-avatar-custom-list">
          <TaAvatar color="#ff4d4f">DR</TaAvatar>
          <TaAvatar color="#ff7a45">V</TaAvatar>
          <TaAvatar color="#fa8c16">SO</TaAvatar>
          <TaAvatar color="#faad14">CG</TaAvatar>
          <TaAvatar color="#fadb14">SY</TaAvatar>
          <TaAvatar color="#597ef7">GB</TaAvatar>
          <TaAvatar color="#1890ff">DB</TaAvatar>
          <TaAvatar color="#36cfc9">C</TaAvatar>
          <TaAvatar color="#52c41a">PG</TaAvatar>
          <TaAvatar color="#a0d911">L</TaAvatar>
          <TaAvatar color="#9254de">GP</TaAvatar>
          <TaAvatar color="#f759ab">M</TaAvatar>
        </div>
      </TaGroup>
      <TaGroup title="形状（shape）">
        <TaCell label="circle">
          <TaAvatar shape="circle" />
        </TaCell>
        <TaCell label="square">
          <TaAvatar shape="square" />
        </TaCell>
      </TaGroup>
      <TaGroup title="尺寸（size）">
        <div className="exp-avatar-custom-list">
          <TaAvatar size={24}>24</TaAvatar>
          <TaAvatar size="small">SM</TaAvatar>
          <TaAvatar size="middle">MD</TaAvatar>
          <TaAvatar size="large">LG</TaAvatar>
        </div>
      </TaGroup>
      <TaGroup title="角标">
        <TaCell label="gender">
          <div className="exp-avatar-list">
            <TaAvatar
              shape="square"
              gender="man"
              src="https://cdn.fox2.cn/vfox/avatar/1.png"
            />
            <TaAvatar
              shape="square"
              gender="woman"
              src="https://cdn.fox2.cn/vfox/avatar/2.png"
            />
            <TaAvatar
              shape="circle"
              gender="man"
              src="https://cdn.fox2.cn/vfox/avatar/3.png"
            />
            <TaAvatar
              shape="circle"
              gender="woman"
              src="https://cdn.fox2.cn/vfox/avatar/4.png"
            />
          </div>
        </TaCell>
        <TaCell label="badge">
          <div className="exp-avatar-list">
            <TaAvatar shape="square" badge="99" />
            <TaAvatar shape="square" badge={{ content: 1, dot: true }} />
          </div>
        </TaCell>
      </TaGroup>
      <TaGroup title="头像组">
        <TaCell label="size=small">
          <TaAvatar.Group size="small">
            <TaAvatar src="https://cdn.fox2.cn/vfox/avatar/5.png" />
            <TaAvatar src="https://cdn.fox2.cn/vfox/avatar/6.png" />
            <TaAvatar src="https://cdn.fox2.cn/vfox/avatar/7.png" />
          </TaAvatar.Group>
        </TaCell>
        <TaCell label="totalCount=123456">
          <TaAvatar.Group size="small" totalCount="123456" countColor="#6667AB">
            <TaAvatar src="https://cdn.fox2.cn/vfox/avatar/1.png" />
            <TaAvatar src="https://cdn.fox2.cn/vfox/avatar/2.png" />
            <TaAvatar src="https://cdn.fox2.cn/vfox/avatar/3.png" />
            <TaAvatar src="https://cdn.fox2.cn/vfox/avatar/4.png" />
          </TaAvatar.Group>
        </TaCell>
      </TaGroup>
    </>
  )
}
