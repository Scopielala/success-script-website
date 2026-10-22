import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogArticles,
  formatArticleDate,
  getBlogArticle,
} from "@/lib/blog";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="article-page" aria-labelledby="article-title">
      <Link className="text-link article-back" href="/blog">
        <span aria-hidden="true">←</span> All articles
      </Link>

      <header className="article-header">
        <p className="page-eyebrow">{article.category}</p>
        <h1 className="page-title" id="article-title">
          {article.title}
        </h1>
        <p className="page-intro">{article.description}</p>
        <time className="article-date" dateTime={article.publishedAt}>
          {formatArticleDate(article.publishedAt)}
        </time>
      </header>

      <div className="article-content">
        {article.sections.map((section, index) => (
          <section key={section.heading} aria-labelledby={`article-section-${index}`}>
            <h2 id={`article-section-${index}`}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>

      <footer className="article-footer">
        <p className="page-eyebrow">Continue the conversation</p>
        <Link className="text-link" href="/contact">
          Contact SuccessScript <span aria-hidden="true">↗</span>
        </Link>
      </footer>
    </article>
  );
}
