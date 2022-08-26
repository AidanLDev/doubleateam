/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text, Heading } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SimpleLink from '../../components/SimpleLink';
import StyledUL from '../../components/StyledUL';
import SmallBlogImg from '../../components/blogComponents/SmallBlogImg';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | Hosting With Netlify'
    description='Hosting a website for free using Netlify'
    postUrl='netlify-free-static-hosting'
  >
    <Text>
      First off, a huge shoutout to Netlify for simplifying the process of
      website hosting, they make it so simple as you will soon see. Let's go
      through the steps for hosting a static site using Netlify.
    </Text>
    <Heading>Pre requisites</Heading>
    <Text>
      There really isn't much involved to get your site hosted up on Netlify for
      the world to see, just a couple of steps:
      <StyledUL
        items={[
          {
            text: (
              <span>
                Your code is hosted on{' '}
                <SimpleLink link='https://github.com/'>GitHub</SimpleLink>
              </span>
            ),
          },
          {
            text: (
              <span>
                You have a{' '}
                <SimpleLink link='https://www.netlify.com/'>Netlify</SimpleLink>{' '}
                account
              </span>
            ),
          },
        ]}
      />
    </Text>
    <Heading>Getting started</Heading>
    <Text>
      Head on over to Netlify and on choose to connect your GitHub. If you
      haven't authorised Netlify to use GitHub, you will quickly have to go
      through some dialogue to give Netlify relevant access.
    </Text>
    <Text>
      On the next screen select the repo that stores the code of the website you
      want to host.
    </Text>
    <Text>
      Finally, go through and customise the settings to your liking. One thing
      you will want to change is the domain name, as by default it will be a
      random pile of letters and numbers. Under <b>Custom Domains</b> click the{' '}
      <code>options</code> and click <code>Edit site name</code>. Now you can't
      completely modify the site name here as it will always have a suffix of{' '}
      <code>.netlify.app</code>. However, you can make it something memorable
      and relevant to your site which is nice as it saves you from having to go
      out and buy your own domain name, which can be pretty pricy especially if
      you want a good name with a .com Top Level Domain (TLD). However, if you
      do already have a domain, you can hook this up to your newly hosted
      website too.
    </Text>
    <Heading>Updating your website</Heading>
    <Text>
      When building a website, we constantly make changes. Now to deploy those
      changes, with Netlify it's as simple as committing and pushing those
      commits to <code>GitHub</code>.
      <SmallBlogImg
        alt='Netlify Deploying message'
        src='/images/blog/deploying-netlify/netlify-deploy-message.png'
      />
      For anyone, like me, who's spent far too long setting up, debugging and
      even waiting for a CI/CD pipeline, you will be amazed at the speed at
      which Netlify deploys updates. Within the same minute of pushing to
      <code>master</code>...
      <SmallBlogImg
        alt='Netlify Deployed message'
        src='/images/blog/deploying-netlify/netlify-deployed-message.png'
      />
    </Text>
    <Text>
      There are a few more options for hosting websites such as{' '}
      <SimpleLink link='https://www.heroku.com/'>Heroku</SimpleLink>. Heroku is
      a good option if your website has an API or other Backend infrastructure
      as you can deploy code to web servers such as <code>Node</code>. However,
      the free tier puts the site on a server that has a cold start-up so your
      site will take a long time to load. This is why for static sites I would
      highly recommend using Netlify, it's simple and does the job!
    </Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | Hosting With Netlify'
    description='Hosting situs web gratis dengan Netlify'
    postUrl='netlify-free-static-hosting'
  >
    <Text>
      Pertama-tama, seruan besar kepada Netlify karena telah menyederhanakan
      proses hosting situs web, mereka membuatnya sangat sederhana seperti yang
      akan segera Anda lihat. Ayo pergi melalui langkah-langkah untuk hosting
      situs statis menggunakan Netlify.
    </Text>
    <Heading>Prasyarat</Heading>
    <Text>
      Sebenarnya tidak banyak yang terlibat untuk membuat situs Anda dihosting
      di Netlify untuk dunia untuk melihat, hanya beberapa langkah:
      <StyledUL
        items={[
          {
            text: (
              <span>
                Kode Anda dihosting di{' '}
                <SimpleLink link='https://github.com/'>GitHub</SimpleLink>
              </span>
            ),
          },
          {
            text: (
              <span>
                Anda memiliki{' '}
                <SimpleLink link='https://www.netlify.com/'>Netlify</SimpleLink>{' '}
                Akun
              </span>
            ),
          },
        ]}
      />
    </Text>
    <Heading>Mulai</Heading>
    <Text>
      Buka Netlify dan pilih untuk menghubungkan GitHub Anda. Jika kamu belum
      mengizinkan Netlify untuk menggunakan GitHub, Anda harus segera pergi
      melalui beberapa dialog untuk memberi Netlify akses yang relevan.
    </Text>
    <Text>
      Pada layar berikutnya pilih repo yang menyimpan kode website Anda ingin
      menjadi tuan rumah.
    </Text>
    <Text>
      Terakhir, buka dan sesuaikan pengaturan sesuai keinginan Anda. Satu hal
      yang ingin Anda ubah adalah nama domain, karena secara default akan
      menjadi tumpukan huruf dan angka acak. Di bawah <b>Domain Khusus</b> klik{' '}
      <code>options</code> dan klik <code>Edit nama situs</code>. Sekarang kamu
      tidak bisa sepenuhnya mengubah nama situs di sini karena akan selalu
      memiliki akhiran <code>.netlify.app</code>. Namun, Anda bisa menjadikannya
      sesuatu yang tak terlupakan dan relevan dengan situs Anda yang bagus
      karena menyelamatkan Anda dari keharusan pergi keluar dan beli nama domain
      Anda sendiri, yang bisa sangat mahal terutama jika Anda ingin nama yang
      bagus dengan .com Top Level Domain (TLD). Namun, jika Anda sudah memiliki
      domain, Anda dapat menghubungkan ini ke yang baru dihosting situs web
      juga.
    </Text>
    <Heading>Memperbarui situs web Anda</Heading>
    <Text>
      Saat membangun situs web, kami terus melakukan perubahan. Sekarang untuk
      menyebarkan itu perubahan, dengan Netlify semudah melakukan dan
      mendorongnya berkomitmen untuk <code>GitHub</code>.
      <SmallBlogImg
        alt='Netlify Deploying message'
        src='/images/blog/deploying-netlify/netlify-deploy-message.png'
      />
      Untuk siapa pun, seperti saya, yang menghabiskan waktu terlalu lama untuk
      menyiapkan, men-debug, dan bahkan menunggu saluran CI/CD, Anda akan kagum
      dengan kecepatannya yang Netlify menyebarkan pembaruan. Dalam menit yang
      sama dengan mendorong ke
      <code>master</code>...
      <SmallBlogImg
        alt='Netlify Deployed message'
        src='/images/blog/deploying-netlify/netlify-deployed-message.png'
      />
    </Text>
    <Text>
      Ada beberapa opsi lagi untuk menghosting situs web seperti{' '}
      <SimpleLink link='https://www.heroku.com/'>Heroku</SimpleLink>. Heroku
      adalah pilihan yang bagus jika situs web Anda memiliki API atau
      infrastruktur Backend lainnya karena Anda dapat menyebarkan kode ke server
      web seperti <code>Node</code>. Namun, tingkat gratis menempatkan situs di
      server yang memiliki start-up yang dingin sehingga Anda situs akan memakan
      waktu lama untuk memuat. Inilah sebabnya mengapa untuk situs statis saya
      akan sangat merekomendasikan menggunakan Netlify, itu sederhana dan
      berhasil!
    </Text>
  </BlogLayout>
);

export default function UsingAstro() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
