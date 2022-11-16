<script setup lang="ts">
const whatStep = step()
const instructions = instList()

let ok = ref(false)

function nextStep() {
    const clocks = document.querySelectorAll('#clockNumber')
    const riscs = document.querySelectorAll('#risc')
    const maxSteps = riscs[riscs.length - 1].children.length
    if (whatStep.value < maxSteps) {
        riscs.forEach(risc => {
            if (risc.children[whatStep.value]) {
                risc.children[whatStep.value].classList.remove('hidden')
                risc.children[whatStep.value].classList.add('flex')
            }
        })
        clocks[whatStep.value].classList.remove('hidden')
        whatStep.value++
    }
}

function prevStep() {
    const clocks = document.querySelectorAll('#clockNumber')
    const riscs = document.querySelectorAll('#risc')
    if (whatStep.value > 0) {
        whatStep.value--
        riscs.forEach(risc => {
            if (risc.children[whatStep.value]) {
                risc.children[whatStep.value].classList.remove('flex')
                risc.children[whatStep.value].classList.add('hidden')
            }
        })
        clocks[whatStep.value].classList.add('hidden')
    }
}

function submit(close: Function) {
    close()
    ok.value = true
}

function reset() {
    ok.value = false
    whatStep.value = 0
    instructions.value = new Array()
}
</script>

<template>
    <div>
        <Disclosure v-slot="{ open }">
            <DisclosureButton
                class="flex w-full justify-between bg-slate-800 px-4 py-4 text-left text-xl font-medium text-white"
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
                    class="bg-slate-800 text-white px-4 py-8 flex flex-col gap-4"
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
        <div v-if="ok">
            <SimArea class="h-[70vh] w-screen overflow-scroll" />
            <div
                v-if="ok"
                class="flex gap-3"
            >
                <button
                    class="px-9 py-5 bg-amber-900 text-white"
                    id="next"
                    @click="prevStep"
                >
                    Prev
                </button>
                <button
                    class="px-9 py-5 bg-amber-900 text-white"
                    id="next"
                    @click="nextStep"
                >
                    Next
                </button>
            </div>
        </div>
    </div>
</template>
