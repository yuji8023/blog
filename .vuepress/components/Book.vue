<template>
  <ul class="ul_box">
    <li v-for="book in books" :key="book.key">
      <div class='front'>
        <div class="img-box">
          <img :src="book.frontmatter.bookImg || '/default_img.png'" clss="book-img medium-zoom-image">
        </div>
        <div class="name-box">
          <p>{{book.frontmatter.bookName || ''}}</p>
          <p class="article">{{book.title || ''}}</p>
        </div>
        <img class="reader-img" :src="`/${book.frontmatter.bookBy}.png`" alt="读书人">
      </div>
      <div class="back">
        <div class="info">
          <div class="excerpt" v-html="book.excerpt"></div>
          <a :href="book.path">more</a>
        </div>
        <img class="reader-img" :src="`/${book.frontmatter.bookBy}.png`" alt="读书人">
      </div>
      
    </li>
  </ul>
</template>


<style>
  /* .page-edit {
    display: none
  } */

  .ul_box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .ul_box li {
    width: 31%;
    height: 138px;
    margin-bottom: 4rem;
    transition: all .5s;
    margin-top: 0;
    list-style: none;
    position: relative;
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
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: .6s ease-in-out;
    /* overflow: hidden; */
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
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
    padding: 0 0 0 18px;
    float: left;
    vertical-align: middle;
  }

  .name-box {
    margin-top: 16px;
    width: calc(100% - 86px);
  }

  .name-box p {
    margin-bottom: 0;
    margin-top: 0;
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
        books: []
      }
    },
    mounted () {
      //console.log(this.$frontmatter)
      //console.log(this.$site.pages)
      const books = this.$site.pages.filter(function(item) {
        return item.frontmatter && (item.frontmatter.bookBy =='yuji' || item.frontmatter.bookBy =='joy');
      });
      console.log(books[0])
      this.books = books;
    }
  }
</script>