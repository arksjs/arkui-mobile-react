import{_ as t,c as e,a as o,w as p,b as a,d as n,e as c,r as l,o as u}from"./app.c046e390.js";const S='{"title":"Slider \u6ED1\u5757\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/Slider.md"}',k={},i=a("h1",{id:"slider-\u6ED1\u5757\u9009\u62E9\u5668",tabindex:"-1"},[n("Slider \u6ED1\u5757\u9009\u62E9\u5668 "),a("a",{class:"header-anchor",href:"#slider-\u6ED1\u5757\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),r=a("p",null,"\u6CE8\uFF1A",-1),d=a("ul",null,[a("li",null,[n("\u652F\u6301\u8868\u5355\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 "),a("a",{href:"./Form.html"},"Form"),n("\u3002")])],-1),g=a("div",{class:"language-tsx"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" TaSlider"),a("span",{class:"token punctuation"},","),n(" TaCell"),a("span",{class:"token punctuation"},","),n(" TaGroup"),a("span",{class:"token punctuation"},","),n(" showToast "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'@/index'"),n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" useState "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'react'"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token keyword"},"function"),n(),a("span",{class:"token function"},"ExpSlider"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("value"),a("span",{class:"token punctuation"},","),n(" setValue"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("value2"),a("span",{class:"token punctuation"},","),n(" setValue2"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("value3"),a("span",{class:"token punctuation"},","),n(" setValue3"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"20"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("value4"),a("span",{class:"token punctuation"},","),n(" setValue4"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"30"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("value5"),a("span",{class:"token punctuation"},","),n(" setValue5"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"40"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("value6"),a("span",{class:"token punctuation"},","),n(" setValue6"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"50"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("value7"),a("span",{class:"token punctuation"},","),n(" setValue7"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"60"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("value8"),a("span",{class:"token punctuation"},","),n(" setValue8"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"70"),a("span",{class:"token punctuation"},")"),n(`

  `),a("span",{class:"token keyword"},"function"),n(),a("span",{class:"token function"},"onInput"),a("span",{class:"token punctuation"},"("),n("value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token builtin"},"number"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token function"},"showToast"),a("span",{class:"token punctuation"},"("),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token string"},"Input value: "),a("span",{class:"token interpolation"},[a("span",{class:"token interpolation-punctuation punctuation"},"${"),n("value"),a("span",{class:"token interpolation-punctuation punctuation"},"}")]),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token punctuation"},"}"),n(`

  `),a("span",{class:"token keyword"},"function"),n(),a("span",{class:"token function"},"onChange"),a("span",{class:"token punctuation"},"("),n("value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token builtin"},"number"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token function"},"showToast"),a("span",{class:"token punctuation"},"("),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token string"},"Change value: "),a("span",{class:"token interpolation"},[a("span",{class:"token interpolation-punctuation punctuation"},"${"),n("value"),a("span",{class:"token interpolation-punctuation punctuation"},"}")]),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token punctuation"},"}"),n(`

  `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"("),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u57FA\u7840\u7528\u6CD5"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaCell")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-slider-box"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"label"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token string"},"'value: '"),n(),a("span",{class:"token operator"},"+"),n(" value"),a("span",{class:"token punctuation"},"}")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaSlider")]),n(),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("value"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token attr-name"},"onInput"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("v "),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token function"},"setValue"),a("span",{class:"token punctuation"},"("),n("v"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaCell")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u663E\u793A\u6570\u503C showValue=true"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaCell")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-slider-box"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"label"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token string"},"'value: '"),n(),a("span",{class:"token operator"},"+"),n(" value2"),a("span",{class:"token punctuation"},"}")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaSlider")]),n(),a("span",{class:"token attr-name"},"showValue"),n(),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("value2"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token attr-name"},"onInput"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("v "),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token function"},"setValue2"),a("span",{class:"token punctuation"},"("),n("v"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaCell")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u81EA\u5B9A\u4E49\u989C\u8272 color=#ff7875"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaCell")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-slider-box"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"label"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token string"},"'value: '"),n(),a("span",{class:"token operator"},"+"),n(" value3"),a("span",{class:"token punctuation"},"}")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaSlider")]),n(`
            `),a("span",{class:"token attr-name"},"color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("#ff7875"),a("span",{class:"token punctuation"},'"')]),n(`
            `),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("value3"),a("span",{class:"token punctuation"},"}")]),n(`
            `),a("span",{class:"token attr-name"},"showValue"),n(`
            `),a("span",{class:"token attr-name"},"onInput"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("v "),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token function"},"setValue3"),a("span",{class:"token punctuation"},"("),n("v"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}")]),n(`
          `),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaCell")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u8BBE\u7F6E\u6B65\u8FDB\uFF08step=5\uFF09"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaCell")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-slider-box"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"label"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token string"},"'value: '"),n(),a("span",{class:"token operator"},"+"),n(" value4"),a("span",{class:"token punctuation"},"}")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaSlider")]),n(`
            `),a("span",{class:"token attr-name"},"showValue"),n(`
            `),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("value4"),a("span",{class:"token punctuation"},"}")]),n(`
            `),a("span",{class:"token attr-name"},"step"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
            `),a("span",{class:"token attr-name"},"onInput"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("v "),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token function"},"setValue4"),a("span",{class:"token punctuation"},"("),n("v"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}")]),n(`
          `),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaCell")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u9650\u5236\u8303\u56F4 min=40 & max=140"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaCell")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-slider-box"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"label"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token string"},"'value: '"),n(),a("span",{class:"token operator"},"+"),n(" value5"),a("span",{class:"token punctuation"},"}")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaSlider")]),n(`
            `),a("span",{class:"token attr-name"},"showValue"),n(`
            `),a("span",{class:"token attr-name"},"min"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("40"),a("span",{class:"token punctuation"},'"')]),n(`
            `),a("span",{class:"token attr-name"},"max"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("140"),a("span",{class:"token punctuation"},'"')]),n(`
            `),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("value5"),a("span",{class:"token punctuation"},"}")]),n(`
            `),a("span",{class:"token attr-name"},"onInput"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("v "),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token function"},"setValue5"),a("span",{class:"token punctuation"},"("),n("v"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}")]),n(`
          `),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaCell")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u7981\u7528"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaCell")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-slider-box"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"label"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token string"},"'value: '"),n(),a("span",{class:"token operator"},"+"),n(" value6"),a("span",{class:"token punctuation"},"}")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaSlider")]),n(),a("span",{class:"token attr-name"},"disabled"),n(),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("value6"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaCell")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u4E8B\u4EF6\u76D1\u542C"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaCell")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-slider-box"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"label"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("input"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaSlider")]),n(),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("value7"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token attr-name"},"onInput"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("onInput"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaCell")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaCell")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-slider-box"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"label"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("change"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaSlider")]),n(),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("value8"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token attr-name"},"onChange"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("onChange"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaCell")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token punctuation"},")"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])])],-1),m=c("",7);function v(x,h,b,T,f,_){const s=l("CodeDemo");return u(),e("div",null,[i,r,d,o(s,{name:"Slider"},{default:p(()=>[g]),_:1}),m])}var C=t(k,[["render",v]]);export{S as __pageData,C as default};
