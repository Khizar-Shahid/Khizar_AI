import Image from 'next/image';
import Link from 'next/link';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '../lib/image';

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      const imageUrl = urlForImage(value).width(1200).url();

      return (
        <figure className="my-8 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={imageUrl}
              alt={value.alt || 'Article visual illustration'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="p-3 text-center text-xs text-neutral-400">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-white md:text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-2 text-lg font-medium tracking-tight text-white">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-amber-500 bg-amber-500/10 py-3 px-5 italic text-neutral-200 rounded-r-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-4 text-base leading-relaxed text-neutral-300 md:text-lg">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-neutral-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-neutral-300">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-sm font-mono text-amber-400">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const isExternal =
        value?.blank ||
        (value?.href && (value.href.startsWith('http') || value.href.startsWith('https')));

      if (isExternal) {
        return (
          <a
            href={value?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 underline underline-offset-4 hover:text-amber-300 transition-colors"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={value?.href || '#'}
          className="text-amber-400 underline underline-offset-4 hover:text-amber-300 transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
};

export function CustomPortableText({ value }: { value: any[] }) {
  if (!value || !Array.isArray(value)) return null;
  return <PortableText value={value} components={portableTextComponents} />;
}
