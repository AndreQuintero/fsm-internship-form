import { AgreementFormData } from "./agreement-form";
import { addHoursToDate, isDateExpired } from "./date";
import { AgreementData, convertAgreementDbDataToAgreementForm, updateFormExpired } from "./db/agreement";
import { FormStatus } from "./form";
import { setUrl } from "./hash";

export const submitRequest = async (values: AgreementFormData, hash_id?: string) => {
    const response = await fetch(setUrl("/api/agreement/submit", hash_id), {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    return response
}

export const generateLinkRequest = async (values: AgreementFormData) => {
    const response = await fetch("/api/agreement", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    return response
}

export const checkIfDateIsExpired = (createdAt: Date) => {
    const targetDate = addHoursToDate(createdAt, Number(process.env.EXPIRATION_TIME!))
    const currentDate = new Date()
    return isDateExpired(currentDate, targetDate)
}

export const handleExpirationDate = async (data: AgreementData, hash: string) => {
    if(checkIfDateIsExpired(new Date(data.created_at))) {
        try {
          await updateFormExpired(hash, convertAgreementDbDataToAgreementForm(data))
          data.form_status = FormStatus.EXPIRED
        } catch(e) {
          console.log(e)
        }
      }
      return data
}

export const checkExpiration = async (data: AgreementData | null) => {
    if(!data) return null
    if(data.form_status === FormStatus.VALID) return await handleExpirationDate(data, data.hash)
    return data
}
  