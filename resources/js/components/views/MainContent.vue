<template>
    <div class="container">
            <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <div class="post-preview"
                    v-for="post in posts" :key="post.id">
                    <a href="post.html">
                        <h2 class="post-title"
                            v-text="post.title">
                        </h2>
                        <h3 class="post-subtitle"
                            v-text="post.description">
                        </h3>
                    </a>
                    <p class="post-meta">Posted by
                        <a href="#">Start Bootstrap</a>
                    on September 24, 2019</p>
                    <hr>
                </div>
                <hr>
                
                <!-- Pager -->
                <!-- <div class="clearfix">
                    <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                </div> -->

                <!-- <div class="clearfix">
                <ul class="pagination justify-content-center mb-4">
                    <li class="page-item">
                        <a class="btn btn-primary" href="#">← Older</a>
                    </li>
                    <li class="page-item disabled">
                        <a class="btn btn-primary" href="#">Newer →</a>
                    </li>
                </ul>
                </div> -->

                        <nav aria-label="Page navigation example">
                          <ul class="pagination">
                            <li class="page-item" v-if="pagination.current_page > 1">
                                <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)">Previous</a>
                            </li>
                            
                            <li class="page-item"  v-for="page in pagesNumber" :key="page" v-bind:class="[ page == isActived ? 'active' : '']">
                                <a class="page-link" href="#"  @click.prevent="changePage(page)">
                                    <span v-text="page"></span>
                                </a>
                            </li>

                            <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                                <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page + 1)">Next</a>
                            </li>
                          </ul>
                        </nav>

            </div>
            </div>

            
        </div>
</template>

<script>
export default {
    mounted() {
        console.log('main content')
    },
    created() {
        this.getPosts();
    },
    data() {
        return {
            posts: [],
            pagination: {
                'total': 0,
                'current_page': 0,
                'per_page': 0,
                'last_page': 0,
                'from': 0,
                'to': 0
            },
            offset: 3,

        }
    },
    computed: {
            isActived: function() {
                return this.pagination.current_page;
            },
            pagesNumber: function() {
                //let me = this;
                if(!this.pagination.to){
                    return [];
                }

                // var from = this.pagination.current_page - 2;
                var from = this.pagination.current_page - this.offset; 
                if(from < 1){
                    from = 1;
                }

                // var to = from + (2 * 2); 
                var to = from + (this.offset * 2); 
                if(to >= this.pagination.last_page){
                    to = this.pagination.last_page;
                }

                var pagesArray = [];
                while(from <= to){
                    pagesArray.push(from);
                    from++;
                }
                return pagesArray;
            }
        },

    methods: {
        // getPosts(){
        getPosts(page){
            // let url = '/api/posts';
            let url = '/api/posts?page='+page;
            let me = this;
            axios.get(url).then(response => {
                // console.log(response.data);
                // me.posts = response.data;
                me.posts = response.data.posts.data;
                me.pagination = response.data.pagination
            })
        },
        changePage: function(page) {
            let me = this;
            me.pagination.current_page = page;
            me.getPosts(page);
        }
    },
    


}
</script>

<style>

</style>