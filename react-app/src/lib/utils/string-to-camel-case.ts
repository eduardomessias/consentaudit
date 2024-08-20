export default function camelCase(str: string): string {
    let camel = str
    camel = camel.toLowerCase().charAt(0).toUpperCase() + camel.slice(1)
    return camel
}