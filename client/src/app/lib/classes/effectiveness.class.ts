import IEffectiveness from '@/app/lib/interfaces/effectiveness.interface'


export default class Effectiveness implements IEffectiveness {
    from: Date
    to: Date

    constructor(from: Date, to: Date) {
        this.from = from
        this.to = to
    }
}