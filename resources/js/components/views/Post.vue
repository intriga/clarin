<template>
    <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          
          <h2 class="section-heading"
            v-text="post.title"></h2>

            <img :src="post.file">

          <p
            v-html="post.content"></p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
    props : ['slug'],
    data() {
        return {
            post: {},
        }
    },
    created() {
        let url = 'http://clarin.int/api/post/'+this.slug;

        axios.get(url)
            .then(response => {
                this.post = response.data
                // console.log('response: ',response.data);
                
        	})
    },
}
</script>

<style>

</style>