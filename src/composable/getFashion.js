import { ref } from 'vue'

const getFashion = () => {
    const fashions = ref([])
    const error = ref(null)
    const load = async () => {
        try {
            let fashionData = await fetch("https://my-json-server.typicode.com/jacker1306/vite-project/fashions")
            if(!fashionData.ok) {
                throw Error("Data not avaialble!")
            }
            fashions.value = await(fashionData.json())
        }
        catch(err) {
            error.value = err.message
        }
    }
    return {
        fashions,
        error,
        load
    }
}

export default getFashion