<script lang="ts">
    import "../app.css";

    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main class="container mx-auto p-4">
    <slot />
</main>

<Footer />
