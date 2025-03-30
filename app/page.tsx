import { ApplicationForm } from "@/components/template/application/form";
import { Container } from "@/components/ui/container";
import Image from "next/image";



export default function Home() {
 
  return (
    <main>
      <Container>
        <section className="flex flex-col justify-center items-center mt-10 lg:mt-30 p-2.5">
          <Image src="/logo.png" alt="Fire School of Ministry" width={250} height={250} className=""/>
          <h1 className="font-bold text-4xl text-center lg:text-6xl">Internship Application</h1>
          <p className="text-primary text-center mt-10">Students should use this form to apply for an internship after successfully identifying an internship opportunity.</p>
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
           <ApplicationForm />
          </div>          
        </section>
      </Container>
    </main>
  );
}