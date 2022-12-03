import { MemOPs, ULAOPs } from './constants'

export const isMemOP = (OP: any): OP is MemOP => {
    return MemOPs.includes(OP)
}

export const isULAOP = (OP: any): OP is ULAOP => {
    return ULAOPs.includes(OP)
}

export const isAllowedOP = (OP: any): OP is AllowedOP => {
    return isMemOP(OP) || isULAOP(OP)
}

export const createInstruction = (
    inst: BaseInstruction
): Instruction | Error => {
    if (isMemOP(inst.OPcode)) {
        if (!isNaN(Number(inst.OP1))) {
            const OP1 = Number(inst.OP1)
            return {
                OPcode: inst.OPcode,
                RD: inst.RD.toUpperCase(),
                Shift: OP1,
                Operando: inst.OP2.toUpperCase(),
                LugarBolha: 0,
                Espaços: 0
            }
        } else {
            return new Error('Invalid instruction')
        }
    } else if (isULAOP(inst.OPcode)) {
        return {
            OPcode: inst.OPcode,
            RD: inst.RD.toUpperCase(),
            Operando1: inst.OP1.toUpperCase() as string,
            Operando2: inst.OP2.toUpperCase(),
            LugarBolha: 0,
            Espaços: 0
        }
    } else {
        return new Error('Invalid instruction')
    }
}

export const checkForConflict = (instructions: InstructionList) => {
    let bubble = 0
    let comp = 0
    for (let i = 0; i < instructions.length; i++) {
        if (!instructions[i + 1]) break
        if (isMemOP(instructions[i].OPcode)) {
            const atual = instructions[i] as MemInstruction
            if (isULAOP(instructions[i + 1].OPcode)) {
                const prox = instructions[i + 1] as ULAInstruction
                if (
                    atual.RD === prox.Operando1 ||
                    atual.RD === prox.Operando2
                ) {
                    bubble = 2
                    prox.LugarBolha = bubble
                    prox.Espaços = comp + i + 1
                }
            }
        } else {
            instructions[i + 1].LugarBolha = bubble
            instructions[i + 1].Espaços = comp + i + 1
        }
        if (bubble > 0) {
            bubble--
            if (bubble === 0) comp++
        }
    }
    return instructions
}

export const areInstructionsValid = (instructions: InstructionList) => {
    if (instructions.length === 0) return Error('Não há instruções')
    for (let i = 0; i < instructions.length; i++) {
        if (Object.values(instructions[i]).includes(''))
            return Error('Algum campo está vazio')

        if (!isAllowedOP(instructions[i].OPcode)) return Error('OP inválido')

        if (isMemOP(instructions[i].OPcode)) {
            const a: MemInstruction = instructions[i] as MemInstruction
            if (a.Shift < 0) return Error('Shift negativo')
            if (isNaN(a.Shift)) return Error('Shift não é um número')
        }
    }
    return true
}
