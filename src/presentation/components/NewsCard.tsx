import { Calendar, User, Tag } from 'lucide-react'
import type { News } from '../../domain/models/News'
import { formatDateShort } from '../../core/utils/formatDate'
import { CATEGORY_LABELS, CATEGORY_COLORS } from '../../core/constants'

interface NewsCardProps {
  news: News
  featured?: boolean
}

export function NewsCard({ news, featured = false }: NewsCardProps) {
  return (
    <article
      className={`group bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 flex flex-col ${
        featured ? 'md:flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : ''}`}>
        <img
          src={news.image}
          alt={news.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            featured ? 'h-full min-h-[240px]' : 'h-52'
          }`}
          loading="lazy"
        />
        {news.important && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Importante
          </span>
        )}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
            CATEGORY_COLORS[news.category] ?? 'bg-gray-100 text-gray-700'
          }`}
        >
          {CATEGORY_LABELS[news.category] ?? news.category}
        </span>
      </div>

      <div className={`p-5 flex flex-col flex-1 ${featured ? 'md:p-8' : ''}`}>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDateShort(news.date)}
          </span>
          <span className="flex items-center gap-1">
            <User size={12} />
            {news.author}
          </span>
        </div>

        <h3
          className={`font-heading font-bold text-primary-900 group-hover:text-primary-600 transition-colors leading-tight mb-2 ${
            featured ? 'text-2xl' : 'text-lg'
          }`}
        >
          {news.title}
        </h3>

        <p className="text-gray-500 text-sm flex-1 line-clamp-3">{news.excerpt}</p>

        <div className="mt-4 flex items-center gap-2">
          <Tag size={14} className="text-primary-400" />
          <span className="text-xs text-primary-500 font-medium">
            {CATEGORY_LABELS[news.category]}
          </span>
        </div>
      </div>
    </article>
  )
}
