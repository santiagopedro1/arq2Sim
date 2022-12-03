<script setup lang="ts">
let maxSteps: number
let insts: InstructionList

const isSimRunning = ref(false)

function rodarSim(inst: InstructionList) {
    resetSim()
    const last = inst[inst.length - 1]
    maxSteps = last.Espaços + 5
    last.LugarBolha != 0 ? (maxSteps += 1) : (maxSteps += 0)
    insts = inst
    isSimRunning.value = true
}

function resetSim() {
    isSimRunning.value = false
    insts = []
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
                    <ListaInstrucoes
                        @rodar="rodarSim"
                        @reset="resetSim"
                    />
                </DisclosurePanel>
            </transition>
        </Disclosure>
        <div>
            <SimArea
                v-if="isSimRunning"
                :instructions="insts"
                :maxSteps="maxSteps"
            />
        </div>
    </div>
</template>
