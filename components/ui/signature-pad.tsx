import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import { useFormContext } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas"
import { Button } from "./button";

type SignaturePadType = {
    name: string
}

export type SignaturePadRef = {
  clear: () => void
}

export const SignaturePad = forwardRef<SignaturePadRef, SignaturePadType>(({ name }, ref) => {
    const sigCanvas = useRef<SignatureCanvas>(null)
    const { setValue, watch } = useFormContext()
    const [isInitialized, setIsInitialized] = useState(false)
    const signatureData = watch(name)

    const handleClear = () => {
        sigCanvas.current?.clear();
        setValue(name, "", { shouldValidate: true })
    }

    const handleEnd = () => {
        if (sigCanvas.current) {
        const signatureData = sigCanvas.current.toDataURL("image/png");
        setValue(name, signatureData, { shouldValidate: true })
        }
    }

    // Initialize with empty value
    useEffect(() => {
      if (!isInitialized && !signatureData) {
          setValue(name, "", { shouldValidate: false })
          setIsInitialized(true)
      }
    }, [name, setValue, isInitialized, signatureData])
    

    // Load existing signature when component mounts or when signatureData changes
    useEffect(() => {
      if (sigCanvas.current && signatureData) {
          sigCanvas.current.fromDataURL(signatureData)
      }
    }, [signatureData])

    // Save signature on resize
    useEffect(() => {
      const handleResize = () => {
          if (sigCanvas.current && watch(name)) {
              // Temporarily store the signature
              const signatureData = watch(name)
              
              // Clear and resize
              sigCanvas.current.clear()
              
              // Wait for the next tick to redraw
              setTimeout(() => {
                  if (signatureData && sigCanvas.current) {
                      sigCanvas.current.fromDataURL(signatureData)
                  }
              }, 100)
          }
      }

      window.addEventListener('resize', handleResize)
      
      return () => {
          window.removeEventListener('resize', handleResize)
      };
  }, [watch, name])

  useImperativeHandle(ref, () => ({
    clear: () => {
        sigCanvas.current?.clear()
    }
  }))

  return (
    <>
       <div className="border rounded-md p-2 mb-2">
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            className: "sigCanvas w-full h-[200px] max-md:h-[220px]",
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
})

SignaturePad.displayName = "SignaturePad"