import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles, formatArticleDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read SuccessScript articles on software, frontend, backend, and database engineering.",
};

export default function BlogPage() {
  return (
    <article className="blog-page" aria-labelledby="page-title">
      <header className="blog-hero">
        <p className="page-eyebrow">05 / Ideas and insights</p>
        <h1 className="page-title" id="page-title">
          Blog
        </h1>
        <p className="page-intro">
          Notes on software engineering and the ideas, interfaces, services,
          and data that come together to make digital products.
        </p>
      </header>

      <section className="blog-list" aria-label="Articles">
        {blogArticles.map((article, index) => (
          <article className="blog-card" key={article.slug}>
            <div className="blog-card__index" aria-hidden="true">
              0{index + 1}
            </div>
            <div className="blog-card__body">
              <div className="blog-card__meta">
                <span>{article.category}</span>
                <time dateTime={article.publishedAt}>
                  {formatArticleDate(article.publishedAt)}
                </time>
              </div>
              <h2>
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p>{article.description}</p>
              <Link className="text-link" href={`/blog/${article.slug}`}>
                Read article <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
}
