<template>
  <div>
    <input type="text" :value="formatDate"/>
    <div v-if="isVisible">
      <div class="pannel-nav"></div>
      <div class="pannel-content">
        <div class="days">
          <div v-for="i in 6" :key="i">
            <span v-for="j in 7" :key="j">
              <!-- <span>{{ i }}</span>
              <span>{{ j }}</span> -->
              {{ visibleDays[(i - 1) * 7 + (j - 1)].getDate() }}
            </span>
          </div>
        </div>
      </div>
      <div class="pannel-footer"></div>
    </div>
  </div>
</template>
<script>
import * as utils from '../../utils/date.js';
export default {
  name: 'DatePicker',
  props: {
    value: {
      type: Date,
      default: () => new Date,
    }
  },
  data() {
    return {
      isVisible: true,
    }
  },
  mounted() {
    this.visibleDays;
  },
  computed: {
    visibleDays() {
      let { year, month } = utils.getYearMonthDay(this.value);
      // 获取当月的第一天
      let currentFirstDay = utils.getDate(year, month, 1);
      let week = currentFirstDay.getDay();
      let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24;
      let arr = [];
      for(let i = 0; i < 42; i++){
        arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24));
      }
      return arr;
    },
    formatDate() {
      let { year, month, day } = utils.getYearMonthDay(this.value);
      return `${year}-${month + 1}-${day}`
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>