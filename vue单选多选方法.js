//v-for 实现单选/多选/反选/全选/全不选
<li v-for="(item,index) in radioList" :key="index" :class="selectedNum==index?'active':''" @click="select(index)">{{item}}</li>
 //首选定义一个selectedNum,当我们点击item时，便把这个selectedNum更改为我们所点击的item的index，然后每个item上加入判断selectedNum是不是等于自己，如果等于则选中。
 data() {
    return {
      selectedNum:"",
      radioList: ["某个元素", "某个元素", "某个元素", "某个元素", "某个元素"],
    };
  },
methods: {
    //单选
    select(i) {
      this.selectedNum = i;
    },
  }
  
  //多选
  <li v-for="(item,index) in checkboxList" :key="item" :class="checkbox.includes(index)?'active':''" @click="check(index)">{{item}}</li>
  
  data(){
     checkbox:[]
  }
  check(i){
      var idx = this.checkbox.indexOf(i)
      if(idx>-1){
          //如果已经选中,checkbox里有了,那就取消
          this.checkbox.splice(idx,1)
      }else{
          //否则,就添加进去
          this.checkbox.push(i)
       }
  }
  
  
 ------全选------
 checkAll(){
     //获取整个数据的长度
     var long = this.checkboxLists.length
     for(let i=0; i<long;i++){
         this.checkbox.push(i)
     }
     //取消全选
     clearCheckbox(){
         this.checkbox=[]
     }
 }
