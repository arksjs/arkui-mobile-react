import {
  showToast,
  TaButton,
  TaNavBar,
  TaGroup,
  NavBarOnButtonClick
} from '@/index'

export default function ExpNavBar() {
  const onRightButtonClick: NavBarOnButtonClick = res => {
    console.log(res)

    // showDialog({
    //   title: '右侧按钮点击',
    //   showCancel: false,
    //   content: `text: '${res.item.text}'\nindex: ${res.index}`
    // })
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaNavBar title="标题" />
      </TaGroup>
      <TaGroup title="显示返回按钮">
        <TaNavBar title="标题" showBack />
      </TaGroup>
      <TaGroup title="展示首页按钮">
        <TaNavBar title="标题" showBack showHome />
      </TaGroup>
      <TaGroup title="展示右侧按钮">
        <TaNavBar
          title="标题"
          showBack
          showHome
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
        />
      </TaGroup>
      <TaGroup title="按钮带文本">
        <TaNavBar
          title="标题"
          showBack
          showHome
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
        />
        <TaNavBar
          title="标题"
          showBack
          iconOnly={false}
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
        />
      </TaGroup>
      <TaGroup title="固定顶部(配合 fixed 组件)">
        <div className="exp-navBar-fixed">上下滑动观察最顶部的导航</div>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaNavBar
          title="标题双击"
          showBack
          showHome
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
          onBackClick={() => showToast('返回按钮点击')}
          onHomeClick={() => showToast('首页按钮点击')}
          onTitleDbclick={() => showToast('标题双击')}
          onRightButtonClick={onRightButtonClick}
        />
      </TaGroup>
      <TaGroup title="renderLeft/renderRight">
        <TaNavBar
          title="标题"
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
          renderLeft={() => <div className="exp-navBar-left">renderLeft</div>}
        />
        <TaNavBar
          title="标题"
          showBack
          showHome
          renderRight={() => (
            <div className="exp-navBar-right">renderRight</div>
          )}
        />
        <TaNavBar
          title="标题"
          showBack
          showHome
          renderLeft={() => (
            <div className="exp-navBar-left">
              <TaButton type="primary" icon="LeftOutlined" size="small">
                返回
              </TaButton>
            </div>
          )}
          renderRight={() => (
            <div className="exp-navBar-right">
              <TaButton type="primary" icon="MenuOutlined" size="small">
                菜单
              </TaButton>
            </div>
          )}
        />
      </TaGroup>
    </>
  )
}
