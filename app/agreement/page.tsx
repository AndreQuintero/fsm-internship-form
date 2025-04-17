import { AgreementForm } from "@/components/template/agreement/form";
import { BaseTemplate } from "@/components/template/base";
import { getAgreementByHashId } from "../services/db/agreement";

const fetchAgreementData = async (hash_id?: string) => {
  if(!hash_id) return null
  try {
    return await getAgreementByHashId(hash_id)
  } catch(e) {
    console.log(e)
  }
  return null 
} 

type AgreementPageProps = {
  searchParams: Promise<{ hash_id?: string }>
}

export default async function Agreement({ searchParams }: AgreementPageProps) {
    const { hash_id } =  await searchParams
    const agreementData = await fetchAgreementData(hash_id) 
     return (
        <main>
          <BaseTemplate title="Internship Agreement Form">
            <AgreementForm data={agreementData}/>
          </BaseTemplate>
        </main>
      );
}