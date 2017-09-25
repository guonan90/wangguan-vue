<template>
  <div class="lyj_content">

    <div class="lyj_content_head">
      <span>路邮管理</span>
    </div>

<!-- 中间数据 -->
    <div class="lyj_content_middle table-responsive">
      <!-- <center> -->
      <table align="center" class="table">
      <!-- 中间数据-头部 -->
        <ul class="lyj_content_middle_top">
          <li>选择</li>
          <li>路径</li>
          <li>应用</li>
          <li>URL地址</li>
          <li>URL地址显示前缀</li>
          <li>是否支持重试</li>
          <li>过滤请求头信息</li>
          <li>是否启用</li>
          <li>操作</li>
        </ul>
        <!-- 中间数据-数据 -->
        <div class="lyj_content_middle_shuju">
          <ul class="lyj_content_middle_mes" v-for="a in arr" :key="a.id" >
            <li><input type="checkbox"/>{{a.retryable}}</li>
            <li>{{a.path}}</li>
            <li>{{a.stripPrefix}}</li>
            <li>{{a.requestMethod}}</li>
            <li>{{a.id}}</li>
            <li>{{a.serviceId}}</li>
            <li>{{a.url}}</li>
            <li>{{a.enabled}}</li>
            <li>{{a.sensitiveHeaders}}
              <span class="glyphicon glyphicon-pencil"></span>
              <span class="glyphicon glyphicon-trash lyj_content_middle_mes_del" @click="remove(a.cat_id)"></span>
            </li>
          </ul>
        </div>
      </table>
      <!-- </center> -->
    </div>

<!-- 页数及增加删除 -->
    <div class="lyj_content_number">
      <!-- 增加删除 -->
      <div class="lyj_content_number_adddel"> 
        <button class="btn btn-success lyj_content_number_add" type="submit" @click="add">增加</button>
        <button class="btn btn-danger lyj_content_number_del" type="submit" @click="remove">删除</button>
      </div>
      <!-- 页码 -->
      <div class="lyj_content_number_page">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li>
              <span href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>
            <li class="active"><span href="#">1</span></li>
            <li><span href="#">2</span></li>
            <li><span href="#">3</span></li>
            <li><span href="#">4</span></li>
            <li><span href="#">5</span></li>
            <li>
              <span href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
<router-view></router-view>
    </div>

<!-- 弹出增加的数据 -->
    <div v-show="willShow">
      <div class="lyj_content_number_add_mes">

        <div>
          <h4>修改路由信息</h4>
          <hr>
        </div>

        <form action="">

          <div>
            <span>*路径</span>
            <input type="text" class="btn btn-default">
          </div>

          <div>
            <span>*是否启用</span>
            <label><input name="1" type="radio">是</label>
            <label><input name="1" type="radio">否</label>
          </div>

          <div>
            <!-- 选择路由类型里：选择<服务>下面就要开启<*服务名称(id)>,同时关闭不能选择<*URL地址>和<*请求方法> -->
            <!-- 选择路由类型里：选择<URL>下面就要开启<*URL地址>和<*请求方法>,同时关闭不能选择<*服务名称(id)> -->
            <span>*选择路由类型</span>
            <span>
              <label><input name="2" type="radio">服务</label>
              <label><input name="2" type="radio">URL</label>
            </span>
          </div>

          <div>
            <span>*服务名称(id)</span>
            <span class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                请选择
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">digitalbox</a></li>
                <li><a href="#">ddd</a></li>
                <li><a href="#">processModule</a></li>
              </ul>
            </span>
          </div>

          <div>
            <span>*URL地址</span>
            <input type="text" class="btn btn-default">
          </div>

          <div>
            <span>*请求方法</span>
            <span class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                请选择
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">GET</a></li>
                <li><a href="#">POST</a></li>
                <li><a href="#">DELETE</a></li>
                <li><a href="#">PUT</a></li>
              </ul>
            </span>
          </div>

          <div>
            <span>*URL地址显示前缀</span>
            <label><input name="3" type="radio">是</label>
            <label><input name="3" type="radio">否</label>
          </div>

          <div>
            <span>*是否支持重试</span>
            <label><input name="4" type="radio">是</label>
            <label><input name="4" type="radio">否</label>
          </div>

          <div>
            <span>*请求头过滤</span>
            <input type="text" class="btn btn-default">
          </div>

          <div>
            <button class="btn btn-success" type="submit">提交</button>
            <button class="btn btn-danger" type="submit" @click="off">取消</button>
          </div>

        </form>

      </div>
      <div class="lyj_content_number_add_bg"></div>
    </div>

  </div>
</template>


<script>
// import jsonp from 'jsonp'
export default {
  name: 'lyj_content',
  data () {
    return {
      willShow: false,
      arr: []
    }
  },
  methods:{
        add:function(){
          this.willShow = !this.willShow;
        },
        off:function(){
          this.willShow = false;
        },          
        remove:function(id){
          console.log(1)//ajax
          location.reload();//刷新
        }
  },
  mounted () {
    var that = this;
    this.$ajax({
          method: 'get',
          url: 'http://127.0.0.1:8084/v1/route.json',
          crossDomain: true,
          data: {
            page: '1',
            size: '5'
          }
        }).then(function(res){
           that.arr = res.data.data;
          // console.log(res.data.data)           
          }) 
          .catch(function(err){
          // console.log(err)
          }) 
          
          
          
          
//   var html = '';
//   $.ajax({
//   		method: 'get',
//      url: 'http://127.0.0.1:8084/v1/route.json',
//      data: {
//          page: '1',
//          size: '5'
//      },
//      success:function (res) {
//      	var ln = res.data.data.length;
//      	for (var i = 0; i < ln; i ++) {
//      		html += '<ul>'
//					            + '<li><input type="checkbox" data-id="' + res.data.data.id + '"/></li>'
//					            + '<li>服务地址</li>'
//					            + '<li>www.baidubaidubaidubaidu.com</li>'
//					            + '<li>wojiaogoudan@163.com</li>'
//					            + '<li>sFgyhjjkmjlu</li>'
//					            + '<li>' + res.data.data.num + '</li>'
//					            + '<li>60</li>'
//					            + '<li>'
//					                + '<span class="glyphicon glyphicon-pencil" data-id="' + res.data.data.id + '"></span>'
//					                + '<span class="glyphicon glyphicon-trash" data-id="' + res.data.data.id + '"></span>'
//					            + '</li>'
//					        + '</ul>';
//      	};
//      	$('.clgl_list_ul').html(html);
//      }
//   })
    // jsonp(urls,null, function (err, data) {
    //     if (err) {
    //       console.error(err.message);
    //     } else {
    //       that.arr = data.datas;
    //     }
    // });
    // console.log(1)
  }
}

</script>


<style scoped>
  .lyj_content{
    width: 100%;
    height: 100%;
    padding:0 30px;
  }
  .lyj_content_head{
    width: auto;
    height: 90px;
  }
  .lyj_content_head span{
    font-size: 25px;
    color: #000;
    line-height: 90px;
    border-left: 5px solid #0083d3;
    padding-left: 20px;
  }

  /* 中间数据 */
  /* 中间数据-固定宽度 */
  .lyj_content_middle ul li:nth-child(1){
    display: block;
    width: 33px;
  }
  .lyj_content_middle ul li:nth-child(2){
    display: block;
    width: 200px;
  }
  .lyj_content_middle ul li:nth-child(3){
    display: block;
    width: 160px;
  }
  .lyj_content_middle ul li:nth-child(4){
    display: block;
    width: 200px;
  }
  .lyj_content_middle ul li:nth-child(5){
    display: block;
    width: 160px;
  }
  .lyj_content_middle ul li:nth-child(6){
    display: block;
    width: 130px;
  }
  .lyj_content_middle ul li:nth-child(7){
    display: block;
    width: 150px;
  }
  .lyj_content_middle ul li:nth-child(8){
    display: block;
    width: 100px;
  }
  .lyj_content_middle ul li:nth-child(9){
    display: block;
    width: 50px;
  }
  /* 中间数据-头部 */
  .lyj_content_middle_top{
    background: #f9fafb;
    width: 100%;
    height: 60px; 
    border-bottom: 1px solid #e4ebf1;
    overflow: hidden;
    color: #000;
    font-size: 16px;
    font-family: "微软雅黑";
    font-weight: bold;
    margin-left: -20px;
    display: flex;
    /* flex-direction: row; */
    /* justify-content: space-around; */
    /* align-items: center; */
  }
  .lyj_content_middle li{
    /* float: left; */
    line-height: 60px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  /* 中间数据-数据 */
  .lyj_content_middle_mes{
    width: 100%;
    height: 60px; 
    border-bottom: 1px solid #e4ebf1;
    overflow: hidden;
    color: #000;
    font-size: 16px;
    font-family: "微软雅黑";
    margin-left: -20px;
    display: flex;
    /* flex-direction: row; */
    /* justify-content: space-around; */
    /* align-items: center; */
  }

  /* 页数及增加删除 */
  .lyj_content_number{
    width: 100%;
    height: 60px; 
    overflow: hidden;
  }
  /* 页数的增加删除 */
  .lyj_content_number_adddel{
    float: left;
    line-height: 20px;
    margin-left: 10px;
  }
  /* 页码 */
  .lyj_content_number_page{
    float: right;
    margin-right: 20px;
    margin-top: -20px;
    cursor: pointer;    
  }
  

  /* 弹出增加的数据 */
  .lyj_content_number_add_bg{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    left: 0;
    /* display: none; */
  }
  .lyj_content_number_add_mes{
    width: 600px;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -300px;
    background: #fff;
    z-index: 1;
    padding: 10px;
    /* display: none; */
  }
  .lyj_content_number_add_mes div{
    display: block;
    width: 100%;
    height: 50px;
    margin-left: 10px;
    text-align: left;
  }
  .lyj_content_number_add_mes span{
    font-size: 14px;
    color: #333;
    margin: 10px;
  }
  .lyj_content_number_add_mes form{
    margin-left: 20px;
  }
  .lyj_content_number_add_mes label{
    font-weight: normal;
    color: #32a3ce;
    color: #858585;
  }
</style>
