<template>
    <div :class="style">
        <div class="card-content">
            <div class="content">
                {{ props.title }}
            </div>
            <p class="text">
                {{ props.indicate }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    style: ["title", "indicate", "bg", "color"]
}) 

function style() {
    return `card ${props.bg} ${props.color}`
}
  
</script>