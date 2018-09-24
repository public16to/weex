<template>
  <div class="wrapper">
    <wxc-page-calendar :date-range="dateRange"
                       :animationType="animationType"
                       :selected-date="selectedDate"
                       :selected-note="selectedNote"
                       :is-range="isRange"
                       :minibar-cfg="minibarCfg"
                       :desc-list="descList"
                       ref="wxcPageCalendar">
    </wxc-page-calendar>
  </div>
</template>
<script>
  import WxcPageCalendar from '../weex-ui/packages/wxc-page-calendar';
  export default {
    components: {
      WxcPageCalendar
    },
    data: () => ({
      animationType: 'push',
      selectedDate: ['2018-10-01'],
      isRange: false,
      calendarTitle: '选择日期',
      dateRange: ['2018-10-01', '2019-10-01'],
      selectedNote: ['选中'],
      minibarCfg: {
        title: '日期选择'
      },
      descList: [
      ]
    }),
    methods: {
    }
  };
</script>