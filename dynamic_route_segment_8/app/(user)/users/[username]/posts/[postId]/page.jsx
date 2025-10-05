const SingleProfilePost = async (props) => {
 const user = await props.params
 console.log(user)

 return(
  <h1>UserName: {user.username}, PostId: {user.postId}</h1>
 )
}

export default SingleProfilePost