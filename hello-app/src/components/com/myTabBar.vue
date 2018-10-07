<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="iconFont"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <div class="item-container" :style="contentStyle">
        <MyTask></MyTask>
    </div>
    <div class="item-container" :style="contentStyle">
      <MyCalendar></MyCalendar>
    </div>
    <div class="item-container" :style="contentStyle">
      <MySet></MySet>
    </div>
  </wxc-tab-bar>
</template>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
  }
</style>
<script>
  import WxcTabBar from '../../weex-ui/packages/wxc-tab-bar';
  import Utils  from '../../weex-ui/packages/utils/index.js';
  import MyCalendar from '../myCalendar.vue'; 
  import MyTask from '../myTask.vue'; 
  import MySet from '../mySet.vue';
  var Config={
    // 使用 iconFont 模式的tab title配置
    tabIconFontTitles: [
      {
        title: '任务',
        codePoint: '\ue732'
      },
      {
        title: '日历',
        codePoint: '\ue6de'
      },
      {
        title: '我的',
        codePoint: '\ue716',
        //badge: 5
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
       iconFontUrl: 'http://g.16to.com/font/iconfont.ttf'
    }
  };
  export default {
    components: { 
      WxcTabBar,
      MyCalendar,
      MyTask,
      MySet
    },
    data: () => ({
      tabTitles: Config.tabIconFontTitles,
      tabStyles: Config.tabIconFontStyles,
      contentStyle:{}
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight) + 'px' };
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
      }
    }
  };
</script>