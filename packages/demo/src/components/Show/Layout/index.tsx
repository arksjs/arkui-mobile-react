import { TaRow, TaCol, TaGroup } from '@/index'

export default function ExpLayout() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaRow className="exp-layout-row">
          <TaCol className="exp-layout-col">col-24</TaCol>
        </TaRow>
        <TaRow className="exp-layout-row">
          <TaCol className="exp-layout-col" span="12">
            col-12
          </TaCol>
          <TaCol className="exp-layout-col" span="12">
            col-12
          </TaCol>
        </TaRow>
        <TaRow className="exp-layout-row">
          <TaCol className="exp-layout-col" span="8">
            col-8
          </TaCol>
          <TaCol className="exp-layout-col" span="8">
            col-8
          </TaCol>
          <TaCol className="exp-layout-col" span="8">
            col-8
          </TaCol>
        </TaRow>
        <TaRow className="exp-layout-row">
          <TaCol className="exp-layout-col" span="6">
            col-6
          </TaCol>
          <TaCol className="exp-layout-col" span="6">
            col-6
          </TaCol>
          <TaCol className="exp-layout-col" span="6">
            col-6
          </TaCol>
          <TaCol className="exp-layout-col" span="6">
            col-6
          </TaCol>
        </TaRow>
      </TaGroup>
      <TaGroup title="区块间隔">
        <TaRow className="exp-layout-row" gutter="10">
          <TaCol className="exp-layout-col" span="8">
            col-8
          </TaCol>
          <TaCol className="exp-layout-col" span="8">
            col-8
          </TaCol>
          <TaCol className="exp-layout-col" span="8">
            col-8
          </TaCol>
        </TaRow>
      </TaGroup>
      <TaGroup title="左右偏移">
        <TaRow className="exp-layout-row">
          <TaCol className="exp-layout-col" span="8">
            col-8
          </TaCol>
          <TaCol className="exp-layout-col" span="8" offset="8">
            col-8 offset-8
          </TaCol>
        </TaRow>
        <TaRow className="exp-layout-row">
          <TaCol className="exp-layout-col" span="6" offset="6">
            col-6 offset-6
          </TaCol>
          <TaCol className="exp-layout-col" span="6" offset="6">
            col-6 offset-6
          </TaCol>
        </TaRow>
        <TaRow className="exp-layout-row">
          <TaCol className="exp-layout-col" span="12" offset="6">
            col-12 offset-6
          </TaCol>
        </TaRow>
      </TaGroup>
      <TaGroup title="栅格排序">
        <TaRow className="exp-layout-row">
          <TaCol className="exp-layout-col" span="18" push="6">
            col-18 push-6
          </TaCol>
          <TaCol className="exp-layout-col" span="6" pull="18">
            col-6 pull-18
          </TaCol>
        </TaRow>
      </TaGroup>
      <TaGroup title="水平对齐方式">
        <div className="exp-layout-title">justify: start</div>
        <TaRow className="exp-layout-row" justify="start">
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
        </TaRow>
        <div className="exp-layout-title">justify: center</div>
        <TaRow className="exp-layout-row" justify="center">
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
        </TaRow>
        <div className="exp-layout-title">justify: end</div>
        <TaRow className="exp-layout-row" justify="end">
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
        </TaRow>
        <div className="exp-layout-title">justify: space-around</div>
        <TaRow className="exp-layout-row" justify="space-around">
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
        </TaRow>
        <div className="exp-layout-title">justify: space-between</div>
        <TaRow className="exp-layout-row" justify="space-between">
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col" span="4">
            col-4
          </TaCol>
        </TaRow>
      </TaGroup>
      <TaGroup title="垂直对齐方式">
        <div className="exp-layout-title">align: top</div>
        <TaRow className="exp-layout-row" justify="space-around" align="top">
          <TaCol className="exp-layout-col exp-layout-h-80" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col exp-layout-h-40" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col exp-layout-h-100" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col exp-layout-h-60" span="4">
            col-4
          </TaCol>
        </TaRow>
        <div className="exp-layout-title">align: middle</div>
        <TaRow className="exp-layout-row" justify="space-around" align="middle">
          <TaCol className="exp-layout-col exp-layout-h-80" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col exp-layout-h-40" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col exp-layout-h-100" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col exp-layout-h-60" span="4">
            col-4
          </TaCol>
        </TaRow>
        <div className="exp-layout-title">align: bottom</div>
        <TaRow className="exp-layout-row" justify="space-around" align="bottom">
          <TaCol className="exp-layout-col exp-layout-h-80" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col exp-layout-h-40" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col exp-layout-h-100" span="4">
            col-4
          </TaCol>
          <TaCol className="exp-layout-col exp-layout-h-60" span="4">
            col-4
          </TaCol>
        </TaRow>
      </TaGroup>
    </>
  )
}
