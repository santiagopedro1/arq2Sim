<script setup lang="ts">
const currentStep = step()
const instructions = instList()
const maxSteps = maxStep()

const erro = ref()
const isSimRunning = ref(false)

function nextStep() {
    const clocks = document.querySelectorAll('#clockNumber')
    const mipss = document.querySelectorAll('#mips')

    if (currentStep.value < maxSteps.value) {
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
    for (let i = currentStep.value; i < maxSteps.value; i++) nextStep()
}

function inicio() {
    for (let i = currentStep.value; i != 0; i--) prevStep()
}

function submit(close: Function) {
    const isValid = areInstructionsValid(instructions.value)
    if (isValid === true) {
        close()
        inicio()
        checkForConflict(instructions.value)
        maxSteps.value =
            instructions.value[instructions.value.length - 1][4] +
            instructions.value[instructions.value.length - 1][5] +
            5
        isSimRunning.value = true
    } else {
        erro.value = isValid.message
    }
}

function reset() {
    isSimRunning.value = false
    currentStep.value = 0
    instructions.value = new Array()
}
</script>

<template>
    <div>
        <Disclosure v-slot="{ open }">
            <DisclosureButton
                class="flex w-full justify-between bg-slate-800 px-4 py-2 text-left text-xl font-medium text-white"
            >
                Configuração
                <ChevronDownIcon
                    :class="
                        open
                            ? 'rotate-180 transform duration-100'
                            : 'rotate-360 transform duration-100'
                    "
                    class="h-6 w-6"
                />
            </DisclosureButton>
            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <DisclosurePanel
                    v-slot="{ close }"
                    class="bg-slate-800 text-white px-4 py-4 flex flex-col gap-4"
                >
                    <ListaInstrucoes />
                    <div class="flex gap-4">
                        <button
                            @click="reset"
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-min"
                        >
                            Reset
                        </button>
                        <button
                            @click="submit(close)"
                            class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded w-min"
                        >
                            Submit
                        </button>
                    </div>
                </DisclosurePanel>
            </transition>
        </Disclosure>
        <div v-if="isSimRunning">
            <SimArea />
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
                    @click="tudo"
                >
                    Tudo
                </button>
                <button
                    class="px-9 bg-fuchsia-900 text-white"
                    id="next"
                    @click="inicio"
                >
                    Inicio
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
        <div id="modal">
            <Dialog
                as="div"
                class="relative z-10"
                :open="typeof erro === 'string'"
            >
                <div class="fixed inset-0 bg-black bg-opacity-25" />
                <div class="fixed inset-0 overflow-y-auto">
                    <div
                        class="flex min-h-full items-center justify-center p-4 text-center"
                    >
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                        >
                            <DialogTitle
                                as="h3"
                                class="text-xl font-extrabold leading-6 text-red-600"
                            >
                                ERRO
                            </DialogTitle>
                            <div class="mt-2">
                                <p class="text-lg text-black">
                                    {{ erro }}
                                </p>
                            </div>
                            <div class="mt-4">
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-fuchsia-900 px-4 py-2 text-white"
                                    @click="erro = false"
                                >
                                    Ok
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    </div>
</template>
