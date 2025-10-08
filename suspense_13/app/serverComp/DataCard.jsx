
const DataCard = async () => {

  await new Promise ((resolve) => {
    setTimeout(() => {
     resolve()
    }, 3000)
  })

  return (
    <div className="w-full flex items-center justify-center">
    <h1 className="w-[60%] text-center mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam quis tempora necessitatibus autem cupiditate earum corrupti eos nam culpa fuga consectetur accusantium, ipsam maiores velit quaerat atque facilis dicta enim assumenda neque? Hic, nihil sed in facilis, laboriosam ipsa doloribus soluta vero dolorum porro dolorem praesentium velit aut magnam quam et veritatis odit? Aliquam!</h1>
      </div>
  )
}

export default DataCard