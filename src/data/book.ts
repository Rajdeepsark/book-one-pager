import type { ImageMetadata } from 'astro';
import asomiyaPratidinLogo from '../assets/press/asomiya-pratidin.png';
import assamTribuneLogo from '../assets/press/assam-tribune.png';
import dainikJanambhumiLogo from '../assets/press/dainik-janambhumi.png';
import niyomiyaBartaLogo from '../assets/press/niyomiya-barta.png';
// SAMPLE assets for the client presentation (stock photo from Pexels, real institutions' logos) — replace before launch
import sampleAuthorPortrait from '../assets/sample/author-portrait.jpg';
import sampleCottonUniversity from '../assets/sample/cotton-university.png';
import sampleDibrugarhUniversity from '../assets/sample/dibrugarh-university.png';
import sampleGauhatiUniversity from '../assets/sample/gauhati-university.png';
import sampleReviewer1 from '../assets/sample/reviewer-1.jpg';
import sampleReviewer2 from '../assets/sample/reviewer-2.jpg';
import sampleReviewer3 from '../assets/sample/reviewer-3.jpg';

// Swap every [placeholder] for the real book details.
//
// Real cover: drop the file in src/assets/ and import it, e.g.
//   import cover from '../assets/cover.jpg';
// then set `cover: cover` below. The placeholder cover disappears automatically.

export interface PressOutlet {
  /** Used as the logo's alt text, or shown as a placeholder when there is no logo. */
  name: string;
  logo?: ImageMetadata;
}

export interface Review {
  quote: string;
  reviewer: string;
  /** Reviewer photo (square works best); a silhouette shows until set. */
  avatar?: ImageMetadata;
  /** Publication or designation. */
  role: string;
  outlet: PressOutlet;
  /** Out of 5. */
  rating: number;
}

export interface PressCoverage {
  eyebrow: string;
  headline: string;
  description: string;
  outlets: PressOutlet[];
  reviewsEyebrow: string;
  reviews: Review[];
}

export interface VideoSectionContent {
  eyebrow: string;
  headline: string;
  description: string;
  video: {
    title: string;
    /** Shown on the thumbnail, e.g. '2:45'. */
    duration: string;
    /** The ID from a YouTube link, e.g. youtube.com/watch?v=THIS_PART */
    youtubeId?: string;
    /** Or a self-hosted file in public/, e.g. '/video/inside.mp4' */
    src?: string;
    /** 16:9 still shown before playing; until set, a staged shot of the 3D book shows. */
    poster?: ImageMetadata;
  };
}

export interface Chapter {
  title: string;
  description?: string;
}

export interface InsideBookContent {
  eyebrow: string;
  headline: string;
  description: string;
  takeaways: string[];
  /** Highlighted in blue after the takeaways. */
  finalStatement: string;
  toc: { heading: string; ctaLabel: string; chapters: Chapter[] };
}

export interface AuthorContent {
  /** Natural, editorial portrait (portrait orientation); a placeholder shows until set. */
  portrait?: ImageMetadata;
  /** Follows the author's name, which is shown in bold. */
  intro: string;
  bio: string;
  // Only list credentials that are accurate. Logos work like the press logos: set `logo` to replace the placeholder name.
  credentials: {
    workedWith: { label: string; outlets: PressOutlet[] };
    recognition: { label: string; items: string[] };
    featuredIn: { label: string; outlets: PressOutlet[] };
  };
  letter: {
    greeting: string;
    /** Mentions of the book title are set in italics automatically. */
    paragraphs: string[];
    signOff: string;
    /** Scan of the handwritten signature (transparent or white background). */
    signature?: ImageMetadata;
  };
}

export interface Link {
  label: string;
  href: string;
}

export interface PurchaseOption {
  /** Picks the product shot: devices for 'ebook', the 3D book for 'paperback'. */
  format: 'ebook' | 'paperback';
  heading: string;
  details: string;
  /** One button per store or format; the first is the main button. */
  ctas: Link[];
  /** Text link under the buttons. */
  link?: Link;
}

export interface PurchaseContent {
  heading: string;
  options: PurchaseOption[];
  rating: { value: string; reviewCount: string };
}

export interface FaqContent {
  eyebrow: string;
  headline: string;
  description: string;
  /** The first question starts open. */
  items: { question: string; answer: string }[];
}

export interface NavContent {
  /** Book or publisher logo; until set, a small cover and the book title show. */
  logo?: ImageMetadata;
  /** In-page links: each href is a section id, e.g. '#faq'. */
  links: Link[];
  cta: Link;
}

export interface FooterContent {
  brand: string;
  /** Author or publisher logo; the brand name shows until set. */
  logo?: ImageMetadata;
  description: string;
  links: Link[];
  /** Shown as "© {current year} {copyrightHolder}". */
  copyrightHolder: string;
}

export interface Book {
  eyebrow: string;
  headline: string;
  /** Set to 'as' when the headline is in Assamese, for script-friendly spacing. */
  headlineLang?: string;
  description: string;
  title: string;
  /** Set to 'as' when the cover title is in Assamese. */
  titleLang?: string;
  author: string;
  language: string;
  cover?: ImageMetadata;
  /** Line breaks for the placeholder cover only. */
  coverTitleLines: string[];
  /** Sticky-note line from the book; `circled` is the word marked in orange. */
  quote: { before: string; circled: string; after: string };
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  press: { label: string; outlets: PressOutlet[] };
  pressCoverage: PressCoverage;
  videoSection: VideoSectionContent;
  insideBook: InsideBookContent;
  aboutAuthor: AuthorContent;
  purchase: PurchaseContent;
  faq: FaqContent;
  nav: NavContent;
  footer: FooterContent;
  /** Used by every "preview" button. */
  previewUrl: string;
}

const title = '[Book Title]';
const author = '[AUTHOR NAME]';
// Replace with [FREE PREVIEW URL]; until then preview buttons jump to the table of contents
const previewUrl = '#contents';

/** ['[PREFIX 01]', '[PREFIX 02]', …] */
const numbered = (prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => `[${prefix} ${String(i + 1).padStart(2, '0')}]`);

// Only list publications that have actually reviewed or featured the book.
// Logos are the papers' own mastheads, taken from their official websites.
// Reuse these in reviews too, e.g. `outlet: publications.assamTribune`.
export const publications = {
  assamTribune: { name: 'The Assam Tribune', logo: assamTribuneLogo },
  dainikJanambhumi: { name: 'Dainik Janambhumi', logo: dainikJanambhumiLogo },
  asomiyaPratidin: { name: 'Asomiya Pratidin', logo: asomiyaPratidinLogo },
  niyomiyaBarta: { name: 'Niyomiya Barta', logo: niyomiyaBartaLogo },
} satisfies Record<string, PressOutlet>;
const allPublications = Object.values(publications);

const reviewPlaceholder = {
  quote: '[A memorable line from the book review that captures its value to readers.]',
  reviewer: '[REVIEWER NAME]',
  role: '[PUBLICATION / DESIGNATION]',
  outlet: { name: '[PUBLICATION LOGO]' },
  rating: 5,
};

export const book: Book = {
  eyebrow: 'A story rooted in Assam',
  headline: 'Discover the stories of [BOOK SUBJECT].',
  description:
    'A book about [BOOK THEME], bringing together stories, ideas, and perspectives that connect with the people and culture of Assam.',
  title,
  author,
  language: '[BOOK LANGUAGE]',
  coverTitleLines: ['[Book', 'Title]'],
  quote: { before: '“[A short line from the', circled: 'book', after: '.]”' },
  primaryCta: { label: 'Get your copy', href: '#buy' },
  secondaryCta: { label: 'Read a preview', href: previewUrl },
  previewUrl,
  press: { label: 'Featured in', outlets: allPublications },
  pressCoverage: {
    eyebrow: 'Recognised by the press of Assam',
    headline: 'A story worth sharing.',    description: `${title} has been reviewed and recognised by publications across Assam.`,
    outlets: allPublications,
    reviewsEyebrow: 'What the reviewers say',
    // SAMPLE photos and outlets for the client presentation — replace with the real reviewers
    reviews: [
      { ...reviewPlaceholder, avatar: sampleReviewer1, outlet: publications.assamTribune },
      { ...reviewPlaceholder, avatar: sampleReviewer2, outlet: publications.asomiyaPratidin },
      { ...reviewPlaceholder, avatar: sampleReviewer3, outlet: publications.niyomiyaBarta },
    ],
  },
  videoSection: {
    eyebrow: '[Book film / A note from the author]',
    headline: `Get a glimpse inside ${title}.`,
    description: `Discover the stories, ideas, and inspiration behind ${title} and the journey that brought it to life.`,
    video: { title: `Inside ${title}`, duration: '[0:00]' }, // add youtubeId or src to make it play
  },
  insideBook: {
    eyebrow: 'Inside the book',
    headline: 'Here’s what you’ll discover.',
    description: '[SHORT DESCRIPTION OF THE BOOK AND WHAT READERS WILL GAIN]',
    takeaways: numbered('KEY TAKEAWAY', 7),
    finalStatement: '[FINAL STATEMENT ABOUT THE BOOK’S VALUE]',
    toc: {
      heading: 'Table of contents',
      ctaLabel: 'Free preview',
      chapters: Array.from({ length: 6 }, () => ({
        title: '[CHAPTER TITLE]',
        description: '[SHORT CHAPTER DESCRIPTION]',
      })),
    },
  },
  aboutAuthor: {
    // SAMPLE for the client presentation: the portrait, organisations, awards and press below are
    // illustrative only — replace them with the author's real details before launch.
    portrait: sampleAuthorPortrait,
    intro: 'is [AUTHOR BACKGROUND / PROFESSION] with a passion for [BOOK SUBJECT / THEME].',
    bio: '[SHORT PARAGRAPH ABOUT THE AUTHOR’S EXPERIENCE, JOURNEY, AND REASON FOR WRITING THE BOOK.]',
    credentials: {
      workedWith: {
        label: 'Has worked with',
        outlets: [
          { name: 'Gauhati University', logo: sampleGauhatiUniversity },
          { name: 'Cotton University', logo: sampleCottonUniversity },
          { name: 'Dibrugarh University', logo: sampleDibrugarhUniversity },
        ],
      },
      recognition: {
        label: 'Recognition & achievements',
        items: ['Sahitya Akademi Yuva Puraskar', 'Assam Valley Literary Award'],
      },
      featuredIn: { label: 'Featured in', outlets: [publications.assamTribune, publications.asomiyaPratidin] },
    },
    letter: {
      greeting: 'Dear Reader,',
      paragraphs: [
        `Thank you for taking an interest in ${title}.`,
        '[PERSONAL INTRODUCTION FROM THE AUTHOR AND THE STORY BEHIND THE BOOK.]',
        'I started working on this book because [AUTHOR’S MOTIVATION]. Over time, it became a way to explore [BOOK SUBJECT / CENTRAL IDEA] and share what I have learned along the way.',
        'Through these pages, I hope you discover [KEY INSIGHT OR MESSAGE]. Whether you are familiar with this subject or exploring it for the first time, I hope you find something meaningful here.',
        'This book is a reflection of [AUTHOR’S EXPERIENCE, RESEARCH, OR JOURNEY]. I am grateful to everyone who helped bring it to life, and to you for giving it your time.',
        'I hope you enjoy reading it as much as I enjoyed creating it.',
      ],
      signOff: 'Warm regards,',
    },
  },
  // Replace each '#buy' with the real Kindle and Flipkart links
  purchase: {
    heading: 'Order the book',
    options: [
      {
        format: 'ebook',
        heading: 'eBook',
        details: 'Read it on Kindle.',
        ctas: [{ label: 'Buy on Kindle', href: '#buy' }],
      },
      {
        format: 'paperback',
        heading: 'Paperback',
        details: 'Pan-India shipping via Flipkart.',
        ctas: [{ label: 'Buy on Flipkart', href: '#buy' }],
        link: { label: 'Free preview', href: previewUrl },
      },
    ],
    rating: { value: '[STAR RATING]', reviewCount: '[NUMBER OF REVIEWS]' },
  },
  faq: {
    eyebrow: 'Got questions?',
    headline: 'Everything you need to know.',
    description: `Here are a few things you might want to know before getting your copy of ${title}.`,
    items: Array.from({ length: 7 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      return { question: `[FAQ QUESTION ${n}]`, answer: `[ANSWER ${n} — ONE OR TWO SHORT, CLEAR SENTENCES.]` };
    }),
  },
  nav: {
    links: [
      { label: 'About the book', href: '#film' },
      { label: 'What’s inside', href: '#inside' },
      { label: 'Reviews', href: '#press' },
      { label: 'Author', href: '#author' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: 'Buy now', href: '#buy' },
  },
  footer: {
    brand: '[AUTHOR / PUBLISHER]',
    description: '[SHORT BRAND DESCRIPTION]',
    // Replace each '#' with the real page or profile link
    links: [
      { label: 'About the author', href: '#author' },
      { label: 'Contact', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms & conditions', href: '#' },
    ],
    copyrightHolder: '[AUTHOR / PUBLISHER NAME]',
  },
};
