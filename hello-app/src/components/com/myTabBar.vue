<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="iconFont"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <div class="item-container" :style="contentStyle"><text>首页</text></div>
    <div class="item-container" :style="contentStyle"><text>特别推荐</text></div>
    <div class="item-container" :style="contentStyle"><text>消息中心</text></div>
    <div class="item-container" :style="contentStyle"><text>我的主页</text></div>
  </wxc-tab-bar>
</template>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }
</style>
<script>
  import WxcTabBar from '../../weex-ui/packages/wxc-tab-bar';
  import Utils  from '../../weex-ui/packages/utils/index.js';
  var Config={
    // 使用 iconFont 模式的tab title配置
    tabIconFontTitles: [
      {
        title: '首页',
        codePoint: '\ue623'
      },
      {
        title: '特别推荐',
        codePoint: '\ue608'
      },
      {
        title: '消息中心',
        codePoint: '\ue752',
        badge: 5
      },
      {
        title: '我的主页',
        codePoint: '\ue601',
        dot: true
      }
    ],
    tabIconFontStyles: {
      bgColor: '#FFFFFF',
      titleColor: '#666666',
      activeTitleColor: '#3D3D3D',
      activeBgColor: '#FFFFFF',
      isActiveTitleBold: true,
      width: 160,
      height: 120,
      fontSize: 24,
      textPaddingLeft: 10,
      textPaddingRight: 10,
      iconFontSize: 50,
      iconFontMarginBottom: 8,
      iconFontColor: '#333333',
      activeIconFontColor: 'red',
       iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
    }
  };
  export default {
    components: { WxcTabBar },
    data: () => ({
      tabTitles: Config.tabIconFontTitles,
      tabStyles: Config.tabIconFontStyles
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
      }
    }
  };
</script>