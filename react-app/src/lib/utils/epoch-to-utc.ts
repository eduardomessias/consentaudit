export default function epochToUtc(epoch: bigint): Date {
    const epochNumber = Math.floor(Number(epoch) / 1000)
    const utc = new Date(epochNumber * 1000)
    const localDateTime = utc.toLocaleString()
    //console.log('Epoch:', epoch, '-> UTC:', localDateTime)
    return localDateTime as unknown as Date

}