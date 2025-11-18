import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore articles and insights about software development, technology, and engineering by Ertuğrul Bayraktar.",
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-gray-700 mb-12">
        Insights and articles about software development, technology, and engineering.
      </p>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-16">
        <div className="bg-white rounded-lg shadow-md p-12 text-center max-w-2xl">
          <svg
            className="w-24 h-24 mx-auto mb-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <h2 className="text-2xl font-bold mb-3 text-gray-800">
            Coming Soon
          </h2>
          <p className="text-gray-600 text-lg">
            Blog posts are on the way! Stay tuned for articles about software engineering, backend development, and technology insights.
          </p>
        </div>
      </div>
    </div>
  );
}

