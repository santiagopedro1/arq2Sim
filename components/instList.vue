<script setup lang="ts">
import { MinusCircleIcon } from '@heroicons/vue/24/outline'

const Reg = ref([])
const instLista = instList()

function removeFromList() {
    Reg.value.pop()
}
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
        <button @click="removeFromList">
            <MinusCircleIcon class="h-6 w-6 text-white hover:text-cyan-500" />
        </button>
    </div>
</template>
