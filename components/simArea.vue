<script setup lang="ts">
const props = defineProps<{
    instructions: InstructionList
    maxSteps: number
}>()

let currentStep = ref(0)

function nextStep() {
    const clocks = document.querySelectorAll('#clockNumber')
    const mipss = document.querySelectorAll('#mips')

    if (currentStep.value < props.maxSteps) {
        mipss.forEach(mips => {
            if (mips.children[currentStep.value]) {
                mips.children[currentStep.value].classList.remove('hidden')
                mips.children[currentStep.value].classList.add('flex')
            }
        })
        clocks[currentStep.value].classList.remove('hidden')
        currentStep.value++
    }
}

function prevStep() {
    const clocks = document.querySelectorAll('#clockNumber')
    const mipss = document.querySelectorAll('#mips')

    if (currentStep.value > 0) {
        currentStep.value--
        mipss.forEach(mips => {
            if (mips.children[currentStep.value]) {
                mips.children[currentStep.value].classList.add('hidden')
            }
        })
        clocks[currentStep.value].classList.add('hidden')
    }
}

function tudo() {
    for (let i = currentStep.value; i < props.maxSteps; i++) nextStep()
}

function inicio() {
    for (let i = currentStep.value; i != 0; i--) prevStep()
}

watch(
    () => props.instructions,
    () => {
        inicio()
    }
)
</script>

<template>
    <div id="simArea">
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
                                v-if="isMemOP(instructions[inst - 1].OPcode)"
                                class="flex gap-1"
                            >
                                <span>i{{ inst }}:</span>
                                <span>{{ instructions[inst - 1].OPcode }}</span>
                                <span>{{ instructions[inst - 1].RD }},</span>
                                <span>{{ instructions[inst - 1].Shift }}</span>
                                <span
                                    >({{
                                        instructions[inst - 1].Operando
                                    }})</span
                                >
                            </div>
                            <div
                                v-else
                                class="flex gap-1"
                            >
                                <span>i{{ inst }}:</span>
                                <span>{{ instructions[inst - 1].OPcode }}</span>
                                <span>{{ instructions[inst - 1].RD }},</span>
                                <span
                                    >{{
                                        instructions[inst - 1].Operando1
                                    }},</span
                                >
                                <span>{{
                                    instructions[inst - 1].Operando2
                                }}</span>
                            </div>
                        </PopoverPanel>
                    </Popover>
                </div>
            </div>
            <div>
                <Mips
                    v-for="inst in instructions.length"
                    :espaçoVazio="instructions[inst - 1].Espaços"
                    :whereBubble="instructions[inst - 1].LugarBolha"
                    class="my-2"
                />
            </div>
        </div>
        <div class="flex gap-3 items-center h-6 px-4">
            <button
                class="px-9 bg-fuchsia-900 text-white"
                id="next"
                @click="prevStep"
            >
                Prev
            </button>
            <button
                class="px-9 bg-fuchsia-900 text-white"
                id="next"
                @click="nextStep"
            >
                Next
            </button>
            <button
                class="px-9 bg-fuchsia-900 text-white"
                id="next"
                @click="inicio"
            >
                Inicio
            </button>
            <button
                class="px-9 bg-fuchsia-900 text-white"
                id="next"
                @click="tudo"
            >
                Tudo
            </button>
            <div class="text-xl">
                Clock atual: {{ currentStep }}
                <span
                    v-if="currentStep === maxSteps"
                    class="text-red-600 font-bold"
                >
                    Fim!</span
                >
            </div>
        </div>
    </div>
</template>
