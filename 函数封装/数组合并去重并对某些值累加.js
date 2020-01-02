combineObjectInList (arr, item, list) {   //数组去除重复，item为重复判定项，list为重复记录需要累加的值的数组
      var obj = {}
      var a = []
      for (var i in arr) {
        if (!obj[arr[i][item]]) {
          obj[arr[i][item]] = this.copyObj(arr[i])  //数组克隆
        } else if (!!obj[arr[i][item]]) {
          for (var j in list) {
            obj[arr[i][item]][list[j]] = obj[arr[i][item]][list[j]] + parseFloat(arr[i][list[j]])
          }
        }
      }
      for (var k in obj) {
        a.push(obj[k])
      }
      return a
    }

copyObj (obj) {          //obj arr 对象的克隆（区分于指针赋值）
      if (obj.constructor == Array) {
        var a = []
        for (var i in obj) {
          a.push(obj[i])
        }
        return a
      } else {
        var o = {}
        for (var i in obj) {
          o[i] = obj[i]
        }
        return o
      }

    }
