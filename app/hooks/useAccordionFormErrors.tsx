import { useCallback, useEffect, useState } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

type AccordionErrorMapping<FormData, Section extends string> = {
    [K in Section]: (keyof FormData)[];
}

export function useAccordionFormErrors<FormData extends FieldValues, Section extends string>(
    errors: FieldErrors<FormData>,
    sectionFieldMap: AccordionErrorMapping<FormData, Section>,
    initiallyOpened: Section[]
  ) {
    const [formsOpened, setFormsOpened] = useState<Section[]>(initiallyOpened)
  
    const updateAccordionState = useCallback(() => {
      const newAccordionValue = [...formsOpened]
  
      for (const [section, fields] of Object.entries(sectionFieldMap) as [Section, (keyof FormData)[]][]) {
        const hasError = fields.some((field) => errors[field])
        if (hasError && !newAccordionValue.includes(section)) {
          newAccordionValue.push(section)
        }
      }
  
      if (JSON.stringify(newAccordionValue) !== JSON.stringify(formsOpened)) {
        setFormsOpened(newAccordionValue)
      }
    }, [errors, formsOpened, sectionFieldMap])
  
    useEffect(() => {
      updateAccordionState()
    }, [updateAccordionState])
  
    return {
      formsOpened,
      setFormsOpened
    };
  }