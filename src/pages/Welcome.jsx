let user_data = {'name' : 'Joseph', 'role' : 'user'}

export function Welcome(){
    return(
        <>
            <h1>Bienvenido {user_data.name}</h1>
            <p>Tu rol es: {user_data.role}</p>
        </>
    )
}