import {
  TaSearchBar,
  TaGroup,
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
      <TaGroup title="基础用法">
        <TaSearchBar />
      </TaGroup>
      <TaGroup title="搜索建议">
        <TaSearchBar onInput={onInput} />
      </TaGroup>
      <TaGroup title="显示取消按钮">
        <TaSearchBar showCancel />
      </TaGroup>
      <TaGroup title="设置候选项">
        <TaSearchBar placeholders={placeholders} />
      </TaGroup>
      <TaGroup title="深色适配">
        <TaSearchBar className="exp-searchBar-dark-style" showCancel ghost />
      </TaGroup>
      <TaGroup title="只读（readonly=true）">
        <TaSearchBar readonly placeholders={placeholders} />
      </TaGroup>
      <TaGroup title="onInput/onFocus/onBlur/onCancelClick/onSearch">
        <TaSearchBar
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
      </TaGroup>
      <TaGroup title="onFieldClick & readonly=true">
        <TaSearchBar
          readonly
          placeholders={placeholders}
          onFieldClick={onClick}
        />
      </TaGroup>
    </>
  )
}
