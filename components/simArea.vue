<script setup lang="ts">
const instructions = instList()
const maxSteps = instructions.value.length + 4
</script>

<template>
    <div class="px-8">
        <div class="flex">
            <div class="mr-4 min-w-[20px] text-transparent">1</div>
            <div class="flex gap-5">
                <div
                    id="clockNumber"
                    v-for="i in maxSteps"
                    class="min-w-[64px] hidden text-center"
                >
                    <span>{{ i }}</span>
                </div>
            </div>
        </div>
        <ul>
            <li
                v-for="inst in instructions.length"
                class="flex mb-4 h-16 w-16"
                :id="'inst' + inst"
            >
                <div
                    class="self-center min-w-[20px] text-center cursor-default mr-4"
                    :title="`i${inst}: ${instructions[
                        inst - 1
                    ][0].toUpperCase()} ${instructions[inst - 1][1]}, ${
                        instructions[inst - 1][2]
                    }, ${instructions[inst - 1][3]}`"
                >
                    <span>i{{ inst }}</span>
                </div>
                <Mips
                    :prevInst="inst - 1"
                    :whereBubble="0"
                />
            </li>
        </ul>
    </div>
</template>
