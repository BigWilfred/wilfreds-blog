<script>
    import Nav from "../components/nav.svelte";
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet">
</svelte:head>


<Nav />
<slot></slot>

<style>
    :global(body) {
        margin:0;
        font-family: 'Merriweather', serif;
    }
    :global(h1, h2, h3, h4, h5, h6){
        margin:0;
    }
</style>