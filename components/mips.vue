<script setup lang="ts">
defineProps<{
    espaçoVazio: number
    whereBubble: number
}>()
</script>

<template>
    <div
        id="mips"
        class="flex gap-3"
    >
        <div
            v-for="i in espaçoVazio"
            id="espaço vazio"
            class="hidden w-16 h-16"
        ></div>
        <div
            title="Busca de instrução"
            id="Busca de instrução"
            class="hidden flex-col items-center justify-center border-2 border-black w-16 h-16"
        >
            <span class="text-xl font-bold pointer-events-none">BI</span>
        </div>
        <div
            v-if="whereBubble == 1"
            id="bubble"
            class="border-2 border-cyan-400 hidden flex-col items-center justify-center w-16 h-16"
        >
            <span class="font-bold">Bolha</span>
        </div>
        <div
            title="Decodificação de instrução"
            id="Decodificação"
            class="hidden flex-col items-center justify-center border-2 border-black w-16 h-16"
        >
            <span class="text-xl font-bold pointer-events-none">DI</span>
        </div>
        <div
            v-if="whereBubble == 2"
            id="bubble"
            class="border-2 border-cyan-400 hidden flex-col items-center justify-center w-16 h-16"
        >
            <span class="font-bold">Bolha</span>
        </div>
        <div
            title="Execução"
            id="ula"
            class="hidden flex-col items-center justify-center border-2 border-black w-16 h-16"
        >
            <span class="text-xl font-bold pointer-events-none">ULA</span>
        </div>
        <div
            v-if="whereBubble == 3"
            id="bubble"
            class="border-2 border-cyan-400 hidden flex-col items-center justify-center w-16 h-16"
        >
            <span class="font-bold">Bolha</span>
        </div>
        <div
            title="Escrita"
            id="Acesso a Memória"
            class="hidden flex-col items-center justify-center border-2 border-black w-16 h-16"
        >
            <span class="text-xl font-bold pointer-events-none">MEM</span>
        </div>
        <div
            v-if="whereBubble == 4"
            id="bubble"
            class="border-2 border-cyan-400 hidden flex-col items-center justify-center w-16 h-16"
        >
            <span class="font-bold">Bolha</span>
        </div>
        <div
            title="Armazenamento"
            id="Armazenamento"
            class="hidden flex-col items-center justify-center border-2 border-black w-16 h-16"
        >
            <span class="text-xl font-bold pointer-events-none">AR</span>
        </div>
    </div>
</template>
