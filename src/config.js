const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "百川🌊的博客"; // 个人网站名字

const BLOG_URL = "https://www.xuyanblog.cn/"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/Xuyan-cmd"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api.dujin.org/bing/1920.php"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "技术分享" },
  { sortId: 2, title: "工具归档" },
  { sortId: 3, title: "新闻资讯" },
  { sortId: 4, title: "影视分享" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "黑苹果",
    subtitle: "苹果技术网站",
    url: "https://heipg.cn/",
    icon: "https://heipg.cn/favicon.ico"
  },
  {
    pageId: 2,
    sortId: 1,
    title: "Notion",
    subtitle: "Notion官方网址",
    url: "https://www.notion.so/",
    icon: "https://www.notion.so/images/favicon.ico"
  },
  {
    pageId: 3,
    sortId: 1,
    title: "123网盘",
    subtitle: "2T存储空间",
    url: "https://www.123pan.com/login",
    icon: "https://www.123pan.com/static/favicon.ico"
  },
  {
    pageId: 4,
    sortId: 1,
    title: "V2rayse",
    subtitle: "科学上网",
    url: "https://v2rayse.com/",
    icon: "https://v2rayse.com/favicon.ico"
  },
  {
    pageId: 5,
    sortId: 1,
    title: "CloudFlare",
    subtitle: "国外著名云服务平台",
    url: "https://www.cloudflare.com/zh-cn/",
    icon: ""
  },
  {
    pageId: 6,
    sortId: 1,
    title: "GoDaddy",
    subtitle: "著名的域名服务商",
    url: "https://www.godaddy.com/zh-sg",
    icon: "https://img6.wsimg.com/ux/favicon/apple-icon-76x76.png"
  },
  {
    pageId: 7,
    sortId: 1,
    title: "简道云",
    subtitle: "低代码开发平台",
    url: "https://www.jiandaoyun.com/",
    icon: "https://www.jiandaoyun.com/favicon.ico"
  },
  {
    pageId: 8,
    sortId: 1,
    title: "远景论坛",
    subtitle: "知名极客社区",
    url: "https://bbs.pcbeta.com/index.php",
    icon: "https://bbs.pcbeta.com/favicon.ico"
  },
  {
    pageId: 9,
    sortId: 1,
    title: "吾爱破解",
    subtitle: "国内最大的破解平台",
    url: "https://www.52pojie.cn/portal.php",
    icon: "https://static.52pojie.cn/static/image/common/logo.png"
  },
  {
    pageId: 10,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
    icon: ""
  },
  {
    pageId: 11,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
    icon: ""
  },
  {
    pageId: 12,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
    icon: ""
  },
  {
    pageId: 13,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
    icon: ""
  },
  {
    pageId: 14,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
    icon: ""
  },
  {
    pageId: 15,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
    icon: ""
  },
  {
    pageId: 16,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
    icon: ""
  },
  {
    pageId: 17,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
    icon: ""
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
