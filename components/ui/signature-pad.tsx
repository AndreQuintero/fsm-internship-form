import { useEffect, useRef } from "react"
import { useFormContext } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas"
import { Button } from "./button";

type SignaturePadType = {
    name: string
}

export const SignaturePad = ({ name }: SignaturePadType) => {
    const sigCanvas = useRef<SignatureCanvas>(null)
    const { setValue, watch } = useFormContext()

    const handleClear = () => {
        sigCanvas.current?.clear();
        setValue(name, "", { shouldValidate: true });
    }

    const handleEnd = () => {
        if (sigCanvas.current) {
        const signatureData = sigCanvas.current.toDataURL("image/png");
        setValue(name, signatureData, { shouldValidate: true });
        }
    }

    useEffect(() => {
        setValue(name, "", { shouldValidate: false})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <>
       <div className="border rounded-md p-2 mb-2">
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            className: "sigCanvas h-[200px] max-md:h-[220px]",
          }}
          onEnd={handleEnd}
        />
      </div>
      <div className="flex justify-end items-center gap-4">
        <div className="text-right">
          {watch(name) ? (
            <p className="text-xs text-muted-foreground">✓ Signed</p>
          ) : (
            <p className="text-xs text-muted-foreground">Awaiting signature</p>
          )}
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={handleClear}
          className=""
        >
          Clear
        </Button>
      </div>
        
    </>
  )
}