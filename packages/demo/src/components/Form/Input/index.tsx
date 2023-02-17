import { TaInput, TaCell, TaGroup, showToast } from '@/index'

export default function ExpInput() {
  function onInput(value: string) {
    showToast(`当前值为：${value}`)
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaInput type="text" focus placeholder="请输入文本" />
        <TaInput type="text" value="禁用" disabled />
        <TaInput type="text" placeholder="showLimit=true" showLimit showClear />
      </TaGroup>
      <TaGroup title="textarea">
        <TaInput
          type="textarea"
          placeholder="showLimit=true"
          showLimit
          maxlength={200}
        />
      </TaGroup>
      <TaGroup title="Slot prepend/append">
        <TaInput
          type="text"
          focus
          placeholder="请输入网址"
          renderPrepend={() => 'https://'}
        />
        <TaInput
          type="text"
          focus
          placeholder="请输入网址"
          renderAppend={() => '.com'}
        />
      </TaGroup>
      <TaGroup title="与 Cell 组合">
        <TaCell label="文本">
          <TaInput type="text" placeholder="请输入文本" />
        </TaCell>
      </TaGroup>
      <TaGroup title="设置 type 类型">
        <TaCell label="文本 text">
          <TaInput type="text" placeholder="请输入文本" />
        </TaCell>
        <TaCell label="电话 tel">
          <TaInput type="tel" placeholder="请输入电话" />
        </TaCell>
        <TaCell label="整数 digit">
          <TaInput type="digit" placeholder="请输入整数" />
        </TaCell>
        <TaCell label="数字 number">
          <TaInput type="number" placeholder="请输入数字" />
        </TaCell>
        <TaCell label="搜索 search">
          <TaInput type="search" placeholder="请输入要搜索的内容" />
        </TaCell>
        <TaCell label="密码 password">
          <TaInput type="password" placeholder="请输入密码" />
        </TaCell>
        <TaCell label="文本 textarea">
          <TaInput type="textarea" placeholder="请输入多行文本" />
        </TaCell>
      </TaGroup>
      <TaGroup title="其他">
        <TaCell label="只读 readonly">
          <TaInput type="text" value="只读文本" readonly />
        </TaCell>
        <TaCell label="禁用 disabled">
          <TaInput type="text" value="禁用文本" disabled />
        </TaCell>
        <TaCell label="可清除 showClear">
          <TaInput
            type="text"
            placeholder="请输入文本"
            value="文本内容"
            showClear
          />
        </TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="input">
          <TaInput
            type="text"
            placeholder="请输入文本"
            showClear
            onInput={onInput}
          />
        </TaCell>
        <TaCell label="change">
          <TaInput
            type="text"
            placeholder="请输入文本"
            showClear
            onChange={onInput}
          />
        </TaCell>
      </TaGroup>
    </>
  )
}
