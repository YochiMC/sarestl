import Quagga from "quagga"
import { useEffect, useRef, useState } from 'react'

export function Scanner() {

    const scannerRef = useRef(null)
    const [matricula, setMatricula] = useState("")

    useEffect(() => {
        Quagga.init({
            inputStream: {
                target: scannerRef.current,
                type: "LiveStream",
                constrains: {
                    width: { min: 60 },
                    height: { min: 480 },
                    facingMode: "environment",
                    aspecRatio: { min: 1, max: 2 }
                }
            },
            decoder: {
                readers: ["code_128_reader"]
            }
        }, function (err) {
            if (err) {
                return console.log(err)
            }
            Quagga.start()
        })
        Quagga.onDetected(function (result) {
            setMatricula(result.codeResult.code)
        })
        return () => {
            Quagga.stop()
            Quagga.offDetected()
        }
    })

    return (
        <>
            <div ref={scannerRef} style={{ width: "100%", height: "300px" }}>
            </div>
            <p>Bienvenido {matricula}</p>
        </>
    )
}