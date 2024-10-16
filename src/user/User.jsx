const User = ({position, info}) => {

    console.log(info[position].profileImage)
    return (<>
    <img src={info[position].profileImage} alt="" />
    <h1>{info[position].name}</h1>
    <p>{info[position].username}</p>
    <p>{info[position].email}</p>
    </>)
}

export default User;