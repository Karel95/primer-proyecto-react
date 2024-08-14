import react, { useState } from "react"

export const info = () => {
    const [state, setState] = useState({
        user: "Karel Dev",
        pass: [1, 2, 3, 4]
    })
    const {user, pass} = state
    return {
        user,
        pass
    }
}

