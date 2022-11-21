<script setup lang="ts">
const whatStep = step()
const instructions = instList()

whatStep.value = 0

let ok = ref(false)

function nextStep() {
    const clocks = document.querySelectorAll('#clockNumber')
    const mipss = document.querySelectorAll('#mips')
    const maxSteps = mipss[mipss.length - 1].children.length
    if (whatStep.value < maxSteps) {
        mipss.forEach(mips => {
            if (mips.children[whatStep.value]) {
                mips.children[whatStep.value].classList.remove('hidden')
                mips.children[whatStep.value].classList.add('flex')
                // scroll to the last children
            }
        })
        clocks[whatStep.value].classList.remove('hidden')
        whatStep.value++
    }
}

function prevStep() {
    const clocks = document.querySelectorAll('#clockNumber')
    const mipss = document.querySelectorAll('#mips')
    if (whatStep.value > 0) {
        whatStep.value--
        mipss.forEach(mips => {
            if (mips.children[whatStep.value]) {
                mips.children[whatStep.value].classList.add('hidden')
                // scroll to the last children
            }
        })
        clocks[whatStep.value].classList.add('hidden')
    }
}

function tudo() {
    const mipss = document.querySelectorAll('#mips')
    const maxSteps = mipss[mipss.length - 1].children.length

    for (let i = whatStep.value; i < maxSteps; i++) nextStep()
}

function inicio() {
    for (let i = whatStep.value; i != 0; i--) prevStep()
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
            <SimArea />
            <div class="flex gap-3 items-center h-6">
                <button
                    class="px-9 bg-amber-900 text-white"
                    id="next"
                    @click="prevStep"
                >
                    Prev
                </button>
                <button
                    class="px-9 bg-amber-900 text-white"
                    id="next"
                    @click="nextStep"
                >
                    Next
                </button>
                <button
                    class="px-9 bg-amber-900 text-white"
                    id="next"
                    @click="tudo"
                >
                    Tudo
                </button>
                <button
                    class="px-9 bg-amber-900 text-white"
                    id="next"
                    @click="inicio"
                >
                    Inicio
                </button>
                <div class="text-xl">Clock atual: {{ whatStep }}</div>
            </div>
        </div>
    </div>
</template>
