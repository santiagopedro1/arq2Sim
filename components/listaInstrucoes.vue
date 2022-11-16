<script setup lang="ts">
const instructions = instList()

function addInst() {
    instructions.value.push(new Array(4))
}

function removeInst(inst: Array<string>) {
    const index = instructions.value.indexOf(inst)
    instructions.value.splice(index, 1)
}
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
                    <option value="add">ADD</option>
                    <option value="sub">SUB</option>
                    <option value="mul">MUL</option>
                    <option value="div">DIV</option>
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
                <span class="text-white">,</span>
                <input
                    type="text"
                    :name="`reg2-${inst}`"
                    class="w-10"
                    v-model="instructions[inst - 1][3]"
                />
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
