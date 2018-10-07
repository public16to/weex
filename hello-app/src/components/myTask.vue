<template>
  <div class="content">
	  <wxc-minibar title="任务"
                   background-color="#FFC900"
                   text-color="#3D3D3D"
                   right-button="http://g.16to.com/img/switch.png"
                   left-button=""
                   :use-default-return="false"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick">
    </wxc-minibar>
    <scroller class="scroller" :style="contentStyle"> 
    <div class="list" >
      <wxc-cell title="任务1"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务2"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务3"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务4"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务5"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务6"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务7"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务8"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务9"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务10"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务11"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务12"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务13"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务14"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务15"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务16"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务17"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
      <wxc-cell title="任务18"
                :has-arrow="false"
                :has-top-border="true">
      </wxc-cell>
    </div>
  </scroller>
  </div>
</template>
<script>
  import WxcMinibar from '../weex-ui/packages/wxc-minibar';
  import WxcCell from '../weex-ui/packages/wxc-cell';
  import Utils  from '../weex-ui/packages/utils/index.js';
  const modal = weex.requireModule('modal');
  export default {
    components: { 
      WxcMinibar,
      WxcCell
    },
    data: () => ({
      contentStyle:{}
    }),
    methods: {
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      }
    },
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      this.contentStyle = {height:(tabPageHeight - 100) + 'px' };
      //modal.toast({ 'message':this.contentStyle, 'duration': 1 });
    }
  }
</script>
<style>
.content{
}
.list{
}
.scroller{
  width: 750px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  flex-grow: 1;
}
</style>