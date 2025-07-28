"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function Article() {
  const params = useParams();
  const searchParams = useSearchParams();
  // console.log(searchParams);
  // Get param from search string correctly:
  const ln = searchParams.get("ln");
  const { articleID } = params as { articleID?: string }; // Add optional in case it's not present

  console.log(ln);

  if (ln === "en") {
    return (
      <>
        <h1>Article ID = {articleID}</h1>
        <div>English Article</div>
      </>
    );
  }
  if (ln === "es") {
    return (
      <>
        <h1>Article ID = {articleID}</h1>
        <div>Spanish Article</div>
      </>
    );
  }
  if (ln === "fr") {
    return (
      <>
        <h1>Article ID = {articleID}</h1>
        <div>French Article</div>
      </>
    );
  }

  return (
    <>
      <h1>Article ID = {articleID}</h1>
      <div>No language selected</div>
    </>
  );
}


// export default function Article({
//   params,
//   searchParams,
// }: {
//   params: { articleID: string };
//   searchParams: { ln: string };
// }) {
//   const { articleID } = params;
//   const { ln } = searchParams;
//   console.log(ln);
//   if (ln === "en") {
//     return (
//       <>
//         <h1>Ariticle ID = {articleID}</h1>
//         <div>English Article</div>
//       </>
//     );
//   }
//   if (ln === "es") {
//     return (
//       <>
//         <h1>Ariticle ID = {articleID}</h1>
//         <div>Spanish Article</div>
//       </>
//     );
//   }
//   if (ln === "fr") {
//     return (
//       <>
//         <h1>Ariticle ID = {articleID}</h1>
//         <div>French Article</div>
//       </>
//     );
//   }
// }
