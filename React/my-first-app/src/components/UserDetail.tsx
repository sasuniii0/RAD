interface UserDetailsPropsType{
    name : String
    age : number
    email ?: String // now this is Optional
    isAdmin : boolean
}

const UserDetail = ({name,age,email,isAdmin} : UserDetailsPropsType)=>{
    return (
        <>
            <h1>Name : {name}</h1>
            <p>Age : {age}</p>
            <p>Email : {email}</p>
            <p>Admin : {isAdmin ? "Yes" : "No"}</p>
        </>
    )

}
export default UserDetail