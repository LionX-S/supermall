<template>
  <div id="datailtable">
    <table>
      <tr v-for="(items,index) in GoodsPara" :key="index">
        <td class="short">{{items.key}}</td>
        <td class="length">{{items.value}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(items,index) in GoodsSize" :key="index">
        <td v-for="(tds,indey) in items" :key="indey">{{tds}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailTable",
    props: {
      GoodsPara: {
        type: Array,
        default() {
          return []
        }
      },
      GoodsSize: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #datailtable{
    padding: 10px;
  }
  table{
    width: 100%;
  }
  tr {
    display: flex;
    border-bottom: 1px solid #cccccc;
    height: 40px;
    line-height: 40px;
  }
  td{
    flex: 1;
    text-align: center;
    color: var(--color-high-text);
  }
  .short{
    flex: 1;
  }
  .length{
    flex: 4;
  }
</style>
