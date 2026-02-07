
async function handleRequest() {
    try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e)
    }

}
handleRequest()