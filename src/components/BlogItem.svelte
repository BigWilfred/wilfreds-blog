<script>
    export let title
    export let blog

    console.log(blog)

    $: blog_url = '/blog/' + blog._meta.uid
</script>

<a href={blog_url} class="blog-item">
    <div>
        <div class="title">
            {title}
        </div>
    </div>
</a>