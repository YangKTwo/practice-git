<template>
    <div>
        <span>Welcome to the Vue 3 Component!</span>
        <button @click="handleClick">Click Me</button>
        <p v-if="message">{{ message }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const message = ref('');
const handleClick = () => {
    message.value = 'Button clicked!';
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
    button {
        cursor: pointer;
    }
    button:hover {
        background-color: #369870;
    }
</style>