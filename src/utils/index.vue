<template>
    <div>
        <h1>Welcome to the Index Component</h1>
        <p>This is a sample component in Vue.js.</p>
        <button @click="handleClick">Click Me</button>
    </div>
</template>
<script setup>
    const handleClick = () => {
        alert('Button clicked!');
    };
</script>
<style scoped>
    /* Add your component styles here */
    h1 {
        color: #42b983;
    }
    p {
        font-size: 16px;
    }
</style>