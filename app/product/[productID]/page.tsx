export default async function Product({ params }: { params: { productID: string } }) {
    const { productID } =  params;
  return (
    <div>
      <h1>Product Page {productID}</h1>
    </div>
  );
}