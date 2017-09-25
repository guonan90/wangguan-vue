<template>
  <div class="kfz_content">

    <div class="kfz_content_head">
      <span>开发者管理</span>
    </div>

<!-- 中间数据 -->
    <div class="kfz_content_middle table-responsive">
      <!-- <center> -->
      <table align="center" class="table">
      <!-- 中间数据-头部 -->
        <ul class="kfz_content_middle_top">
          <li>选择</li>
          <li>用户ID</li>
          <li>备注</li>
          <li>AccessKey</li>
          <li>SecretKey</li>
          <li>用户类型</li>
          <li>服务名称(服务提供)</li>
          <li>操作</li>
        </ul>
        <!-- 中间数据-数据 -->
        <div class="kfz_content_middle_shuju">
          <ul class="kfz_content_middle_mes">
            <li><input type="checkbox"/></li>
            <li>123456</li>
            <li>zhaozixing</li>
            <li>ba466adc34300ale4</li>
            <li>19ecfbd3057491f8b0d61dc34cacb36</li>
            <li>应用开发者</li>
            <li>digitalbox</li>
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
    <div class="kfz_content_number">
      <!-- 增加删除 -->
      <div class="kfz_content_number_adddel">  
        <button class="btn btn-success kfz_content_number_add" type="submit" @click="add">增加</button>        
        <button class="btn btn-danger kfz_content_number_del" type="submit">删除</button>
      </div>
      <!-- 页码 -->
      <div class="kfz_content_number_page">
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
      <div class="kfz_content_number_add_mes">

        <div>
          <h4>开发者信息</h4>
          <hr>
        </div>

        <form action="">

          <div>
            <span>*用户中心UID</span>
            <input type="text" class="btn btn-default">
          </div>

          <div>
            <span>*备注</span>
            <input type="text" class="btn btn-default">
          </div>
          
          <div>
            <span>*用户类型(id)</span>
            <span class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                请选择
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">服务开发者</a></li>
                <li><a href="#">应用开发者</a></li>
              </ul>
            </span>
          </div>

          <div>
            <span>*服务名称</span>
            <input type="text" class="btn btn-default">
          </div>

          <div>
            <button class="btn btn-success" type="submit">提交</button>
            <button class="btn btn-danger" type="submit" @click="off">取消</button>
          </div>

        </form>

      </div>
      <div class="kfz_content_number_add_bg"></div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'kfz_content',
  data () {
    return {
      willShow: false
    }
  },
  methods:{
    add:function(){
      this.willShow = !this.willShow;
    },
    off:function(){
      this.willShow = false;
    }
  }
}
</script>


<style scoped>
  .kfz_content{
    width: 100%;
    height: 100%;
    padding:0 30px;
  }
  .kfz_content_head{
    width: auto;
    height: 90px;
  }
  .kfz_content_head span{
    font-size: 25px;
    color: #000;
    line-height: 90px;
    border-left: 5px solid #0083d3;
    padding-left: 20px;
  }

  /* 中间数据 */
  /* 中间数据-固定宽度 */
  .kfz_content_middle ul li:nth-child(1){
    display: block;
    width: 33px;
  }
  .kfz_content_middle ul li:nth-child(2){
    display: block;
    width: 110px;
  }
  .kfz_content_middle ul li:nth-child(3){
    display: block;
    width: 110px;
  }
  .kfz_content_middle ul li:nth-child(4){
    display: block;
    width: 240px;
  }
  .kfz_content_middle ul li:nth-child(5){
    display: block;
    width: 340px;
  }
  .kfz_content_middle ul li:nth-child(6){
    display: block;
    width: 150px;
  }
  .kfz_content_middle ul li:nth-child(7){
    display: block;
    width: 200px;
  }
  .kfz_content_middle ul li:nth-child(8){
    display: block;
    width: 50px;
  }
  /* 中间数据-头部 */
  .kfz_content_middle_top{
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
  .kfz_content_middle li{
    /* float: left; */
    line-height: 60px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  /* 中间数据-数据 */
  .kfz_content_middle_mes{
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
  .kfz_content_number{
    width: 100%;
    height: 60px; 
    overflow: hidden;
  }
  /* 页数增加删除 */
  .kfz_content_number_adddel{
    float: left;
    line-height: 20px;
    margin-left: 10px;
  }
  /* 页码 */
  .kfz_content_number_page{
    float: right;
    margin-right: 20px;
    margin-top: -20px;
  }


  /* 弹出增加的数据 */
  .kfz_content_number_add_bg{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    left: 0;
    /* display: none; */
  }
  .kfz_content_number_add_mes{
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
  .kfz_content_number_add_mes div{
    display: block;
    width: 100%;
    height: 50px;
    margin-left: 10px;
    text-align: left;
  }
  .kfz_content_number_add_mes span{
    font-size: 14px;
    color: #333;
    margin: 10px;
  }
  .kfz_content_number_add_mes form{
    margin-left: 20px;
  }
  .kfz_content_number_add_mes label{
    font-weight: normal;
    color: #32a3ce;
    color: #858585;
  }
</style>
