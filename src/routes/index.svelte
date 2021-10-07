<script>
    
</script>

<div class="flex">
    <div>
        <h1>I'm Willy</h1>
        <div>Here are some things I have picked up along my web development journy</div>
    </div>
    <div>
        <img src="https://via.placeholder.com/400x400" alt="">
    </div>
</div>

<style lang="scss">
    .flex{
        display: flex;
        align-items: center;
        margin: 0 -20px;
        > div{
            flex-basis: 50%;
            max-width: 50%;
            padding:0 20px;
        }

        img{
            width: 100%;
            height: auto;
        }
    }
</style>