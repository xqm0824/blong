<template>
  <div class="article-wrap">
    <!-- 文章详情 -->
    <div class="article-detail">
        <h2>{{ contentDetail.title }}</h2>
        <div class="sub-title" v-if="JSON.stringify(contentDetail) != '{}'">
          <span>{{contentDetail.author.username}}</span>
          <span>发表于:{{ changeTime(contentDetail.created) }}</span>
          <span>分类:{{ contentDetail.tips }}</span>
        </div>
        <div class="content" v-html="contentDetail.content"></div>
    </div>
    <!-- 评论 -->
    <Comments :articleId="this.$route.params._id"></Comments>
  </div>
</template>

<script>
  import Comments from "@/components/comments"
  export default {
    data() {
      return {
        contentDetail: {}
      } 
    },
    mounted() {
      if(JSON.stringify(this.$route.params) == "{}") {
        this.$router.push({
          name: "home"
        })
      }else {
        console.log(this.$route.params);
        this.contentDetail = this.$route.params;
      }
    },
    methods :{
      changeTime(time){
        return new Date(time).toLocaleString()
      },
    },
    components: {
      Comments
    }
  }
</script>

<style lang="scss">
  .article-wrap {
    .article-detail {
      background-color: #fff;
      padding: 10px;
      max-height: calc(100vh - 300px);
      overflow: auto;
      & > h2 {
        text-align: center;
        padding: 10px ;
      }
      .sub-title {
        text-align: center;
        color: gray;
        font-size: 12px; 
        & > span {
          margin-right: 10px;
        }
      }
    }
  }
</style>