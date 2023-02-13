import {
  CollapseItemOnToggle,
  CollapseOnChange,
  TaCollapse,
  TaCell,
  TaGroup,
  showToast
} from '@/index'

export default function ExpCollapse() {
  const onChange: CollapseOnChange = activeNames => {
    console.log('change', activeNames)
    showToast(
      (activeNames.length > 0 ? activeNames.join('，') : '没有项') + '展开'
    )
  }

  const onToggle: CollapseItemOnToggle = res => {
    console.log('toggle', res)
    showToast(res.spread ? '展开' : '收起')
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCollapse>
          <TaCollapse.Item title="标题1" name="row1">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
          <TaCollapse.Item title="标题2" name="row2">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
          <TaCollapse.Item title="标题3" name="row3">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
        </TaCollapse>
      </TaGroup>
      <TaGroup title="手风琴">
        <TaCollapse accordion>
          <TaCollapse.Item title="标题1" name="row1">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
          <TaCollapse.Item title="标题2" name="row2">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
          <TaCollapse.Item title="标题3" name="row3">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
        </TaCollapse>
      </TaGroup>
      <TaGroup title="其他">
        <TaCollapse activeNames={['row1']}>
          <TaCollapse.Item title="默认展开" name="row1">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
          <TaCollapse.Item title="和 Cell 组合" name="row2">
            <TaCell label="单元格" content="内容"></TaCell>
            <TaCell
              label="单元格"
              content="内容"
              description="描述信息"
            ></TaCell>
          </TaCollapse.Item>
          <TaCollapse.Item title="带图标" icon="MenuOutlined" name="row3">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
          <TaCollapse.Item
            title="禁用"
            disabled
            icon="StopOutlined"
            name="row4"
          >
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
        </TaCollapse>
      </TaGroup>
      <TaGroup title="Collapse 的事件 change">
        <TaCollapse onChange={onChange}>
          <TaCollapse.Item title="标题1" name="第1项">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
          <TaCollapse.Item title="标题2" name="第2项">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
          <TaCollapse.Item title="标题3" name="第3项">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
        </TaCollapse>
      </TaGroup>
      <TaGroup title="CollapseItem 的事件 toggle">
        <TaCollapse>
          <TaCollapse.Item title="标题1" name="row1" onToggle={onToggle}>
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </TaCollapse.Item>
        </TaCollapse>
      </TaGroup>
    </>
  )
}
