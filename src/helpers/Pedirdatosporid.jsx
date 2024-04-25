
import data from "../data/db.json"

export default function Pedirdatosporid(id) {
    return new Promise((resolve,reject) =>{
        
        const item = data.find((el) => el.id === id);

        if(item) {
            resolve(item)
        }else{
            reject({
                error: "No se encontro el producto"
            })
        }

    })
}
