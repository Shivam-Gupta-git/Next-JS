export const metadata = {
  title : "About Page",
  description: "this is my About page",
  authors:[
    {name: "shivam gupta"},
    {name: "shivam technical", url: "shivamtech.com"}
  ],
  keywords:["reactjs", "nextjs", "javascript", "html", "css"]
}

const About = async () => {
  return(
    <h1>About Page</h1>
  )
}
export default About