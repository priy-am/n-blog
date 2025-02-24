import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/onthispage";

export default function BlogPost({ title, description, author, date, htmlContent }) {
  return (
    <div className="mx-auto max-w-5xl p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="text-sm mb-4 italic">by {author}</p>
        <p className="text-sm mb-4">{date}</p>
      </div>
      <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <OnThisPage htmlContent={htmlContent} />
    </div>
  );
}

// 📌 Generate Static Paths for Blog Posts
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/content/`);
  const files = await res.json();

  const paths = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      params: { slug: file.replace(".md", "") },
    }));

  return { paths, fallback: false };
}

// 📌 Fetch Blog Post Data at Build Time
export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/content/${params.slug}.md`);
  
  if (!res.ok) {
    return { notFound: true };
  }

  const fileContent = await res.text();
  const { content, data } = matter(fileContent);

  // Markdown to HTML conversion
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title || "Untitled" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return {
    props: {
      title: data.title || "Untitled",
      description: data.description || "No description available.",
      author: data.author || "Unknown",
      date: data.date || "Unknown date",
      htmlContent,
    },
  };
}
