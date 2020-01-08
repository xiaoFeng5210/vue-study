// 首先一定要放在一个数组里,然后利用moment库的isAfter来判断日期的先后问题
const sort = (a: any, b: any) =>
      moment(a.create_time).isAfter(b.create_time);
arr.sort((a,b) => {
   const isAfter = sort(a,b)
   // 判断是升序还是降序状态
   if (timeUp) {
      return isAfter ? 1 : -1;
   } else {
      return isAfter ? -1 : 1;
   }
})
