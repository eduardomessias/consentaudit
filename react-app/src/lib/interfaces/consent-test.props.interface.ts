export default interface IConsentTestProps {
    createContract: (previousState: any, formData: any) => void | Promise<void>
}