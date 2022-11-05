<script setup lang="ts">
const Reg = ref([])
</script>

<template>
    <div class="text-black gap-3 flex">
        <select
            name="operation"
            class="w-16"
        >
            <option value="add">ADD</option>
            <option value="sub">SUB</option>
            <option value="mul">MUL</option>
            <option value="div">DIV</option>
        </select>
        <input
            type="text"
            name="regSaida"
            class="w-10"
        />
        <span class="text-white">,</span>
        <input
            type="text"
            name="reg1"
            class="w-10"
        />
        <span class="text-white">,</span>
        <input
            type="text"
            name="reg2"
            class="w-10"
        />
    </div>
</template>
