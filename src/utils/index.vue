<template>
    <div>
        <h1>Welcome to the Index Component</h1>
        <p>This is a sample component in Vue.js.</p>
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
        margin-top: 10px;
        padding: 8px 16px;
        background-color: #42b983;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #369870;
    }
</style>