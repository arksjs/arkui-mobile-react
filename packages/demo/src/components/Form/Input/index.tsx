import { AkInput, AkCell, AkGroup, showToast } from '@/index'

export default function ExpInput() {
  function onInput(value: string) {
    showToast(`当前值为：${value}`)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkInput type="text" focus placeholder="请输入文本" />
        <AkInput type="text" value="禁用" disabled />
        <AkInput type="text" placeholder="showLimit=true" showLimit showClear />
      </AkGroup>
      <AkGroup title="textarea">
        <AkInput
          type="textarea"
          placeholder="showLimit=true"
          showLimit
          maxlength={200}
        />
      </AkGroup>
      <AkGroup title="Slot prepend/append">
        <AkInput
          type="text"
          focus
          placeholder="请输入网址"
          renderPrepend={() => 'https://'}
        />
        <AkInput
          type="text"
          focus
          placeholder="请输入网址"
          renderAppend={() => '.com'}
        />
      </AkGroup>
      <AkGroup title="与 Cell 组合">
        <AkCell label="文本">
          <AkInput type="text" placeholder="请输入文本" />
        </AkCell>
      </AkGroup>
      <AkGroup title="设置 type 类型">
        <AkCell label="文本 text">
          <AkInput type="text" placeholder="请输入文本" />
        </AkCell>
        <AkCell label="电话 tel">
          <AkInput type="tel" placeholder="请输入电话" />
        </AkCell>
        <AkCell label="整数 digit">
          <AkInput type="digit" placeholder="请输入整数" />
        </AkCell>
        <AkCell label="数字 number">
          <AkInput type="number" placeholder="请输入数字" />
        </AkCell>
        <AkCell label="搜索 search">
          <AkInput type="search" placeholder="请输入要搜索的内容" />
        </AkCell>
        <AkCell label="密码 password">
          <AkInput type="password" placeholder="请输入密码" />
        </AkCell>
        <AkCell label="文本 textarea">
          <AkInput type="textarea" placeholder="请输入多行文本" />
        </AkCell>
      </AkGroup>
      <AkGroup title="其他">
        <AkCell label="只读 readonly">
          <AkInput type="text" value="只读文本" readonly />
        </AkCell>
        <AkCell label="禁用 disabled">
          <AkInput type="text" value="禁用文本" disabled />
        </AkCell>
        <AkCell label="可清除 showClear">
          <AkInput
            type="text"
            placeholder="请输入文本"
            value="文本内容"
            showClear
          />
        </AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell label="input">
          <AkInput
            type="text"
            placeholder="请输入文本"
            showClear
            onInput={onInput}
          />
        </AkCell>
        <AkCell label="change">
          <AkInput
            type="text"
            placeholder="请输入文本"
            showClear
            onChange={onInput}
          />
        </AkCell>
      </AkGroup>
    </>
  )
}
