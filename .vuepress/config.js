module.exports = {
  "title": "森友交流会",
  "description": "一个集读书，学习，游戏，炒股于一体的交流平台",
  "dest": "public",
  "base": '/blog/',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "书柜",
        "icon": "reco-document",
        "link": "/books/"
        // "items": [
        //   {
        //     "text": "yuji的书柜",
        //     "link": "/books/yuji/"
        //   },
        //   {
        //     "text": "joy的书柜",
        //     "link": "/books/joy/"
        //   }
        // ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/yuji8023",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/books/yui/": [
        
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "雨悸",
        "desc": "老的博客地址",
        "avatar": "/yuji.png",
        "link": "https://yuji8023.github.io"
      }
    ],
    "logo": "/book.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // 侧边导航
    "sidebar": "auto",
    "lastUpdated": "最后更新时间",
    "author": "yuji",
    "authorAvatar": "/yuji.png",
    "record": "@design by yuji",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        //theme: ['koharu', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        theme: ['z16'],
        clean: true,
        messages: {
          welcome: '好久不见',
          home: '回到主页',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '山水有相逢，告辞'
        },
        modelStyle: {
          position: 'fixed',
          zIndex: 999,
          right: '65px',
          bottom: '10px',
          opacity: '0.6'
        },
      }
    ],
    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    [
      //图片放大插件 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      '@vuepress/plugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],
    [
      'flowchart'
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }],


  ]
}