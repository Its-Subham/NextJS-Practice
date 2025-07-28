import { notFound } from "next/navigation";
export default function Product({ params }: { params: { productID: string, reviewID: string } }) {
    const { productID, reviewID } =  params;
    if (parseInt(reviewID) > 1000){
        notFound();
    }
  return (
    <div>
      <h1>Product Page {productID} Review Page {reviewID}</h1>
    </div>
  );
}