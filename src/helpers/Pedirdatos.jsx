
import data from "../data/db.json"

export default function Pedirdatos() {
  
    return new Promise((resolve) => {
        resolve(data)
    })
  
}

