<template>
  <div class="home">
    <!-- 发表评论 -->
    <div class="publish-article">
      <el-button type="primary"> 发表文章</el-button>
    </div>
    <!-- 列表 -->
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="grid-content bg-purple">
            <div class="list-wrap" >
              <!-- 文章列表 -->
              <div class="article-list" v-for="(item,index) in articleList" :v-key = "index">
                <div class="avatar">
                  <img width="45" height="45" :src="changeImg(item.author.avatar)" alt="" />
                </div>
                <div class="description">
                  <div class="line1">
                    <el-tag size="small" >{{item.tips}}</el-tag>
                    <span v-html="item.title"></span>
                  </div>
                  <div class="line2">
                    <span>{{ item.author.username }}&nbsp;&nbsp;&nbsp;&nbsp;{{ changeTime(item.updatedAt) }}</span>
                    <span>
                      <i class="el-icon-document"></i>
                      {{ item.commentNum }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- 分页 -->
              <el-pagination
                background
                layout="prev, pager, next"
                :total=total :pageSize = pageSize :current-page = "currentPage" @current-change= "currentChange">
              </el-pagination>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="gonggao">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>卡片名称</span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                  {{'列表内容 ' + o }}
                </div>
              </el-card>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/javascript">
import { articleList } from "@/api/data";
export default {
  data() {
    return {
      pageNum: 1,
      articleList: [],
      total: 0,
      pageSize: 5,
      currentPage: 1
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      articleList(this.pageNum).then(res => {
        this.articleList = res.data.artList
        this.total = res.data.maxNum
      })
    },
    changeImg(url){
      return process.env.ROOT + url
    },
    changeTime(time){
      return new Date(time).toLocaleString()
    },
    currentChange(val){
      this.pageNum = val;
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    .publish-article {
      text-align: right;
      margin-bottom: 20px;
      background-color: #fff;
      padding: 0 200px;
    }
    .content {
      padding: 0 200px;
      margin-bottom: 20px;
      .list-wrap {
        background-color: #fff;
        .article-list {
          display: flex;
          height: 80px;
          align-items: center;
          border-bottom: 1px solid #e2e2e2;
          .avatar {
            flex: 0 0 80px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .description {
            width: 100%;
            .line1{
              margin-bottom: 5px;
            }
            .line2 {
              width: 100%;
              display: flex;
              justify-content: space-between;
              padding-right: 10px;
              box-sizing: border-box;
              color: gray;
              font-size: 12px;
            }
          }
        }
        .el-pagination {
          width: 100%;
          text-align: center;
          padding: 20px 0;

        }
      }
    }
  }
</style>