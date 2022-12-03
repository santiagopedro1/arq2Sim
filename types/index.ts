import * as consts from '../composables/constants'

export {}

declare global {
    type MemOP = typeof consts.MemOPs[number]

    type ULAOP = typeof consts.ULAOPs[number]

    type AllowedOP = MemOP | ULAOP

    interface BaseInstruction {
        OPcode: AllowedOP | ''
        RD: string
        OP1: string
        OP2: string
    }

    type MemInstruction = {
        OPcode: MemOP
        RD: string
        Shift: number
        Operando: string
        LugarBolha: number
        Espaços: number
    }

    type ULAInstruction = {
        OPcode: ULAOP
        RD: string
        Operando1: string
        Operando2: string
        LugarBolha: number
        Espaços: number
    }

    type Instruction = MemInstruction | ULAInstruction
    type InstructionList = Instruction[]
}
