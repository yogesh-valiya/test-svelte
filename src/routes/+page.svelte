<script lang="ts">
    import {onDestroy, onMount} from 'svelte';
    import SupportsMajorPlatforms from "$lib/components/SupportsMajorPlatforms.svelte";

    let greetings = ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Snapdeal', 'Shopclues', 'Paytm', 'Nykaa', 'BigBasket', 'Grofers'];
    let index = 0;
    let displayText = '';
    let isDeleting = false;
    let typingSpeed = 100; // Speed of typing
    let deleteSpeed = 50; // Speed of deleting
    let pauseBetweenWords = 1000; // Pause between words
    let timer: NodeJS.Timeout;

    function typeWriter() {
        // Current word
        let currentWord = greetings[index];

        if (!isDeleting && displayText.length < currentWord.length) {
            // Typing the word
            displayText = currentWord.slice(0, displayText.length + 1);
            timer = setTimeout(typeWriter, typingSpeed);
        } else if (isDeleting && displayText.length > 0) {
            // Deleting the word
            displayText = currentWord.slice(0, displayText.length - 1);
            timer = setTimeout(typeWriter, deleteSpeed);
        } else if (!isDeleting && displayText.length === currentWord.length) {
            // Pause at the end of the word before starting to delete
            isDeleting = true;
            timer = setTimeout(typeWriter, pauseBetweenWords);
        } else if (isDeleting && displayText.length === 0) {
            // Move to the next word after deleting
            isDeleting = false;
            index = (index + 1) % greetings.length;
            timer = setTimeout(typeWriter, typingSpeed);
        }
    }

    onMount(() => {
        typeWriter();
    });

    onDestroy(() => {
        clearTimeout(timer);
    });
</script>


<svelte:head>
    <title>Price History</title>
    <meta name="description" content="Product Price History"/>
</svelte:head>


<main class="text-center">
    <h1 class="text-4xl font-bold">Price History & Tracker</h1>
    <p class="text-lg mt-4">
        Track prices of your favourite products on
        <span class="font-bold">{displayText}</span><span class="cursor">|</span>
    </p>
    <SupportsMajorPlatforms/>
</main>

