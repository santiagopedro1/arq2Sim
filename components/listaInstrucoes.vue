<script setup lang="ts">
const instructions = instList()

function addInst() {
    instructions.value.push(['', '', '', '', 0, 0])
}

function removeInst(inst: Instruction) {
    if (inst.length === 6) {
        const index = instructions.value.indexOf(inst)
        instructions.value.splice(index, 1)
    }
}

// onMounted(() => {
//     function rand(inst: Instruction) {
//         inst[0] = 'ADD'
//         inst[1] = 'r' + Math.floor(Math.random() * 32)
//         inst[2] = 'r' + Math.floor(Math.random() * 32)
//         inst[3] = 'r' + Math.floor(Math.random() * 32)
//     }
//     for (let i = 0; i < 7; i++) addInst()
//     instructions.value.forEach((inst, index) => {
//         switch (index) {
//             case 0:
//                 inst[0] = 'LW'
//                 inst[1] = 'r1'
//                 inst[2] = 'r2'
//                 inst[3] = '0'
//                 break
//             case 1:
//                 inst[0] = 'ADD'
//                 inst[1] = 'r3'
//                 inst[2] = 'r1'
//                 inst[3] = 'r0'
//                 break
//             case 3:
//                 inst[0] = 'LW'
//                 inst[1] = 'r1'
//                 inst[2] = 'r2'
//                 inst[3] = '0'
//                 break
//             case 4:
//                 inst[0] = 'ADD'
//                 inst[1] = 'r3'
//                 inst[2] = 'r1'
//                 inst[3] = 'r0'
//                 break
//             default:
//                 rand(inst)
//                 break
//         }
//     })
// })
</script>

<template>
    <ol id="instlist">
        <li
            v-for="inst in instructions.length"
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
                    v-model="instructions[inst - 1][0]"
                >
                    <option value="ADD">ADD</option>
                    <option value="SUB">SUB</option>
                    <option value="MUL">MUL</option>
                    <option value="DIV">DIV</option>
                    <option value="LW">LW</option>
                </select>
                <input
                    type="text"
                    :name="`regSaida${inst}`"
                    class="w-10"
                    v-model="instructions[inst - 1][1]"
                />
                <span class="text-white">,</span>
                <input
                    type="text"
                    :name="`reg1-${inst}`"
                    class="w-10"
                    v-model="instructions[inst - 1][2]"
                />
                <span
                    v-if="instructions[inst - 1][0] != 'LW'"
                    class="text-white"
                    >,</span
                >
                <span
                    v-else
                    class="text-white"
                    >(</span
                >
                <input
                    type="text"
                    :name="`reg2-${inst}`"
                    class="w-10"
                    v-model="instructions[inst - 1][3]"
                />
                <span
                    v-if="instructions[inst - 1][0] == 'LW'"
                    class="text-white"
                    >)</span
                >
                <button @click="removeInst(instructions[inst - 1])">
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
</template>
