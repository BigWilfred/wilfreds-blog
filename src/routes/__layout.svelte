<script>
    import Nav from "../components/nav.svelte";
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"> 
</svelte:head>


<Nav />
<div class="container">
    <slot></slot>
</div>

<style lang="scss">
    :global(body){
        margin:0;
        font-family: 'Quicksand', Arial, Helvetica, sans-serif;
        background-color: hsl(0, 0%, 10%) /* #5f0 */;
        color:white;
        font-weight: 300;
        
    }
    :global(a){
        color:inherit;
    }
    :global(a:visited){
        color:inherit;
    }
    :global(h1, h2, h3, h4, h5, h6){
        margin:0;
    }
    .container{
        max-width:1000px;
        display: block;
        margin: 0 auto;
    }
</style>