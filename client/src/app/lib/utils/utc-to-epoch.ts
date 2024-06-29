export default function utcToEpoch(utc: Date): number {
    return new Date(utc).getTime()
}