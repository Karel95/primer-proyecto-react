import { useState } from "react";

export const useCounter = (valorInicial = 0) => {

    const [contador, setContador] = useState(valorInicial)

    const inc = (valor = 1) => {
        setContador(contador + valor)
    }
    const reset = () => {
        setContador(0)
    }
    const dec = (valor = 1, negativo) => {
        if (contador < 1 && !negativo) return
        setContador(contador - valor)
    }

  return {
    contador,
    inc,
    reset,
    dec
  }
}
