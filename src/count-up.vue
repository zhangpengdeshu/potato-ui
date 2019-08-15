<script>
import { CountUp } from "countup.js";
const easingFn = function(t, b, c, d) {
  var ts = (t /= d) * t;
  var tc = ts * t;
  return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
};
export default {
  name: "CountUp",
  mounted() {
    this.create();
  },
  props: {
    // 创建元素的标签
    tag: {
      type: String,
      default: "span"
    },
    // 动画加载时长
    duration: {
      type: Number,
      default: 3
    },
    // 手动控制什么时候开始数字动画
    autoStart: {
      type: Boolean,
      default: true
    },
    startVal: {
      type: Number,
      required: false,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  methods: {
    create() {
      // 如果已经存在就不再重复加载
      if (this._countUp) return;
      // 合并参数
      const options = Object.assign(
        {
          startVal: this.startVal, //开始时的数字
          duration: this.duration, // 动画时长
          easingFn, // 动画加载方式 easeIn
          separator: "", // 千分符号
          prefix: "", // 前置图标 ￥10000
          suffix: "" // 后置图标
        },
        this.options
      );
      // 创建countUp实例
      this._countUp = new CountUp(this.$el, this.endVal, options);
      if (this._countUp.error) return;
      // 加载
      this.$nextTick(() => {
        if (this.autoStart) {
          this._countUp.start();
        }
      });
    }
  },
  render(h) {
    return h(this.tag, {}, [this.startVal]);
  },
  watch: {
    autoStart(val) {
      if (val) {
        this._countup.start();
      }
    },
    endVal(val) {
      if (this._countup) {
        this._countup.update(val);
      }
    }
  },
  beforeDestroy() {
    this._countUp = null;
  }
};
</script>