import Quagga from "quagga"
import { useEffect, useRef } from 'react'

import styles from '../assets/styles/Scanner.module.css'

export function Scanner({ onDetected }) {

    const scannerRef = useRef(null)

    useEffect(() => {
        Quagga.init({
            inputStream: {
                target: scannerRef.current,
                type: "LiveStream",
                constraints: {
                    width: { min: 640 },
                    height: { min: 480 },
                    facingMode: "environment",
                    aspectRatio: { min: 1, max: 2 }
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
            onDetected(result.codeResult.code)
        })
        return () => {
            Quagga.stop()
            Quagga.offDetected()
        }
    }, [onDetected])

    return (
        <>
            <div ref={scannerRef} className={styles.scannerContainer}>
                <div className={styles.scannerOverlay}></div>
            </div>
        </>
    )
}