
import Link from "next/link";

export default function Article() {
  return (
    <div>
      <h1>Article Page</h1>
      <ul>
        <li>
          <Link href="/article/1?ln=en">Ennglish</Link>
        </li>
        <li>
          <Link href="/article/2?ln=es">Spanish</Link>
        </li>
        <li>
          <Link href="/article/3?ln=fr">France</Link>
        </li>
      </ul>
    </div>
  );
}
