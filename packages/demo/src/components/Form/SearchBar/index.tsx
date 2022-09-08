import {
  AkSearchBar,
  AkGroup,
  showToast,
  SearchBarOnFieldClick,
  SearchBarOnInput,
  SearchBarOnSearch
} from '@/index'
import { placeholders } from './data'

export default function ExpSearchBar() {
  const onInput: SearchBarOnInput = (text, fn) => {
    fn(
      text
        ? 'ABCD'.split('').map(v => {
            return {
              text: `${text} ${v}`,
              tags: ['tag1', 'tag2']
            }
          })
        : []
    )
  }

  const onInput2: SearchBarOnInput = (text, fn) => {
    showToast(`输入了 ${text}`)

    onInput(text, fn)
  }

  const onSearch: SearchBarOnSearch = res => {
    console.log('onSearch', res)
    showToast(`搜索了 ${res.text}`)
  }

  const onClick: SearchBarOnFieldClick = res => {
    console.log('onFieldClick', res)
    showToast(`搜索词 ${res.text}`)
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkSearchBar />
      </AkGroup>
      <AkGroup title="搜索建议">
        <AkSearchBar onInput={onInput} />
      </AkGroup>
      <AkGroup title="显示取消按钮">
        <AkSearchBar showCancel />
      </AkGroup>
      <AkGroup title="设置候选项">
        <AkSearchBar placeholders={placeholders} />
      </AkGroup>
      <AkGroup title="深色适配">
        <AkSearchBar className="exp-searchBar-dark-style" showCancel ghost />
      </AkGroup>
      <AkGroup title="只读（readonly=true）">
        <AkSearchBar readonly placeholders={placeholders} />
      </AkGroup>
      <AkGroup title="onInput/onFocus/onBlur/onCancelClick/onSearch">
        <AkSearchBar
          showCancel
          placeholders={placeholders}
          onInput={onInput2}
          onFocus={() => showToast('focus')}
          onBlur={() => showToast('blur')}
          onCancelClick={() => {
            showToast('取消按钮点击')
          }}
          onSearch={onSearch}
        />
      </AkGroup>
      <AkGroup title="onFieldClick & readonly=true">
        <AkSearchBar
          readonly
          placeholders={placeholders}
          onFieldClick={onClick}
        />
      </AkGroup>
    </>
  )
}
