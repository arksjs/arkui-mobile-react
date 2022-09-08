import {
  AkSkeleton,
  AkGroup,
  AkIcon,
  AkSwitch,
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
      <AkGroup title="基础用法">
        <div className="exp-skeleton-panel">
          <AkSkeleton />
        </div>
      </AkGroup>
      <AkGroup title="显示头像">
        <div className="exp-skeleton-panel">
          <AkSkeleton avatar />
        </div>
      </AkGroup>
      <AkGroup title="带动画">
        <div className="exp-skeleton-panel">
          <AkSkeleton avatar animated={animated} avatarShape={avatarShape} />
        </div>
      </AkGroup>
      <AkGroup title="显示子组件">
        <div className="exp-skeleton-panel">
          <div className="exp-skeleton-switch">
            <AkSwitch value={loading} onChange={setLoading} />
          </div>
          <AkSkeleton avatar loading={!loading}>
            <div className="exp-skeleton-sub-component">
              <AkIcon icon="HeartFilled" size="32" />
              <h4 className="title">hello World</h4>
              <p className="paragraph">简单不先于复杂，而是在复杂之后。</p>
            </div>
          </AkSkeleton>
        </div>
      </AkGroup>
      <AkGroup title="自由组合">
        <div className="exp-skeleton-panel">
          <AkSkeleton
            className="exp-skeleton-custom"
            buttonShape={buttonShape}
            renderLayout={() => (
              <>
                <AkSkeleton.Image />
                <AkSkeleton.Title />
                <AkSkeleton.Paragraph row={2} />
                <AkSkeleton.Button />
              </>
            )}
          ></AkSkeleton>
        </div>
      </AkGroup>
    </>
  )
}
