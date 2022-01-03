import { useParams } from 'react-router-dom'

export function ProductDetail(){
  const params = useParams()

  return(
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  )
}