<script setup lang="ts">
class Instrução implements BaseInstruction {
    OPcode: AllowedOP | ''
    RD: string
    OP1: string
    OP2: string
    constructor() {
        this.OPcode = ''
        this.RD = ''
        this.OP1 = ''
        this.OP2 = ''
    }
}

const errorModal = {
    isOpen: ref(false),
    message: ref('')
}
const instruções = instList()

const emit = defineEmits(['rodar', 'reset'])

function addInst() {
    instruções.value.push(new Instrução())
}

function removeInst(inst: BaseInstruction) {
    const index = instruções.value.indexOf(inst)
    instruções.value.splice(index, 1)
}

function submit() {
    let result: InstructionList | Error
    // uppercase all instructions
    instruções.value.forEach(inst => {
        inst.OPcode = inst.OPcode.toUpperCase() as AllowedOP
        inst.RD = inst.RD.toUpperCase()
        inst.OP1 = inst.OP1.toUpperCase()
        inst.OP2 = inst.OP2.toUpperCase()
    })
    result = createInstructions(instruções.value)
    if (result instanceof Error) {
        errorModal.isOpen.value = true
        errorModal.message.value = result.message
    } else {
        result = checkForConflict(result)
        emit('rodar', result)
    }
}

function reset() {
    instruções.value = []
    emit('reset')
}
</script>

<template>
    <div>
        <ol id="instlist">
            <li
                v-for="inst in instruções.length"
                class="mb-4"
            >
                <div
                    class="text-black gap-3 flex"
                    :id="`inst${inst}`"
                >
                    <label
                        :for="`operation${inst}`"
                        class="self-center text-white"
                    >
                        Instrução {{ inst }}
                    </label>
                    <select
                        :id="`operation${inst}`"
                        class="w-16"
                        v-model="instruções[inst - 1].OPcode"
                    >
                        <optgroup label="ULA">
                            <option
                                v-for="op in ULAOPs"
                                :value="op"
                            >
                                {{ op }}
                            </option>
                        </optgroup>
                        <optgroup label="MEM">
                            <option
                                v-for="op in MemOPs"
                                :value="op"
                            >
                                {{ op }}
                            </option>
                        </optgroup>
                    </select>
                    <input
                        type="text"
                        :name="`regSaida${inst}`"
                        class="w-10 text-center"
                        v-model="instruções[inst - 1].RD"
                    />
                    <span class="text-white">,</span>
                    <input
                        type="text"
                        :name="`reg1-${inst}`"
                        class="w-10 text-center"
                        v-model="instruções[inst - 1].OP1"
                    />
                    <span
                        v-if="isMemOP(instruções[inst - 1].OPcode)"
                        class="text-white"
                        >(</span
                    >
                    <span
                        v-else
                        class="text-white"
                        >,</span
                    >
                    <input
                        type="text"
                        :name="`reg2-${inst}`"
                        class="w-10 text-center"
                        v-model="instruções[inst - 1].OP2"
                    />
                    <span
                        v-if="isMemOP(instruções[inst - 1].OPcode)"
                        class="text-white"
                        >)</span
                    >
                    <button @click="removeInst(instruções[inst - 1])">
                        <MinusCircleIcon
                            class="h-6 w-6 text-white hover:text-cyan-500"
                        />
                    </button>
                </div>
            </li>
            <li>
                <button @click="addInst">
                    <PlusCircleIcon
                        class="w-8 h-8 text-white hover:text-cyan-500"
                    />
                </button>
            </li>
        </ol>
        <div class="flex gap-4">
            <button
                @click="reset"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-min"
            >
                Reset
            </button>
            <button
                @click="submit"
                class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded w-min"
            >
                Rodar
            </button>
        </div>
        <ErrorModal
            v-if="errorModal.isOpen.value"
            @close="errorModal.isOpen.value = false"
            :open="errorModal.isOpen.value"
            :message="errorModal.message.value"
        />
    </div>
</template>
