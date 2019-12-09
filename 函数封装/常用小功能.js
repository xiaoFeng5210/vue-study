//随机色
<span :class="color"></span>
<script>
export default {
  computed:{
    color(){
      return `bg-${Math.round(Math.random()*10)}`
    }
  }
}
</script>

