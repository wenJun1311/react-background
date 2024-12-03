import { useSearchParams } from "react-router-dom"
const Article = () => {
  const [params] = useSearchParams()
  console.log(params)
  return <div>这里是id,{params.get("id")}</div>
}

export default Article
