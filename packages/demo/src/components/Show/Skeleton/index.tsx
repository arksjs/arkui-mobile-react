import {
  TaSkeleton,
  TaGroup,
  TaIcon,
  TaSwitch,
  SkeletonAvatarShape,
  SkeletonButtonShape
} from '@/index'
import { useState } from 'react'

export default function ExpSkeleton() {
  const [animated] = useState(true)
  const [avatarShape] = useState<SkeletonAvatarShape>('circle')
  const [buttonShape] = useState<SkeletonButtonShape>('default')
  const [loading, setLoading] = useState(false)

  return (
    <>
      <TaGroup title="基础用法">
        <div className="exp-skeleton-panel">
          <TaSkeleton />
        </div>
      </TaGroup>
      <TaGroup title="显示头像">
        <div className="exp-skeleton-panel">
          <TaSkeleton avatar />
        </div>
      </TaGroup>
      <TaGroup title="带动画">
        <div className="exp-skeleton-panel">
          <TaSkeleton avatar animated={animated} avatarShape={avatarShape} />
        </div>
      </TaGroup>
      <TaGroup title="显示子组件">
        <div className="exp-skeleton-panel">
          <div className="exp-skeleton-switch">
            <TaSwitch value={loading} onChange={setLoading} />
          </div>
          <TaSkeleton avatar loading={!loading}>
            <div className="exp-skeleton-sub-component">
              <TaIcon icon="HeartFilled" size="32" />
              <h4 className="title">hello World</h4>
              <p className="paragraph">简单不先于复杂，而是在复杂之后。</p>
            </div>
          </TaSkeleton>
        </div>
      </TaGroup>
      <TaGroup title="自由组合">
        <div className="exp-skeleton-panel">
          <TaSkeleton
            className="exp-skeleton-custom"
            buttonShape={buttonShape}
            renderLayout={() => (
              <>
                <TaSkeleton.Image />
                <TaSkeleton.Title />
                <TaSkeleton.Paragraph row={2} />
                <TaSkeleton.Button />
              </>
            )}
          ></TaSkeleton>
        </div>
      </TaGroup>
    </>
  )
}
