<template>
  <ul class="ul_box">
    <li v-for="book in books" :key="book.key">
      <div class='front'>
        <img :src="book.frontmatter.img || '/banner.jpg'" clss="medium-zoom-image">
      </div>
      <div class="back">
        <div class="info">
          <h4>{{book.title}}</h4>
          <a :href="book.path">笔记</a>
        </div>
      </div>
    </li>
  </ul>
</template>


<style>
  .page-edit {
    display: none
  }

  .ul_box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .ul_box li {
    width: 31%;
    height: 140px;
    margin-bottom: 4rem;
    transition: all .5s;
    margin-top: 0;
    list-style: none;
    position: relative;
  }

  .ul_box li .front {
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
    overflow: hidden;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);;
  }

  .front img {
    height: 100%;
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
    overflow: hidden;
    box-shadow: var(--box-shadow);
  }

  .back .info {
    box-sizing: border-box;
    padding: 1rem;
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
      console.log(this.$site.pages)
      const books = this.$site.pages.filter(function(item) {
        return item.frontmatter && item.frontmatter.book =='yuji';
      });
      // console.log(books[0])
      this.books = books;
    }
  }
</script>