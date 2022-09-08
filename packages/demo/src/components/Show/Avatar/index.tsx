import { AkAvatar, AkCell, AkGroup } from '@/index'

export default function ExpAvatar() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="默认">
          <AkAvatar />
        </AkCell>
        <AkCell label="图片（src=xxx）">
          <AkAvatar src="https://cdn.fox2.cn/vfox/avatar/5.png" />
        </AkCell>
        <AkCell label="文字">
          <AkAvatar>曹</AkAvatar>
        </AkCell>
      </AkGroup>
      <AkGroup title="色彩（color）">
        <div className="exp-avatar-custom-list">
          <AkAvatar color="#ff4d4f">DR</AkAvatar>
          <AkAvatar color="#ff7a45">V</AkAvatar>
          <AkAvatar color="#fa8c16">SO</AkAvatar>
          <AkAvatar color="#faad14">CG</AkAvatar>
          <AkAvatar color="#fadb14">SY</AkAvatar>
          <AkAvatar color="#597ef7">GB</AkAvatar>
          <AkAvatar color="#1890ff">DB</AkAvatar>
          <AkAvatar color="#36cfc9">C</AkAvatar>
          <AkAvatar color="#52c41a">PG</AkAvatar>
          <AkAvatar color="#a0d911">L</AkAvatar>
          <AkAvatar color="#9254de">GP</AkAvatar>
          <AkAvatar color="#f759ab">M</AkAvatar>
        </div>
      </AkGroup>
      <AkGroup title="形状（shape）">
        <AkCell label="circle">
          <AkAvatar shape="circle" />
        </AkCell>
        <AkCell label="square">
          <AkAvatar shape="square" />
        </AkCell>
      </AkGroup>
      <AkGroup title="尺寸（size）">
        <div className="exp-avatar-custom-list">
          <AkAvatar size={24}>24</AkAvatar>
          <AkAvatar size="small">SM</AkAvatar>
          <AkAvatar size="middle">MD</AkAvatar>
          <AkAvatar size="large">LG</AkAvatar>
        </div>
      </AkGroup>
      <AkGroup title="角标">
        <AkCell label="gender">
          <div className="exp-avatar-list">
            <AkAvatar
              shape="square"
              gender="man"
              src="https://cdn.fox2.cn/vfox/avatar/1.png"
            />
            <AkAvatar
              shape="square"
              gender="woman"
              src="https://cdn.fox2.cn/vfox/avatar/2.png"
            />
            <AkAvatar
              shape="circle"
              gender="man"
              src="https://cdn.fox2.cn/vfox/avatar/3.png"
            />
            <AkAvatar
              shape="circle"
              gender="woman"
              src="https://cdn.fox2.cn/vfox/avatar/4.png"
            />
          </div>
        </AkCell>
        <AkCell label="badge">
          <div className="exp-avatar-list">
            <AkAvatar shape="square" badge="99" />
            <AkAvatar shape="square" badge={{ content: 1, dot: true }} />
          </div>
        </AkCell>
      </AkGroup>
      <AkGroup title="头像组">
        <AkCell label="size=small">
          <AkAvatar.Group size="small">
            <AkAvatar src="https://cdn.fox2.cn/vfox/avatar/5.png" />
            <AkAvatar src="https://cdn.fox2.cn/vfox/avatar/6.png" />
            <AkAvatar src="https://cdn.fox2.cn/vfox/avatar/7.png" />
          </AkAvatar.Group>
        </AkCell>
        <AkCell label="totalCount=123456">
          <AkAvatar.Group size="small" totalCount="123456" countColor="#6667AB">
            <AkAvatar src="https://cdn.fox2.cn/vfox/avatar/1.png" />
            <AkAvatar src="https://cdn.fox2.cn/vfox/avatar/2.png" />
            <AkAvatar src="https://cdn.fox2.cn/vfox/avatar/3.png" />
            <AkAvatar src="https://cdn.fox2.cn/vfox/avatar/4.png" />
          </AkAvatar.Group>
        </AkCell>
      </AkGroup>
    </>
  )
}
