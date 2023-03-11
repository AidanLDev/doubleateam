import { engPolicy, indPolicy } from './privacyPolicy';

// Blogs
import {
  howToPassIeltsEngTrans,
  howToPassIeltsIndTrans,
} from './blogs/howToPassIelts';

import {
  engGettingUKFamilyVisa,
  indGettingUkFamilyVisa,
} from './blogs/gettingUkFamilyVisa';

import {
  engIndonesiaTravelGuide,
  indIndonesiaTravelGuide,
} from './blogs/indonesiaTravelGuide';

import {
  engJogjaTravelGuide,
  indJogjaTravelGuide,
} from './blogs/jogjaTravelGuide';

import {
  engMarriageRequirements,
  indMarriageRequirements,
} from './blogs/marriageRequirements';

import {
  engBestUKThemeParks,
  indBestUKThemeParks,
} from './blogs/bestUKThemeParks';

import { engAltonTowers, indAltonTowers } from './blogs/altonTowers';

import { engUsingAstro, indUsingAstro } from './blogs/usingAstro';

import {
  engNetlifyFreeStaticHosting,
  indNetlifyFreeStaticHosting,
} from './blogs/netlifyFreeStaticHosting';

import {
  engBuildingCICDForFree,
  indBuildingCICDForFree,
} from './blogs/buildingCICDForFree';

import {
  engRoyalFamilyOrigin,
  indRoyalFamilyOrigin,
} from './blogs/royalFamilyOrigin';

import {
  eng1000IndonesianWords,
  ind1000IndonesianWords,
} from './blogs/1000IndonesianWords';

import { engAWSEC2, indAWSEC2 } from './blogs/awsEC2';
import { engAWSS3, indAWSS3 } from './blogs/awsS3';
import {
  engLessonsInChemistry,
  indLessonsInChemistry,
} from './blogs/lessons-in-chemistry-bonnie-garmus';

export const translationsEn = {
  toggleLangTooltip: 'klik di sini untuk mengubah bahasa Indonesia',
  copyCodeSnippet: 'Copy code snippet',
  copied: 'Copied!',
  topBar: {
    allBlogs: 'All Blogs',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
  },
  aboutUs: {
    heading: 'About us',
    jointIntro:
      "Arni and Aidan are two individuals, an Indonesian woman and English man, who when put together make the double A team 😎 We're passionate about traveling, living life to the full and helping others.",
    arniIntro:
      'Originally from Bandung Indonesia. I have a affection for painting, nail art and anything creative. A lover of the outdoors, hiking is a big hobby of mine.',
    aidanIntro:
      'Aidan Lowson, from the UK. I love all things tech, be it playing around with hardware to learning the latest in web technologies. Always keen to learn anything new, reading and running are my main hobbies.',
  },
  contactUs: {
    heading: 'Contact Us',
    email: 'Send an email to our double a team mailbox',
    arSocialsHeader: "Arni's Socials",
    youTube: 'Be sure to visit our YouTube channel!',
    arIg: "You're missing out if you're not following Arni's Insta",
    arTwitter:
      'Not much of a tweeter, but worth a follow in-case she finds her voice',
    aiSocialsHeader: "Aidan's Socials",
    aiIg: 'Not quite as good a photographer as Arni, however we try to keep IG relatively up to date so give us a follow',
    aiTwitter:
      'Again... much of a tweeter, but you never know if that will change',
    aiFb: 'The classic FB',
    aiWeb: 'My personal portfolio website',
    aiLinkedIn: 'For the professionals out there',
  },
  privacyPolicy: {
    ...engPolicy,
  },
  posts: {
    allBlogsHeading: 'Spreading what we know, with those who want to know',
    blogSearchPlaceHolder: 'Blog Search...',
    filterHeading: 'Filter by tag',
  },
  blogs: {
    tags: {
      education: 'Education',
      visa: 'Visa',
      travel: 'Travel',
      ind: 'Indonesia',
      marriage: 'Marriage',
      UK: 'UK',
      daysOut: 'Days out',
      rollerCoasters: 'Roller coasters',
      webDev: 'Web dev',
      programming: 'Programming',
      astro: 'Astro',
      jsFrameworks: 'JS frameworks',
      react: 'React',
      svelt: 'Svelt',
      vue: 'Vue',
      solidJs: 'Solid-js',
      lit: 'lit',
      preact: 'Preact',
      netlify: 'Netlify',
      hosting: 'Hosting',
      ciCd: 'CI/CD',
      circleCI: 'CircleCI',
      history: 'History',
      language: 'Language',
      aws: 'AWS',
      backend: 'Backend',
      bookReview: 'Book Review',
      all: 'All',
    },
    howToPassIelts: {
      title: 'How to pass the IELTS Exam',
      ...howToPassIeltsEngTrans,
    },
    obtainingAFamilyVisa: {
      title: 'How to get a UK family visa',
      ...engGettingUKFamilyVisa,
    },
    whatToDoInIndonesia: {
      title: 'Indonesia travel guide',
      ...engIndonesiaTravelGuide,
    },
    whatToDoInJogja: {
      title: 'Jogja Guide',
      ...engJogjaTravelGuide,
    },
    marriageRequirements: {
      title: 'International Marriage in Indonesia',
      ...engMarriageRequirements,
    },
    bestUkThemeParks: {
      title: 'Best UK Theme Parks',
      ...engBestUKThemeParks,
    },
    altonTowers: {
      title: 'Things to know about Alton Towers',
      ...engAltonTowers,
    },
    usingAstro: {
      title: 'How I built a fast website using Astro',
      ...engUsingAstro,
    },
    astroMultiFramework: {
      title: 'Using multiple JS Frameworks in a single project',
    },
    netlifyFreeStaticHosting: {
      title: 'Hosting a website for free',
      ...engNetlifyFreeStaticHosting,
    },
    buildingCICDForFree: {
      title: 'Setting up CI/CD for free',
      ...engBuildingCICDForFree,
    },
    royalFamilyOrigin: {
      title: 'Royal Family Origins',
      ...engRoyalFamilyOrigin,
    },
    mostCommonIndonesianWords: {
      title: 'The 1,000 most common Indonesian Words',
      ...eng1000IndonesianWords,
    },
    awsS3: {
      title: 'AWS S3 Intro',
      ...engAWSS3,
    },
    awsEC2: {
      title: 'AWS EC2 Intro',
      ...engAWSEC2,
    },
    lessonsInChemistry: {
      title: 'Lessons in Chemistry Book Review',
      ...engLessonsInChemistry,
    },
  },
  copy: 'Copy blog to clipboard',
  copied: 'Copied!',
};
export const translationsId = {
  toggleLangTooltip: 'Click to change language to English',
  copyCodeSnippet: 'Salin cuplikan kode',
  copied: 'Disalin!',
  topBar: {
    allBlogs: 'Semua Blog',
    aboutUs: 'Tentang kami',
    contactUs: 'Hubungi kami',
    privacyPolicy: 'Kebijakan pribadi',
  },
  aboutUs: {
    heading: 'Tentang kami',
    jointIntro:
      'Arni dan Aidan adalah dua individu, seorang wanita Indonesia dan pria Inggris, yang ketika disatukan menjadi tim ganda A 😎 Kami bersemangat bepergian, menjalani hidup sepenuhnya, dan membantu orang lain.',
    arniIntro:
      'Berasal dari Bandung Indonesia. Saya memiliki kasih sayang untuk melukis, seni kuku, dan segala sesuatu yang kreatif. Seorang pecinta alam bebas, hiking adalah hobi besar saya.',
    aidanIntro:
      'Berasal dari Sunderland, sekarang tinggal di selatan Inggris. Saya menyukai semua hal tentang teknologi, baik itu bermain-main dengan perangkat keras hingga mempelajari teknologi web terbaru. Selalu ingin belajar sesuatu yang baru, membaca dan berlari adalah hobi utama saya.',
  },
  contactUs: {
    heading: 'Hubungi kami',
    email: 'Sosial Arni',
    arSocialsHeader: 'Kirim email ke kotak surat tim ganda kami',
    youTube: 'Pastikan untuk mengunjungi saluran YouTube kami!',
    arIg: 'Anda rugi jika tidak mengikuti Insta Arni',
    arTwitter:
      'Tidak banyak tweeter, tetapi patut diikuti jika dia menemukan suaranya',
    aiSocialsHeader: 'Sosial Aidan',
    aiIg: 'Tidak sebagus fotografer Arni, namun kami mencoba untuk menjaga IG relatif up to date, jadi ikuti kami',
    aiTwitter:
      'Tidak sebagus fotografer Arni, namun kami mencoba untuk menjaga IG relatif up to date, jadi ikuti kami',
    aiFb: 'FB klasik',
    aiWeb: 'Situs web portofolio pribadi saya',
    aiLinkedIn: 'Untuk para profesional',
  },
  privacyPolicy: {
    ...indPolicy,
  },
  posts: {
    allBlogsHeading:
      'Menyebarkan apa yang kita ketahui, dengan mereka yang ingin tahu',
    blogSearchPlaceHolder: 'Pencarian blog...',
    filterHeading: 'Filter menurut tag',
  },
  blogs: {
    tags: {
      education: 'Pendidikan',
      visa: 'Visa',
      travel: 'Bepergian',
      ind: 'Indonesia',
      marriage: 'Pernikahan',
      UK: 'Inggris',
      daysOut: 'Hari Keluar',
      rollerCoasters: 'Roller Coaster',
      webDev: 'Pengembang Web',
      programming: 'Pengembang Web',
      astro: 'Astro',
      jsFrameworks: 'JS Frameworks',
      react: 'React',
      svelt: 'Svelt',
      vue: 'Vue',
      solidJs: 'Solid-js',
      lit: 'Lit',
      preact: 'Preact',
      netlify: 'Netlify',
      hosting: 'Hosting',
      ciCd: 'CI/CD',
      circleCI: 'CircleCI',
      history: 'Sejarah',
      language: 'Bahasa',
      aws: 'AWS',
      backend: 'Backend',
      bookReview: 'Ulasan buku',
      all: 'Semua',
    },
    howToPassIelts: {
      title: 'Bagaimana cara lulus Ujian IELTS',
      ...howToPassIeltsIndTrans,
    },
    obtainingAFamilyVisa: {
      title: 'Cara mendapatkan visa keluarga Inggris',
      ...indGettingUkFamilyVisa,
    },
    whatToDoInIndonesia: {
      title: 'panduan perjalanan Indonesia',
      ...indIndonesiaTravelGuide,
    },
    whatToDoInJogja: {
      title: 'Panduan Jogja',
      ...indJogjaTravelGuide,
    },
    marriageRequirements: {
      title: 'Pernikahan Internasional di Indonesia',
      ...indMarriageRequirements,
    },
    bestUkThemeParks: {
      title: 'Taman hiburan uk terbaik',
      ...indBestUKThemeParks,
    },
    altonTowers: {
      title: 'Alton Towers',
      ...indAltonTowers,
    },
    usingAstro: {
      title: 'Menggunakan Astro',
      ...indUsingAstro,
    },
    astroMultiFramework: {
      title: 'beberapa pengembang web dalam satu proyek',
    },
    netlifyFreeStaticHosting: {
      title: 'Hosting situs web gratis',
      ...indNetlifyFreeStaticHosting,
    },
    buildingCICDForFree: {
      title: 'Menyiapkan CI/CD gratis',
      ...indBuildingCICDForFree,
    },
    royalFamilyOrigin: {
      title: 'Dari mana keluarga kerajaan berasal',
      ...indRoyalFamilyOrigin,
    },
    mostCommonIndonesianWords: {
      title: '1.000 Kata Bahasa Indonesia yang paling umum',
      ...ind1000IndonesianWords,
    },
    awsS3: {
      title: 'Pendahuluan AWS S3',
      ...indAWSS3,
    },
    awsEC2: {
      title: 'Pendahuluan AWS EC2',
      ...indAWSEC2,
    },
    lessonsInChemistry: {
      title: 'Lessons in Chemistry buku kimia',
      ...indLessonsInChemistry,
    },
  },
  copy: 'Salin blog ke papan klip',
  copied: 'Disalin!',
};
