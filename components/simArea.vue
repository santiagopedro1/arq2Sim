<script setup lang="ts">
const instructions = instList()
const maxSteps = maxStep()
</script>

<template>
    <div
        class="grid grid-cols-[32px,1fr] grid-rows-[24px,1fr] h-[calc(100vh-70px)] w-[calc(100% - 6)] mx-3 overflow-scroll"
    >
        <div
            class="flex flex-col items-center sticky left-0 top-0 bg-white text-transparent"
        >
            <span>clk</span>
        </div>
        <div
            id="clocks"
            class="bg-white sticky left-0 top-0"
        >
            <div class="flex gap-3">
                <div
                    id="clockNumber"
                    v-for="i in maxSteps"
                    class="text-center w-16 hidden"
                >
                    <span :id="'clockNumber' + i">C{{ i }}</span>
                </div>
            </div>
        </div>
        <div class="mt-2 pl-auto sticky left-0 top-0 bg-white">
            <div
                v-for="inst in instructions.length"
                class="h-16 mb-2 flex items-center pl-2"
            >
                <Popover class="relative">
                    <PopoverButton>i{{ inst }}</PopoverButton>
                    <PopoverPanel
                        class="absolute left-6 bottom-[-12px] z-10 bg-fuchsia-900 text-white px-2 py-3"
                    >
                        <div
                            v-if="instructions[inst - 1][0] === 'LW'"
                            class="flex gap-1"
                        >
                            <span>i{{ inst }}:</span>
                            <span>{{ instructions[inst - 1][0] }}</span>
                            <span>{{ instructions[inst - 1][1] }},</span>
                            <span>{{ instructions[inst - 1][2] }}</span>
                            <span>({{ instructions[inst - 1][3] }})</span>
                        </div>
                        <div
                            v-else
                            class="flex gap-1"
                        >
                            <span>i{{ inst }}:</span>
                            <span>{{ instructions[inst - 1][0] }}</span>
                            <span>{{ instructions[inst - 1][1] }},</span>
                            <span>{{ instructions[inst - 1][2] }},</span>
                            <span>{{ instructions[inst - 1][3] }}</span>
                        </div>
                    </PopoverPanel>
                </Popover>
            </div>
        </div>
        <div>
            <Mips
                v-for="inst in instructions.length"
                :espaçoVazio="instructions[inst - 1][4]"
                :whereBubble="instructions[inst - 1][5]"
                class="my-2"
            />
        </div>
    </div>
</template>
