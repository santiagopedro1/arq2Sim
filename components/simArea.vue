<script setup lang="ts">
const instructions = instList()
const maxSteps = instructions.value.length + 4
</script>

<template>
    <div
        class="grid grid-cols-[32px,1fr] grid-rows-[48px,1fr] px-2 h-[calc(100vh-70px)] w-[calc(100% - 6)] mx-3 overflow-scroll border-2 border-red-600"
    >
        <div class="flex flex-col items-center">
            <span>clk</span>
            <span>inst</span>
        </div>
        <div
            id="clocks"
            class="flex bg-white"
        >
            <div class="flex gap-3">
                <div
                    id="clockNumber"
                    v-for="i in maxSteps"
                    class="text-center w-16 hidden"
                >
                    <span>{{ i }}</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col mt-2 items-center">
            <div
                v-for="inst in instructions.length"
                class="h-16 mb-2 flex items-center"
                :title="`i${inst}: ${instructions[inst - 1][0].toUpperCase()} ${
                    instructions[inst - 1][1]
                }, ${instructions[inst - 1][2]}, ${instructions[inst - 1][3]}`"
            >
                <span class="cursor-default">i{{ inst }}</span>
            </div>
        </div>
        <div>
            <Mips
                v-for="inst in instructions.length"
                :prevInst="inst - 1"
                :whereBubble="0"
                class="my-2"
            />
        </div>
    </div>
</template>
