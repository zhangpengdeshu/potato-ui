---
title: Button
---

# 按钮
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <po-button>{{button}}</po-button>
  <po-button type="primary">主色</po-button>
  <po-button type="success">成功</po-button>
  <po-button type="info">提示</po-button>
</template>


### 使用
```html
<po-button>默认</po-button>
<po-button type="primary">主色</po-button>
<po-button type="success">成功</po-button>
<po-button type="info">提示</po-button>
```