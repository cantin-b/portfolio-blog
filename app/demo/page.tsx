const DemoPage = async () => {
  const posts = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts`
  ).then(res => res.json())

  return (
    <div className="mt-20 w-3/5 mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-semibold">DEMO PAGE</h1>
      <ul className="mt-8">
        {posts.map((post: any) => (
          <li key={post.id} className='py-2'>
            <a 
              className="cursor-pointer hover:text-zinc-600"
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer">
              {post.title.rendered}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DemoPage
