//导出下载文件的方法,参数是请求后的数据.
 const handleExport = (data)=>{
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `导出订单.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
//异步下载的方法,里面的fileIndex是需要传进来的参数
    //这是用来轮询下载状态的函数
    poll(fileIndex){
      this.axios.get('/info/export/load/' + fileIndex).then((res)=>{
        this.exprotedCount = res.data.exportedCount
        if(!res.data.completed){
          setTimeout(()=>{
            this.poll(fileIndex)
          },3000)
        }else{
          this.exprotedCount = res.data.exportedCount
          this.$Spin.hide();
          this.exprotedCount = 0
          this.download(fileIndex)
        }
      })
    },
    //下载订单函数
    download(fileIndex){
      var a = document.createElement('a');
      a.setAttribute('href','pm/info/export/download/' + fileIndex + '?access_token=' + this.$store.getters.access_token.access_token );
      a.setAttribute('style', 'display:none');
      a.setAttribute('target', '_blank');
      a.setAttribute('download', '导出订单.csv'); //注意，一定要加这个
      document.body.appendChild(a);
      a.click();
      a.parentNode.removeChild(a);
      // window.open('pm/info/export/download/' + fileIndex + '?access_token=' + this.$store.getters.access_token.access_token)
    },
    
    
