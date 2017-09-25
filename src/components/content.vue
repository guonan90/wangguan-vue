<template>
<div class="content">

<!-- 头部 -->
    <div class="content-top">
        <h2 class="content-top-left">智能加密路由网关</h2>
        <div class="content-top-right">
            <div class="content-top-right-touxinag"><img src="../assets/touxiang.png" alt="头像"></div>
            <div class="content-top-right-mingcheng"><span>admin</span></div>
            <router-link to="/login" class="content-top-right-tuichu">
                <img src="../assets/tuichu.png" alt="退出">
            </router-link>

        </div>
    </div>

<!-- 下半部 -->
    <div class="content-bottow">
        <!-- 左侧导航 -->
        <div class="content-left">

            <!-- 左侧导航-路由设置 -->
            <div class="content-left-lysz">
                <div class="content-left-lysz-fu">路由设置</div>
                <router-link to="/content/lyj" class="content-left-lysz-zi">路由设置</router-link>
            </div>

            <!-- 左侧导航-开发者管理 -->
            <div class="content-left-kfzgl">
                <div class="content-left-kfzgl-fu">开发者管理</div>
                <router-link to="/content/kfz" class="content-left-kfzgl-zi">开发者管理</router-link>
            </div>

            <!-- 左侧导航-服务设置 -->
            <div class="content-left-fwsz">
                <div class="content-left-fwsz-fu">服务设置</div>
                <router-link to="/content/dzcj" class="content-left-fwsz-zi">地址采集</router-link>
                <router-link to="/content/tcdz" class="content-left-fwsz-zi">透传地址</router-link>
            </div>

            <!-- 左侧导航-权限设置 -->
            <div class="content-left-qxsz">
                <div class="content-left-qxsz-fu">权限设置</div>
                <router-link to="/content/zygl" class="content-left-qxsz-zi">资源管理</router-link>
                <router-link to="/content/sqfw" class="content-left-qxsz-zi">授权服务</router-link>
            </div>

            <!-- 左侧导航-限速设置 -->
            <div class="content-left-xssz">
                <div class="content-left-xssz-fu">限速设置</div>
                <router-link to="/content/clgl" class="content-left-xssz-zi">策略管理</router-link>
            </div>

        </div>

        <!-- 右侧数据 -->
        <div class="content-right">
            <router-view></router-view>
        </div>
    </div>

</div>
</template>


<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
    .content{
        width: 100%;
        height: 100%;
        background: #0083d3;
        overflow: hidden;
        float: left;
    }

    /* 头部 */
    .content-top{
        width: 100%;
        height: 70px;
        margin: 0 auto;
        text-align: center;
        overflow: hidden;
    }
    .content-top-left{
        font-size: 25px;
        color: #fff;
        float: left;
        margin-left: 20px;
        text-align: center;
        cursor: pointer;
    }
    .content-top-right{
        font-size: 10px;
        color: #fff;
        float: right;    
    }
    .content-top-right-touxinag{
        float: left;
        text-align: center;
        margin: 10px 10px 0 0;
        cursor: pointer;
    }
    .content-top-right-mingcheng{
        float: left;
        text-align: center;
        margin: 24px 10px 0 0;
        cursor: pointer;
    }
    .content-top-right-tuichu{
        float: left;
        text-align: center;
        margin: 24px 20px 0 0;
    }


    /* 下半部 */
    .content-bottow{
        width: 100%;
        height: 100%;
        margin:0 auto;
        overflow: hidden;
    }

    /* 左侧导航 */
    .content-left{
        width: 240px;
        height: 100%;
        background: #0083d3;
        float: left;
        color: #fff;
    }
    /* 左侧导航-路由设置 */
    .content-left-lysz{
        width: 240px;
        height: 92px;
    }
    .content-left-lysz-fu{
        width: 240px;
        height: 46px;
        border-left: 8px solid #d5d5d5;
        background: #016daf;
        font-size: 20px;
        text-align: center;
        line-height: 46px;
        cursor: pointer;
    }
    .content-left-lysz-zi{
        width: 240px;
        height: 46px;
        color: #fff;
        display: block;
        text-align: center;
        line-height: 46px;
        font-size: 16px;
    }
    /* 左侧导航-开发者管理 */
    .content-left-kfzgl{
        width: 240px;
        height: 92px;
    }
    .content-left-kfzgl-fu{
        width: 240px;
        height: 46px;
        border-left: 8px solid #d5d5d5;
        background: #016daf;
        font-size: 20px;
        line-height: 46px;
        text-align: center;
        cursor: pointer;
    }
    .content-left-kfzgl-zi{
        width: 240px;
        height: 46px;
        color: #fff;
        display: block;
        text-align: center;
        line-height: 46px;
        font-size: 16px;
    }
    /* 左侧导航-服务设置 */
    .content-left-fwsz{
        width: 240px;
        height: 138px;
    }
     .content-left-fwsz-fu{
        width: 240px;
        height: 46px;
        border-left: 8px solid #d5d5d5;
        background: #016daf;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
        line-height: 46px;
    }
    .content-left-fwsz-zi{
        width: 240px;
        height: 46px;
        color: #fff;
        display: block;
        text-align: center;
        line-height: 46px;
        font-size: 16px;
    }
    /* 左侧导航-权限设置 */
    .content-left-qxsz{
        width: 240px;
        height: 138px;
    }
    .content-left-qxsz-fu{
        width: 240px;
        height: 46px;
        border-left: 8px solid #d5d5d5;
        background: #016daf;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
        line-height: 46px;
    }
    .content-left-qxsz-zi{
        width: 240px;
        height: 46px;
        color: #fff;
        display: block;
        text-align: center;
        line-height: 46px;
        font-size: 16px;
    }
    /* 左侧导航-限速设置 */
    .content-left-xssz{
        width: 240px;
        height: 92px;
    }
    .content-left-xssz-fu{
        width: 240px;
        height: 46px;
        border-left: 8px solid #d5d5d5;
        background: #016daf;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
        line-height: 46px;
    }
    .content-left-xssz-zi{
        width: 240px;
        height: 46px;
        color: #fff;
        display: block;
        text-align: center;
        line-height: 46px;
        font-size: 16px;
    }

    /* 右侧数据 */
    .content-right{
        width: auto;
        height: 100%;
        margin-left: 240px;
        background: #fff;
    }
</style>
