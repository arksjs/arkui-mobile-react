import{_ as s,c as o,a as e,w as p,b as n,d as a,e as c,r as l,o as u}from"./app.c046e390.js";const x='{"title":"ImagePreview \u56FE\u7247\u9884\u89C8","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"onChange \u7684\u56DE\u8C03\u53C2\u6570","slug":"onchange-\u7684\u56DE\u8C03\u53C2\u6570"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"showImagePreview(object)","slug":"showimagepreview-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"components/ImagePreview.md"}',i={},k=n("h1",{id:"imagepreview-\u56FE\u7247\u9884\u89C8",tabindex:"-1"},[a("ImagePreview \u56FE\u7247\u9884\u89C8 "),n("a",{class:"header-anchor",href:"#imagepreview-\u56FE\u7247\u9884\u89C8","aria-hidden":"true"},"#")],-1),r=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  TaCell`),n("span",{class:"token punctuation"},","),a(`
  TaGroup`),n("span",{class:"token punctuation"},","),a(`
  TaImagePreview`),n("span",{class:"token punctuation"},","),a(`
  showImagePreview`),n("span",{class:"token punctuation"},","),a(`
  PopupOnVisibleStateChange`),n("span",{class:"token punctuation"},","),a(`
  PopupOnCancel`),n("span",{class:"token punctuation"},","),a(`
  showToast
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/index'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useRef"),n("span",{class:"token punctuation"},","),a(" useState "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'react'"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"showArgs"),a(),n("span",{class:"token punctuation"},"{"),a(`
  current`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),a(`
  showClose`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
  maskClosable`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
  callbackEvent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
  visibleEvent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"const"),a(" imageUrls "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-1.jpg'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-2.jpg'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-3.jpg'"),a(`
`),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"ExpImagePreview"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("current"),n("span",{class:"token punctuation"},","),a(" setCurrent"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("showClose"),n("span",{class:"token punctuation"},","),a(" setShowClose"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("maskClosable"),n("span",{class:"token punctuation"},","),a(" setMaskClosable"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("visible"),n("span",{class:"token punctuation"},","),a(" setVisible"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" callbackEvent "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" visibleEvent "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),a("args"),n("span",{class:"token operator"},":"),a(" showArgs "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setCurrent"),n("span",{class:"token punctuation"},"("),a("args"),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"setShowClose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a("showClose"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"setMaskClosable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a("maskClosable"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"setVisible"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`

    callbackEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a(`callbackEvent
    visibleEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a(`visibleEvent
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onVisibleStateChange"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"PopupOnVisibleStateChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" state "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("visibleEvent"),n("span",{class:"token punctuation"},"."),a("current"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onVisibleStateChange'"),n("span",{class:"token punctuation"},","),a(" state"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("state"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \u4E8B\u4EF6\u89E6\u53D1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("state "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'hidden'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      callbackEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),a(`
      visibleEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("url"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),a(" index"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("callbackEvent"),n("span",{class:"token punctuation"},"."),a("current"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'change'"),n("span",{class:"token punctuation"},","),a(" index"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5207\u6362\u5230\u7B2C "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \u5F20"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onCancel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"PopupOnCancel"),a(),n("span",{class:"token operator"},"="),a(" res "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("callbackEvent"),n("span",{class:"token punctuation"},"."),a("current"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'cancel'"),n("span",{class:"token punctuation"},","),a(" res"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5173\u95ED"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onCallApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"showImagePreview"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      urls`),n("span",{class:"token operator"},":"),a(" imageUrls"),n("span",{class:"token punctuation"},","),a(`
      showClose`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      imageHighRendering`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"success"),n("span",{class:"token operator"},":"),a(" res "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),a(" res"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u9884\u89C8\u56FE\u7247"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"isLink"),a(),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6307\u5B9A\u521D\u59CB\u56FE\u7247"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
            `),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
              current`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-2.jpg'"),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
          `),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C55\u793A\u5173\u95ED\u6309\u94AE"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" showClose"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4E8B\u4EF6\u76D1\u542C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("change/cancel"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" showClose"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(" callbackEvent"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onVisibleStateChange"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" visibleEvent"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("API"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showImagePreview"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onCallApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaImagePreview")]),a(`
        `),n("span",{class:"token attr-name"},"urls"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("imageUrls"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"value"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("current"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"visible"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("visible"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"maskClosable"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("maskClosable"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"showClose"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("showClose"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"imageHighRendering"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onCancel"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onCancel"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onVisibleStateChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onVisibleStateChange"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onUpdateVisible"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("v "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"setVisible"),n("span",{class:"token punctuation"},"("),a("v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onChange"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),d=c(`<h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TaImagePreview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;tantalum-ui-mobile-react&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h3 id="import-type" tabindex="-1">Import Type <a class="header-anchor" href="#import-type" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u7684\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span>
  ImagePreviewOnChange<span class="token punctuation">,</span>
  VisibleState<span class="token punctuation">,</span>
  PopupOnVisibleStateChange<span class="token punctuation">,</span>
  PopupOnCancel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;tantalum-ui-mobile-react&#39;</span>
</code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>value</td><td>string</td><td></td><td>\u5426</td><td>\u6307\u5B9A\u5F53\u524D\u663E\u793A\u7684\u56FE\u7247 url</td></tr><tr><td>urls</td><td>string[]</td><td></td><td>\u5426</td><td>\u56FE\u7247 url \u6570\u7EC4</td></tr><tr><td>showClose</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u663E\u793A\u6309\u94AE\u540E\u5C55\u793A\u5934\u90E8\u680F</td></tr><tr><td>navigationButtons</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875\u6309\u94AE</td></tr><tr><td>imageHighRendering</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u9AD8\u6E05\u6E32\u67D3\uFF0C\u5F00\u542F\u540E\u56FE\u7247\u6309\u7269\u7406\u5206\u8FA8\u7387\u5C55\u793A</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>onChange</td><td>\u56FE\u7247\u5207\u6362\u540E\u89E6\u53D1</td><td>( current: string, activeIndex: number, fromIndex: number )</td><td>ImagePreviewOnChange</td></tr><tr><td>onCancel</td><td>\u5173\u95ED\u65F6\u89E6\u53D1</td><td>( payload: { source: string } )</td><td>PopupOnCancel</td></tr><tr><td>onVisibleStateChange</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>( payload: { state: <a href="./ImagePreview.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> } )</td><td>PopupOnVisibleStateChange</td></tr><tr><td>onUpdateVisible</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>( visible: boolean \u662F\u5426\u663E\u793A )</td><td></td></tr></tbody></table><h3 id="onchange-\u7684\u56DE\u8C03\u53C2\u6570" tabindex="-1">onChange \u7684\u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#onchange-\u7684\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>current</td><td>string</td><td>\u5F53\u524D\u56FE\u7247\u7684 url</td></tr><tr><td>activeIndex</td><td>number</td><td>\u5F53\u524D\u56FE\u7247\u7684\u7D22\u5F15</td></tr><tr><td>fromIndex</td><td>number</td><td>\u4E0A\u6DA8\u56FE\u7247\u7684\u7D22\u5F15</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h2 id="showimagepreview-object" tabindex="-1">showImagePreview(object) <a class="header-anchor" href="#showimagepreview-object" aria-hidden="true">#</a></h2><p>\u9884\u89C8\u56FE\u7247\u3002</p><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>urls</td><td>string[]</td><td></td><td>\u662F</td><td>\u56FE\u7247\u5730\u5740\u6570\u7EC4</td></tr><tr><td>value</td><td>string</td><td></td><td>\u5426</td><td>\u9ED8\u8BA4\u663E\u793A\u7684\u56FE\u7247\u5730\u5740</td></tr><tr><td>showClose</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u663E\u793A\u6309\u94AE\u540E\u5C55\u793A\u5934\u90E8\u680F</td></tr><tr><td>navigationButtons</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875\u6309\u94AE</td></tr><tr><td>imageHighRendering</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u9AD8\u6E05\u6E32\u67D3\uFF0C\u5F00\u542F\u540E\u56FE\u7247\u6309\u7269\u7406\u5206\u8FA8\u7387\u5C55\u793A</td></tr><tr><td>success</td><td>(payload: { cancel: boolean }) =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u9009\u62E9\u9009\u9879\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>(e: Error) =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>() =&gt; void</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-js"><pre><code><span class="token function">showImagePreview</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">urls</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;https://cdn.fox2.cn/vfox/empty/default@2x.png&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;https://cdn.fox2.cn/vfox/empty/network@2x.png&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.fox2.cn/vfox/empty/network@2x.png&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,21);function g(h,b,m,v,f,w){const t=l("CodeDemo");return u(),o("div",null,[k,e(t,{name:"ImagePreview"},{default:p(()=>[r]),_:1}),d])}var y=s(i,[["render",g]]);export{x as __pageData,y as default};
