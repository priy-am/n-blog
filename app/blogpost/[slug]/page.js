import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

export default async function Page({ params }) {


  const filePath = `content/${params.slug}.md`;
  if (!fs.existsSync(filePath)) {
    notFound();
    return;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);
  // console.log(data, content)
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme:'github-dark', 
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="mx-auto max-w-5xl p-6  rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic ">
        &quot;{data.description} &quot;{" "}
      </p>
      <div className="flex gap-2 ">
        <p className="text-sm  mb-4 italic "> by {data.author}</p>
        <p className="text-sm  mb-4">{data.date}</p>
      </div>
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
      <OnThisPage htmlContent={htmlContent} />
    </div>
  );
}
