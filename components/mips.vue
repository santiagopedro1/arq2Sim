<script setup lang="ts">
defineProps<{
    prevInst: number
    whereBubble: 0 | 1 | 2 | 3 | 4
}>()
</script>

<template>
    <div
        id="risc"
        class="flex gap-5"
    >
        <div
            v-for="i in prevInst"
            id="espaço vazio"
            class="hidden w-16 h-16"
        ></div>
        <div
            title="Busca de instrução"
            id="Busca de instrução"
            class="hidden flex-col items-center justify-center border-2 border-black w-16 h-16"
        >
            <span class="text-xl font-bold">BI</span>
        </div>
        <div
            v-if="whereBubble == 1"
            id="bubble"
            class="border border-cyan-400 hidden flex-col items-center justify-center w-16 h-16"
        >
            <span class="font-bold">Bolha</span>
        </div>
        <div
            tittle="Decodificação de instrução"
            id="Decodificação"
            class="hidden flex-col items-center justify-center border-2 border-black w-16 h-16"
        >
            <span class="text-xl font-bold">DI</span>
        </div>
        <div
            v-if="whereBubble == 2"
            id="bubble"
            class="border border-cyan-400 hidden flex-col items-center justify-center w-16 h-16"
        >
            <span class="font-bold">Bolha</span>
        </div>
        <div
            title="Execução"
            id="ula"
            class="hidden flex-col items-center justify-center border-2 border-black w-16 h-16"
        >
            <span class="text-xl font-bold">ULA</span>
        </div>
        <div
            v-if="whereBubble == 3"
            id="bubble"
            class="border border-cyan-400 hidden flex-col items-center justify-center w-16 h-16"
        >
            <span class="font-bold">Bolha</span>
        </div>
        <div
            title="Escrita"
            id="Acesso a Memória"
            class="hidden flex-col items-center justify-center border-2 border-black w-16 h-16"
        >
            <span class="text-xl font-bold">MEM</span>
        </div>
        <div
            v-if="whereBubble == 4"
            id="bubble"
            class="border border-cyan-400 hidden flex-col items-center justify-center w-16 h-16"
        >
            <span class="font-bold">Bolha</span>
        </div>
        <div
            title="Armazenamento"
            id="Armazenamento"
            class="hidden flex-col items-center justify-center border-2 border-black w-16 h-16"
        >
            <span class="text-xl font-bold">AR</span>
        </div>
    </div>
</template>
