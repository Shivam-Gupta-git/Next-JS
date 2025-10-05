const ServerComp = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts"
  
  const response = await fetch(URL)
  const data = await response.json()
  // console.log(data)

return(
  <>
  <h1>Server Components</h1>
  <div className="w-[100%]">
  {
  data.map((item, index) => (
    <p key={index}>{item.body}</p>
  ))
  }  
  </div>  
  </>
)
}
export default ServerComp