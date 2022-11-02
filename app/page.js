
async function getName(){
    let info = await fetch("http://localhost:3000/api/name")
    return info.json()
}

export default async function Page(){

    const name = await getName()

    return(
            <h1>{name}</h1>
    )
}