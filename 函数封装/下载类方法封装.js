//最简单的window open方法
window.open('url')
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
    },
   // xhr 下载  
   downFile(id) {
    const xhr = new XMLHttpRequest();
    this.fielObj = {
      projectId: this.projectId,
      assetId: id
    };
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const A = this;
    xhr.open('post', 'api/project/getAssetFile');
    xhr.setRequestHeader('Authorization', 'Bearer ' + JSON.parse(sessionStorage.getItem('ele3d-client-authenticationtoken')));
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.responseType = 'blob';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const blob = new Blob([xhr.response]);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.style.display = 'none';
        const downlaodFileName = xhr.getResponseHeader('Content-Disposition').split('=')[1];
        link.setAttribute('download', decodeURIComponent(downlaodFileName));
        link.click();
        window.URL.revokeObjectURL(url);
        A.toastr.success('文件下载成功！');
      }
    };
    // 发送请求
    xhr.send(JSON.stringify(this.fielObj));
  }
  
    
    
