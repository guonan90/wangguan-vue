<template>
  <div class="tcdz_content">

    <div class="tcdz_content_head">
      <span>透传地址</span>
    </div>

<!-- 中间数据 -->
    <div class="tcdz_content_middle table-responsive">
      <!-- <center> -->
      <table align="center" class="table">
      <!-- 中间数据-头部 -->
        <ul class="tcdz_content_middle_top">
          <li>选择</li>
          <li>路由地址</li>
          <li>透传地址</li></li>
          <li>请求方式(HTTP)</li>
          <li>操作</li>
        </ul>
        <!-- 中间数据-数据 -->
        <div class="tcdz_content_middle_shuju">
          <ul class="tcdz_content_middle_mes">
            <li><input type="checkbox"/></li>
            <li>digital</li>
            <li>/v2/user/activate</li>
            <li>POST</li>
            <li>
              <span class="glyphicon glyphicon-pencil"></span>
              <span class="glyphicon glyphicon-trash"></span>
            </li>
          </ul>
        </div>
      </table>
      <!-- </center> -->
    </div>

<!-- 页数及增加删除 -->
    <div class="tcdz_content_number">
      <!-- 增加删除 -->
      <div class="tcdz_content_number_adddel">  
        <button class="btn btn-success tcdz_content_number_add" type="submit" @click="add">增加</button>        
        <button class="btn btn-danger tcdz_content_number_del" type="submit">删除</button>
      </div>
      <!-- 页码 -->
      <div class="tcdz_content_number_page">
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
      <div class="tcdz_content_number_add_mes">

        <div>
          <h4>透传地址信息</h4>
          <hr>
        </div>

        <form action="">

          <div>
            <span>*路由地址</span>
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
            <span>*透传地址</span>
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
            <button class="btn btn-success" type="submit">提交</button>
            <button class="btn btn-danger" type="submit" @click="off">取消</button>
          </div>

        </form>

      </div>
      <div class="tcdz_content_number_add_bg"></div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'tcdz_content',
  data () {
    return {
      willShow:false
    }
  },
  methods: {
    add:function(){
      this.willShow = !this.willShow
    },
    off: function(){
      this.willShow = false;
    }
  }
}
</script>


<style scoped>
  .tcdz_content{
    width: 100%;
    height: 100%;
    padding:0 30px;
  }
  .tcdz_content_head{
    width: auto;
    height: 90px;
  }
  .tcdz_content_head span{
    font-size: 25px;
    color: #000;
    line-height: 90px;
    border-left: 5px solid #0083d3;
    padding-left: 20px;
  }

  /* 中间数据 */
  /* 中间数据-固定宽度 */
  .tcdz_content_middle ul li:nth-child(1){
    display: block;
    width: 33px;
  }
  .tcdz_content_middle ul li:nth-child(2){
    display: block;
    width: 350px;
  }
  .tcdz_content_middle ul li:nth-child(3){
    display: block;
    width: 600px;
  }
  .tcdz_content_middle ul li:nth-child(4){
    display: block;
    width: 200px;
  }
  .tcdz_content_middle ul li:nth-child(5){
    display: block;
    width: 50px;
  }
  /* 中间数据-头部 */
  .tcdz_content_middle_top{
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
  }
  .tcdz_content_middle li{
    /* float: left; */
    line-height: 60px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  /* 中间数据-数据 */
  .tcdz_content_middle_mes{
    width: 100%;
    height: 60px; 
    border-bottom: 1px solid #e4ebf1;
    overflow: hidden;
    color: #000;
    font-size: 16px;
    font-family: "微软雅黑";
    margin-left: -20px;
    display: flex;
  }

  /* 页数及增加删除 */
  .tcdz_content_number{
    width: 100%;
    height: 60px; 
    overflow: hidden;
  }
  /* 页数增加删除 */
  .tcdz_content_number_adddel{
    float: left;
    line-height: 20px;
    margin-left: 10px;
  }
  /* 页码 */
  .tcdz_content_number_page{
    float: right;
    margin-right: 20px;
    margin-top: -20px;
  }

   /* 弹出增加的数据 */
  .tcdz_content_number_add_bg{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    left: 0;
    /* display: none; */
  }
  .tcdz_content_number_add_mes{
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
  .tcdz_content_number_add_mes div{
    display: block;
    width: 100%;
    height: 50px;
    margin-left: 10px;
    text-align: left;
  }
  .tcdz_content_number_add_mes span{
    font-size: 14px;
    color: #333;
    margin: 10px;
  }
  .tcdz_content_number_add_mes form{
    margin-left: 20px;
  }
  .tcdz_content_number_add_mes label{
    font-weight: normal;
    color: #32a3ce;
    color: #858585;
  }
</style>
