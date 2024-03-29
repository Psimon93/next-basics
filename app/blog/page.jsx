export default async function Page() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   next: {
  //     revalidate: 30,
  //   },
  // });
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // console.log(data);
  return (
    <main>
      <h1>blog page</h1>
      {data.map((post) => (
        <p>{post.title}</p>
      ))}
    </main>
  );
}
export const revalidate = 30;
