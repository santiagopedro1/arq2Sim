<script setup lang="ts">
const instNumb = instNumbr()
const whatStep = step()
const array = arr()

let ok = ref(false)

instNumb.value = 15

array.value = new Array()
for (let i = 0; i < instNumb.value; i++) {
    array.value.push(new Array(i))
}

function nextStep() {
    whatStep.value++
}

function prevStep() {
    whatStep.value--
}

function addInst() {
    instNumb.value++
    array.value = new Array()
    for (let i = 0; i < instNumb.value; i++) {
        array.value.push(new Array(i))
    }
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
                    class="bg-slate-800 text-white px-4 py-8 flex flex-col gap-4"
                >
                    <ol>
                        <li
                            v-for="inst in instNumb"
                            class="mb-4"
                        >
                            <instList />
                        </li>
                        <li>
                            <button @click="addInst">
                                <PlusCircleIcon
                                    class="w-8 h-8 text-white hover:text-cyan-500"
                                />
                            </button>
                        </li>
                    </ol>
                </DisclosurePanel>
            </transition>
        </Disclosure>
        <SimArea />
        <div class="flex gap-3">
            <button
                class="px-9 py-5 bg-amber-900 text-white"
                :class="{ 'cursor-not-allowed': ok }"
                :disabled="ok"
                id="next"
                @click="prevStep"
            >
                Prev
            </button>
            <button
                class="px-9 py-5 bg-amber-900 text-white"
                :class="{ 'cursor-not-allowed': ok }"
                :disabled="ok"
                id="next"
                @click="nextStep"
            >
                Next
            </button>
        </div>
    </div>
</template>
