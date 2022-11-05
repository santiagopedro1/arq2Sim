<script setup lang="ts">
let pronto = ref(true)
let where = ref(0)
let ok = ref(false)

const instNumb = instNumbr()

function fodafn() {
    console.log('fodafn')
}
</script>

<template>
    <section class="grid-rows-2">
        <div class="flex">
            <span
                v-for="numb in instNumb"
                class="text-black"
            >
                foda
            </span>
        </div>
        <div>
            <button
                class="px-9 py-5 bg-amber-900 text-white"
                :class="{ 'cursor-not-allowed': ok }"
                :disabled="ok"
                id="next"
                @click="fodafn"
            >
                Next
            </button>
            <div
                v-if="pronto"
                class="flex overflow-scroll pb-4"
            >
                <div
                    class="flex gap-3 flex-col items-center hover:bg-slate-400 px-16 border-r-4 border-dashed border-black"
                >
                    <p>1</p>
                    <ifid />
                </div>
                <div
                    class="flex gap-3 flex-col items-center hover:bg-slate-400 px-16 border-r-4 border-dashed border-black"
                >
                    <p>2</p>
                    <ula />
                </div>
                <div
                    class="flex gap-3 flex-col items-center hover:bg-slate-400 px-16 border-r-4 border-dashed border-black"
                >
                    <p>3</p>
                    <wb />
                </div>
            </div>
        </div>
    </section>
</template>
