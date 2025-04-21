import { AgreementForm } from "@/components/template/agreement/form";
import { BaseTemplate } from "@/components/template/base";
import { AgreementData, getAgreementByHashId } from "../services/db/agreement";
import { FormStatus } from "../services/form";
import { checkExpiration } from "../services/agreement";

const fetchAgreementData = async (hash_id?: string) => {
  if(!hash_id) return null
  try {
    const data = await getAgreementByHashId(hash_id)
    const dataUpdated = await checkExpiration(data)
    return dataUpdated
  } catch(e) {
    console.log(e)
  }
  return null 
} 

const handleData = (data: AgreementData | null) => {
  if(!data) return null
  return data.form_status === FormStatus.VALID ? data : null
}

type AgreementPageProps = {
  searchParams: Promise<{ hash_id?: string }>
}

export default async function Agreement({ searchParams }: AgreementPageProps) {
    const { hash_id } =  await searchParams
    const data = await fetchAgreementData(hash_id)
    
    
    const getStatus = (data: AgreementData | null): FormStatus => {
      if (!data && !hash_id) return FormStatus.VALID
      if (!data && hash_id) return FormStatus.INVALID
      return data?.form_status ?? FormStatus.INVALID
    }

     return (
        <main>
          <BaseTemplate title="Internship Agreement Form">
            <AgreementForm status={getStatus(data)} data={handleData(data)}/>
          </BaseTemplate>
        </main>
      )
}