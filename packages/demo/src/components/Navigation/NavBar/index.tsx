import {
  showToast,
  AkButton,
  AkNavBar,
  AkGroup,
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
      <AkGroup title="基础用法">
        <AkNavBar title="标题" />
      </AkGroup>
      <AkGroup title="显示返回按钮">
        <AkNavBar title="标题" showBack />
      </AkGroup>
      <AkGroup title="展示首页按钮">
        <AkNavBar title="标题" showBack showHome />
      </AkGroup>
      <AkGroup title="展示右侧按钮">
        <AkNavBar
          title="标题"
          showBack
          showHome
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
        />
      </AkGroup>
      <AkGroup title="按钮带文本">
        <AkNavBar
          title="标题"
          showBack
          showHome
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
        />
        <AkNavBar
          title="标题"
          showBack
          iconOnly={false}
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
        />
      </AkGroup>
      <AkGroup title="固定顶部(配合 fixed 组件)">
        <div className="exp-navBar-fixed">上下滑动观察最顶部的导航</div>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkNavBar
          title="标题双击"
          showBack
          showHome
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
          onBackClick={() => showToast('返回按钮点击')}
          onHomeClick={() => showToast('首页按钮点击')}
          onTitleDbclick={() => showToast('标题双击')}
          onRightButtonClick={onRightButtonClick}
        />
      </AkGroup>
      <AkGroup title="renderLeft/renderRight">
        <AkNavBar
          title="标题"
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
          renderLeft={() => <div className="exp-navBar-left">renderLeft</div>}
        />
        <AkNavBar
          title="标题"
          showBack
          showHome
          renderRight={() => (
            <div className="exp-navBar-right">renderRight</div>
          )}
        />
        <AkNavBar
          title="标题"
          showBack
          showHome
          renderLeft={() => (
            <div className="exp-navBar-left">
              <AkButton type="primary" icon="LeftOutlined" size="small">
                返回
              </AkButton>
            </div>
          )}
          renderRight={() => (
            <div className="exp-navBar-right">
              <AkButton type="primary" icon="MenuOutlined" size="small">
                菜单
              </AkButton>
            </div>
          )}
        />
      </AkGroup>
    </>
  )
}
