export default async function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  // if (slug.length === 0) {
  //   return <h1>Select a doc to get started</h1>;
  // }
  if (slug?.length === 1) {
    return <h1>function {slug[0]}</h1>;
  }
  if (slug?.length === 2) {
    return <h1>function {slug[0]}, cocept {slug[1]}</h1>;
  }
  
  return (
    <div>
      <h1>Docs Page</h1>
    </div>
  );
}