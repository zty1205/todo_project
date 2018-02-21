<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container" id="box">
    <h2 class="h2 text-center">{{title}}</h2>
    <form role="form">
      <div class="form-group">
        <label for="username">用户名：</label>
        <input type="text" id="username" class="form-control" placeholder="请输入用户名" v-model="useName"/>
      </div>
      <div class="form-group">
        <label for="age">年　龄：</label>
        <input type="text" id="age" class="form-control" placeholder="请输入年龄" v-model="age"/>
      </div>
      <div class="form-group">
        <label >留　言：</label>
        <textarea class="form-control" rows="3" placeholder="请输入留言" v-model="text"></textarea>
      </div>
      <div class="form-group">
        <input type="button" value="添加" class="btn btn-primary" v-on:click="add">
        <input type="reset" value="重置" class="btn btn-danger">
      </div>
    </form>
    <hr/>
    <table class="table table-bordered table-hover">
      <caption class="h2 text-info">用户留言</caption>
      <tr class="text-danger">
        <th class="text-center">序号</th>
        <th class="text-center">名字</th>
        <th class="text-center">年龄</th>
        <th class="text-center">留言</th>
        <th class="text-center">删除</th>
      </tr>

      <tr class="text-center" v-for="(item,index) in myData">
        <td>{{index}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <!--弹出Popover框-->
        <td><button class="btn btn-info btn-xs"
                    data-container="body" data-toggle="popover" data-placement="top"
                    :data-content="item.text">{{item.text.substring(0,4)+'...'}}</button></td>
        <td><button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#moveItem" v-on:click="nItem=index">delete</button></td>
      </tr>

      <!--deleteAll-->
      <tr class="text-center" v-show="this.myData.length!=0">
        <td colspan="5"><button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#moveItem" v-on:click="nItem=-2">deleteAll</button></td>
      </tr>

      <tr v-show="this.myData.length==0">
        <td colspan="5" class="text-center text-muted">
          <p>暂无数据……</p>
        </td>
      </tr>
    </table>

    <!--弹出modal模态框-->
    <div role="dialog" class="modal fade" id="moveItem">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
            <h4 class="modal-title" v-if="nItem === -2">{{delAllMsg}}</h4>
            <h4 class="modal-title" v-else>{{delMsg}}</h4>
          </div>

          <div class="modal-body text-right">
            <button class="btn btn-primary btn-sm" data-dismiss="modal" v-on:click="deleteItem(nItem)">确认</button>
            <button class="btn btn-danger btn-sm" data-dismiss="modal">取消</button>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import Store from './store'
  //Popover
  $(function (){
    $("[data-toggle='popover']").popover({
      title: "留言",
      placement: "top",
    });
  });

export default {
  name: 'ComponentLists',
  data:function(){
    return {
      title: 'My ToDoLists',
      myData: Store.fetch(),
      useName: '',
      age: '',
      text: '',
      newItem: '',
      // nowItem： -1,
      nItem: -1,
      delMsg: '确认删除所选留言吗？',
      delAllMsg: '确认删除所有留言吗？'
    }
  },
  watch: {
    myData: {  //观察myData的变化 并处理
      handler:function (items) {
        Store.save(items)
      },
      deep:true  //必须的 深层存储 现改现存
    }
  },
  methods:{
    add:function () {
      if(this.useName ===''){
        window.alert('name is null');
        return;
      }
      if(this.text ===''){
        window.alert('your message is null');
        return;
      }
      this.myData.push({
        name: this.useName,
        age: this.age,
        text: this.text
      }),
        setTimeout(function () {
          location.reload()
        },200),
        this.useName='',
        this.age='',
        this.text=''
    },
    deleteItem:function (n) {
      if(n==-2){
        this.myData=[];
      }else{
        this.myData.splice(n,1);
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    font-size: 14px;
  }
  td{
    padding: 1px 0px;
  }
</style>
