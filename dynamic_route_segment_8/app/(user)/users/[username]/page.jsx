const SingleProfile = async (props) => {

  const user = await props.params
  console.log(user)
  return(
    <> 
    <h1>Single Profile</h1>
    <h1>User: {user.username}</h1>
    </>
  )
}
export default SingleProfile