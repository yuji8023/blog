<template>
  <ul class="ul_box">
    <li v-for="book in books" :key="book.key">
      <div class='front'>
        <div class="img-box">
          <img :src="book.frontmatter.bookImg || `${base}default_img.png`" clss="book-img medium-zoom-image">
        </div>
        <div class="name-box">
          <p>《{{book.frontmatter.bookName || ''}}》</p>
          <p class="article">{{book.title || ''}}</p>
        </div>
        <!-- <img class="reader-img" :src="`${base}${book.frontmatter.bookBy}.png`" alt="读书人"> -->
      </div>
      <div class="back">
        <div class="info">
          <div class="excerpt" v-html="book.excerpt"></div>
          <a :href="base + book.path.substr(1)">链接</a>
        </div>
        <!-- <img class="reader-img" :src="`${base}${book.frontmatter.bookBy}.png`" alt="读书人"> -->
      </div>
      
    </li>
  </ul>
</template>


<style>
  .page-edit {
    display: none
  }
  .page {
    background: url('/blog/book_bg.jpg') no-repeat center;
    background-size: cover;
    height: calc(100vh - 112px);
  }
  .page-title  .reco-account,  .reco-date{
    color: rgba(224, 187, 107, .7);
  }
  .page-title .title {
    color: #e0bb6b;
  }
  .comments-wrapper {
    display: none;
  }
  .ul_box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    
  }
  .ul_box li {
    width: calc(33% - 20px);
    height: 138px;
    margin-bottom: 4rem;
    transition: all .5s;
    margin-top: 0;
    list-style: none;
    position: relative;
    background-color: var(--background-color);
    color: rgba(255, 255, 255, 0.8);
    z-index: 10;
    font-family: sans-serif;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    background: linear-gradient(
    to top right,
    rgba(90, 149, 207, 0.5),
    rgba(58, 76, 99, 0.8)
    );
    box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2),
    -10px 10px 20px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px); /*  元素后面区域添加模糊效果 */
    border-radius: 6px;
    /* transform: rotate(-4deg); */
  }

  @media screen and (min-width: 600px) and (max-width: 900px)  {
    .ul_box li {
      width: calc(50% - 20px);
      height: 138px;
      margin-bottom: 4rem;
      transition: all .5s;
      margin-top: 0;
      list-style: none;
      position: relative;
      background-color: var(--background-color);
    }
  }

  @media screen and (max-width: 600px) {
    .ul_box li {
      width: calc(100% - 20px);
      height: 138px;
      margin-bottom: 4rem;
      transition: all .5s;
      margin-top: 0;
      list-style: none;
      position: relative;
      background-color: var(--background-color);
    }
  }

  .reader-img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.4);
    position: absolute;
    right: -12px;
    top: -12px;
  }

  .ul_box li .front {
    border-radius: 6px;
    background-position: 50%;
    background-size: cover;
    position: absolute;
    height: 98px;
    width: calc(100% - 40px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: .6s ease-in-out;
    /* overflow: hidden; */
    box-shadow: var(--box-shadow);
    padding: 20px;
  }


  .front .img-box {
    float: left;
    width: 68px;
    height: 98px;
  }
  .front .book-img {
    height: 100%;
    height: 100%;
  }

  .name-box {
    padding: 0 0 0 12px;
    float: left;
    vertical-align: middle;
    margin-top: 8px;
    width: calc(100% - 86px);
  }

  .name-box p {
    margin-bottom: 0;
    margin-top: 0;
    line-height: 1.6;
  }

  .name-box .article {
    color: rgb(224, 187, 107);
    font-size: 12px;
  }

  .medium-zoom-image {   
    cursor: pointer;
    cursor: zoom-in;
    transition: transform .3s cubic-bezier(.2,0,.2,1)!important;
  }

  li:hover .front, li .back.back {
    transform: rotateY(-180deg);
  }

  li:hover .back, li .front {
    transform: rotateY(0deg);
  }

  .back {
    border-radius: 6px;
    background-position: 50%;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: .6s ease-in-out;
    /* overflow: hidden; */
    box-shadow: var(--box-shadow);
    padding: 0;
  }

  .back .info {
    box-sizing: border-box;
    padding: 1rem;
  }
  .back .info a {
    position: absolute;
    right : 8px;
    bottom: 4px;
    display: block;
    height: 30px;
  }

  .back .info .excerpt {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 14px;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  .back .info .excerpt p {
    line-height: 1.8;
    padding-right: 22px;
    margin-block-start: 0;
    margin-inline-start: 0;
    margin-block-end: 0;
    margin-inline-end: 0;
  }

.back .info .excerpt .content__default:not(.custom) *:first-child {
    margin-top: 0;
}
.back .info .excerpt .custom-block.tip {
    background-color: transparent;
    border-color: transparent;
}
.back .info .excerpt .custom-block.tip, .custom-block.warning, .custom-block.danger {
    padding: 0;
    border-left-width: 0;
    border-left-style: none;
    margin: 0;
}
</style>
<script>
  export default {
    data() {
      return {
        books: [],
        base: '/blog/'
      }
    },
    mounted () {
      //console.log(this.$frontmatter)
      const books = this.$site.pages.filter(function(item) {
        return item.frontmatter && (item.frontmatter.bookBy =='yuji' || item.frontmatter.bookBy =='joy');
      });
      // console.log(this.$site)
      this.base = this.$site.base;

      this.books = books;
    }
  }
</script>