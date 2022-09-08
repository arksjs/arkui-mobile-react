import { AkRow, AkCol, AkGroup } from '@/index'

export default function ExpLayout() {
  return (
    <>
      <AkGroup title="基础用法">
        <AkRow className="exp-layout-row">
          <AkCol className="exp-layout-col">col-24</AkCol>
        </AkRow>
        <AkRow className="exp-layout-row">
          <AkCol className="exp-layout-col" span="12">
            col-12
          </AkCol>
          <AkCol className="exp-layout-col" span="12">
            col-12
          </AkCol>
        </AkRow>
        <AkRow className="exp-layout-row">
          <AkCol className="exp-layout-col" span="8">
            col-8
          </AkCol>
          <AkCol className="exp-layout-col" span="8">
            col-8
          </AkCol>
          <AkCol className="exp-layout-col" span="8">
            col-8
          </AkCol>
        </AkRow>
        <AkRow className="exp-layout-row">
          <AkCol className="exp-layout-col" span="6">
            col-6
          </AkCol>
          <AkCol className="exp-layout-col" span="6">
            col-6
          </AkCol>
          <AkCol className="exp-layout-col" span="6">
            col-6
          </AkCol>
          <AkCol className="exp-layout-col" span="6">
            col-6
          </AkCol>
        </AkRow>
      </AkGroup>
      <AkGroup title="区块间隔">
        <AkRow className="exp-layout-row" gutter="10">
          <AkCol className="exp-layout-col" span="8">
            col-8
          </AkCol>
          <AkCol className="exp-layout-col" span="8">
            col-8
          </AkCol>
          <AkCol className="exp-layout-col" span="8">
            col-8
          </AkCol>
        </AkRow>
      </AkGroup>
      <AkGroup title="左右偏移">
        <AkRow className="exp-layout-row">
          <AkCol className="exp-layout-col" span="8">
            col-8
          </AkCol>
          <AkCol className="exp-layout-col" span="8" offset="8">
            col-8 offset-8
          </AkCol>
        </AkRow>
        <AkRow className="exp-layout-row">
          <AkCol className="exp-layout-col" span="6" offset="6">
            col-6 offset-6
          </AkCol>
          <AkCol className="exp-layout-col" span="6" offset="6">
            col-6 offset-6
          </AkCol>
        </AkRow>
        <AkRow className="exp-layout-row">
          <AkCol className="exp-layout-col" span="12" offset="6">
            col-12 offset-6
          </AkCol>
        </AkRow>
      </AkGroup>
      <AkGroup title="栅格排序">
        <AkRow className="exp-layout-row">
          <AkCol className="exp-layout-col" span="18" push="6">
            col-18 push-6
          </AkCol>
          <AkCol className="exp-layout-col" span="6" pull="18">
            col-6 pull-18
          </AkCol>
        </AkRow>
      </AkGroup>
      <AkGroup title="水平对齐方式">
        <div className="exp-layout-title">justify: start</div>
        <AkRow className="exp-layout-row" justify="start">
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
        </AkRow>
        <div className="exp-layout-title">justify: center</div>
        <AkRow className="exp-layout-row" justify="center">
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
        </AkRow>
        <div className="exp-layout-title">justify: end</div>
        <AkRow className="exp-layout-row" justify="end">
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
        </AkRow>
        <div className="exp-layout-title">justify: space-around</div>
        <AkRow className="exp-layout-row" justify="space-around">
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
        </AkRow>
        <div className="exp-layout-title">justify: space-between</div>
        <AkRow className="exp-layout-row" justify="space-between">
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col" span="4">
            col-4
          </AkCol>
        </AkRow>
      </AkGroup>
      <AkGroup title="垂直对齐方式">
        <div className="exp-layout-title">align: top</div>
        <AkRow className="exp-layout-row" justify="space-around" align="top">
          <AkCol className="exp-layout-col exp-layout-h-80" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col exp-layout-h-40" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col exp-layout-h-100" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col exp-layout-h-60" span="4">
            col-4
          </AkCol>
        </AkRow>
        <div className="exp-layout-title">align: middle</div>
        <AkRow className="exp-layout-row" justify="space-around" align="middle">
          <AkCol className="exp-layout-col exp-layout-h-80" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col exp-layout-h-40" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col exp-layout-h-100" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col exp-layout-h-60" span="4">
            col-4
          </AkCol>
        </AkRow>
        <div className="exp-layout-title">align: bottom</div>
        <AkRow className="exp-layout-row" justify="space-around" align="bottom">
          <AkCol className="exp-layout-col exp-layout-h-80" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col exp-layout-h-40" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col exp-layout-h-100" span="4">
            col-4
          </AkCol>
          <AkCol className="exp-layout-col exp-layout-h-60" span="4">
            col-4
          </AkCol>
        </AkRow>
      </AkGroup>
    </>
  )
}
