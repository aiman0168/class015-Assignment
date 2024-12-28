import Link from "next/link"
export default async function Home() {
const url = await fetch("https://jsonplaceholder.typicode.com/users")
const response = await url.json()
console.log(response)
return (
    <main>
      {
        response.map((user: any) => (
          <div>
            <Link href={`${user.id}`}>
              <h1 className="text-4xl mb-4">
                {user.name}
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  );
}