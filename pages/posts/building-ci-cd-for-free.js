/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text, Heading } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SimpleLink from '../../components/SimpleLink';
import StyledUL from '../../components/StyledUL';
import SmallBlogImg from '../../components/blogComponents/SmallBlogImg';
import CodeSyntax from '../../components/blogComponents/CodeSyntax';

const imgPath = '/images/blog/ci-cd-pipeline/';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | Free CI/CD'
    description='Building a free CI/CD pipeline using AWS S3 and CircleCI'
    postUrl='building-ci-cd-for-free'
  >
    <Text>
      CI/CD can speed up the process of updating websites. If you're going to be
      working on a website over the course of days, months and even years, you
      will spend a lot of time deploying changes you've made. This is where a
      CI/CD pipeline comes in. Push up changes to your GitHub and boom, those
      changes will be autoamtically deployed. No logging into and manually
      uploading your files to wherever they're being hosted from.
    </Text>
    <Text>
      This guide we will utalise a services.
      <StyledUL
        items={[
          {
            text: 'AWS S3',
          },
          { text: 'GitHub' },
          { text: 'CircleCI' },
        ]}
      />
    </Text>
    <Heading>Setting up S3 bucket for static hosting</Heading>
    <Text>
      Head on over to the{' '}
      <SimpleLink link='https://eu-west-2.console.aws.amazon.com/console/home?region=eu-west-2'>
        AWS Console.
      </SimpleLink>{' '}
      Search for the S3 service and hit create a new bucket. The bucket name
      should be the same as whatever domain, so if you owned the Google domain
      you would name it "google.com", and take a note of the region.
      <SmallBlogImg
        alt='Creating an S3 bucket'
        src={`${imgPath}create-s3-bucket.png`}
      />
      Logically the region should be close to wherever the majority of users of
      your website are from to give a slightly better performance. You will also
      want to allow public access otherwise no one will be able to access your
      website:
      <SmallBlogImg
        alt='Allowing public access'
        src={`${imgPath}creating-bucket2.png`}
      />
    </Text>
    <Heading>Setting up IAM User</Heading>
    <Text>
      While we have the AWS console open, let's head on over to IAM (Identidy
      and Access Management). We will want to give our CircleCI access to our S3
      bucket so it can deploy our code to it later on down the line.
    </Text>
    <Text>
      Once in the IAM service, click on Users and then press the "Add Users"
      button. Give your user a name then make sure you select "Access key" for
      it's access type, this gives this user access to perform actions using the
      AWS CLI but not console access.
      <SmallBlogImg alt='IAM user name' src={`${imgPath}iam-user-name.png`} />
      Now we want to add the S3 permissions to this user, you can write the
      policy yourself but to make things quicker and easier head on over to
      "Attatch existing policies directly" and serach for S3, I selected
      "AmazonS3FullAccess" to ensure they had the necessary permissions to do
      the job.
      <SmallBlogImg
        alt='IAM user permissions'
        src={`${imgPath}iam-permissions.png`}
      />
      Go through the rest of the create user Wizard and when you have added the
      user make sure to save the "Access Key ID" and "Secret access key"
      somewhere safe. I like to use{' '}
      <SimpleLink link='https://www.lastpass.com/'>LastPass</SimpleLink> to
      store my passwords as it works across all devices.
    </Text>
    <Heading>Commit code to GitHub</Heading>
    <Text>
      If for whatever reason your code isn't on{' '}
      <SimpleLink link='https://github.com/'>GitHub</SimpleLink>, create a repo
      and get it up there.
    </Text>
    <Heading>Set-up CircleCI account</Heading>
    <Text>
      Open up <SimpleLink link='https://circleci.com/'>CircleCI</SimpleLink> and
      create an account, I reccomend signing up using your GitHub accoutn as
      you're going to link it to your CircleCI account anyways. Once you're in
      and have your GitHub account connected, you should be able to see your
      Repos. Click the "Set Up Project" button next to the repo you want to make
      a CI/CD pipeline for.
      <SmallBlogImg
        alt='CircleCI set up 1'
        src={`${imgPath}circleci-setup-yml-file.png`}
      />
      Choose Fast and then on the next screen select "Hello World", and just get
      through the rest of the initial start up by selecting "Use Existing
      Config" then "Start Building" as we now want to get into our Repo code and
      will start creating a config file to handle the CI pipeline.
    </Text>
    <Heading>Adding .circleci config to your project</Heading>
    <Text>
      At the top level directory, create a new folder called{' '}
      <code>.circleci</code> and in that folder a file called{' '}
      <code>config.yml</code>. In here you will want to add the following code:
    </Text>
    <Text>
      <CodeSyntax language='yaml'>
        {`
        version: 2.1
        orbs:
          aws-s3: circleci/aws-s3@1.0.6
        description: |
          copy files to S3 bucket and then create an Cloudfront invalidation
          on the distribution.
        
        jobs:
          build:
            docker:
              - image: 'circleci/python:latest'
        
            steps:
              - checkout
              - aws-s3/sync:
                  from: out
                  to: 's3://example.com'
                  arguments: |
                    --acl public-read \

                    --cache-control "max-age=86400" \

                    --exclude ".git/*" \

                    --exclude ".gitignore" \

                    --exclude ".circleci/*" \

                  overwrite: true
        
        `}
      </CodeSyntax>
    </Text>
    <Text>
      Swap out the following:
      <StyledUL
        items={[
          { text: `to: 's3://example.com'to be s3://yourbucketname` },
          {
            text: 'from: . should be updated to the folder that holds the files you want to serve are such as dist, build, out etc.',
          },
        ]}
      />
    </Text>
    <Text>
      Something to note, if you want to move across all the files in your repo
      to S3, swap out <code>from: out</code> with <code>from: .</code>
    </Text>
    <Text>
      Push up those changes and watch the pipeline build on CircleCI! If all is
      well, then you should see the build go{' '}
      <span style={{ color: 'green' }}>Green</span>.
    </Text>
    <Heading>Debugging your pipeline</Heading>
    <Text>
      Before successfully getting my pipeline up and running, I ran into a
      couple of errors, just in-case you hit the same ones I'll go through the
      error and my solution.
    </Text>
    <Text>
      <code>
        usage: aws s3 sync {'<LocalPath>'} {'<S3Uri>'} or {'<S3Uri>'}{' '}
        {'<LocalPath>'} or {'<S3Uri>'} {'<S3Uri>'}
        Error: Invalid argument type
      </code>{' '}
      I had to update the <code>to: 's3://your-bucket'</code> to match my bucket
      name, before I was putting in the actual S3 bucket URL.
    </Text>
    <Text>
      <code>
        The user-provided path ./out/* does not exist. Exited with code exit
        status 255
      </code>
      I had to change two things in my repo for this one, first of all out was
      being exluded as it was included in the <code>.gitignore</code> file. And
      the path for the folder just needed to be the folder name <code>out</code>{' '}
      without the "./folderName/*"
    </Text>
    <Text>
      A quick aside, sometimes you just want to commit your work up and not
      actually deploy said code to your server. To do this, in your commit
      message just add the following "[ci skip]". For example,{' '}
      <code>
        $ git commit -m "Just making a tiny adjustment, don't want to deploy
        this [ci skip]"
      </code>
    </Text>
    <Text>
      I hope this was helpful and you managed to deploy a pipeline, if you have
      an issues please <SimpleLink link='/contact-us'>get in touch</SimpleLink>{' '}
      and I will do what I can to help.
    </Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | Free CI/CD'
    description='Hosting situs web gratis dengan Netlify'
    postUrl='building-ci-cd-for-free'
  >
    <Text>
      CI/CD dapat mempercepat proses update website. Jika Anda akan menjadi
      bekerja di situs web selama berhari-hari, berbulan-bulan, dan bahkan
      bertahun-tahun, Anda akan menghabiskan banyak waktu untuk menerapkan
      perubahan yang Anda buat. Di sinilah Pipa CI/CD masuk. Dorong perubahan ke
      GitHub Anda dan boom, itu perubahan akan diterapkan secara otomatis. Tidak
      masuk dan secara manual mengunggah file Anda ke mana pun mereka dihosting.
    </Text>
    <Text>
      Panduan ini kami akan menggunakan layanan.
      <StyledUL
        items={[
          {
            text: 'AWS S3',
          },
          { text: 'GitHub' },
          { text: 'CircleCI' },
        ]}
      />
    </Text>
    <Heading>Menyiapkan ember S3 untuk hosting statis</Heading>
    <Text>
      Pergilah ke{' '}
      <SimpleLink link='https://eu-west-2.console.aws.amazon.com/console/home?region=eu-west-2'>
        AWS Console.
      </SimpleLink>{' '}
      Cari layanan S3 dan tekan buat ember baru. Nama ember harus sama dengan
      domain apa pun, jadi jika Anda memiliki domain Google Anda akan menamainya
      "google.com", dan catat wilayahnya.
      <SmallBlogImg
        alt='Creating an S3 bucket'
        src={`${imgPath}create-s3-bucket.png`}
      />
      Logikanya wilayah tersebut harus dekat dengan tempat mayoritas pengguna
      situs web Anda untuk memberikan kinerja yang sedikit lebih baik. Kamu juga
      akan ingin mengizinkan akses publik jika tidak, tidak ada yang dapat
      mengakses . Anda situs web:
      <SmallBlogImg
        alt='Allowing public access'
        src={`${imgPath}creating-bucket2.png`}
      />
    </Text>
    <Heading>Menyiapkan Pengguna IAM</Heading>
    <Text>
      Sementara kita membuka konsol AWS, mari kita menuju ke IAM (Identidy dan
      Manajemen Akses). Kami ingin memberikan akses CircleCI kami ke S3 kami
      ember sehingga dapat menyebarkan kode kita ke sana nanti.
    </Text>
    <Text>
      Setelah di layanan IAM, klik Pengguna lalu tekan tombol "Tambah Pengguna"
      tombol. Beri nama pengguna Anda lalu pastikan Anda memilih "Access key"
      untuk itu jenis akses, ini memberi pengguna ini akses untuk melakukan
      tindakan menggunakan AWS CLI tetapi bukan akses konsol.
      <SmallBlogImg alt='IAM user name' src={`${imgPath}iam-user-name.png`} />
      Sekarang kami ingin menambahkan izin S3 ke pengguna ini, Anda dapat
      menulis kebijakan sendiri tetapi untuk membuat segalanya lebih cepat dan
      lebih mudah untuk "Lampirkan kebijakan yang ada secara langsung" dan
      pencarian untuk S3, saya memilih "AmazonS3FullAccess" untuk memastikan
      mereka memiliki izin yang diperlukan untuk melakukannya pekerjaan.
      <SmallBlogImg
        alt='IAM user permissions'
        src={`${imgPath}iam-permissions.png`}
      />
      Telusuri sisa Wizard buat pengguna dan ketika Anda telah menambahkan
      pengguna pastikan untuk menyimpan "Access Key ID" dan "Secret access key"
      suatu tempat yang aman. Saya suka menggunakan{' '}
      <SimpleLink link='https://www.lastpass.com/'>LastPass</SimpleLink> ke
      simpan kata sandi saya karena berfungsi di semua perangkat.
    </Text>
    <Heading>Komit kode ke GitHub</Heading>
    <Text>
      Jika karena alasan apa pun kode Anda tidak aktif{' '}
      <SimpleLink link='https://github.com/'>GitHub</SimpleLink>, membuat repo
      dan angkat di sana.
    </Text>
    <Heading>Siapkan akun CircleCI</Heading>
    <Text>
      Buka <SimpleLink link='https://circleci.com/'>CircleCI</SimpleLink> dan
      buat akun, saya sarankan mendaftar menggunakan akun GitHub Anda sebagai
      Anda akan menautkannya ke akun CircleCI Anda. Setelah Anda masuk dan jika
      akun GitHub Anda terhubung, Anda seharusnya dapat melihat Repo. Klik
      tombol "Set Up Project" di sebelah repo yang ingin Anda buat pipa CI/CD
      untuk.
      <SmallBlogImg
        alt='CircleCI set up 1'
        src={`${imgPath}circleci-setup-yml-file.png`}
      />
      Pilih Cepat lalu di layar berikutnya pilih "Halo Dunia", dan dapatkan
      melalui sisa start up awal dengan memilih "Gunakan Yang Ada Konfigurasi"
      lalu "Mulai Membangun" karena kami sekarang ingin masuk ke kode Repo kami
      dan akan mulai membuat file konfigurasi untuk menangani pipa CI.
    </Text>
    <Heading>Menambahkan konfigurasi .circleci ke proyek Anda</Heading>
    <Text>
      Di direktori tingkat atas, buat folder baru bernama <code>.circleci</code>{' '}
      dan di folder itu ada file bernama <code>config.yml</code>. Di sini Anda
      ingin menambahkan kode berikut::
    </Text>
    <SmallBlogImg
      alt='Code for our CI/CD pipeline'
      src={`${imgPath}circleci-config.png`}
    />
    <Text>
      {/* TODO: Add code from: https://edaoud.com/blog/2019/04/12/deploy-static-website-to-aws-s3-circleci/ in it's own syntax highlighted box: https://blog.openreplay.com/building-a-code-snippet-highlighter-in-next-js */}
    </Text>
    <Text>
      Tukar yang berikut ini:
      <StyledUL
        items={[
          { text: 'url ember S3 menjadi s3://yourbucketname' },
          {
            text: 'from: . harus diperbarui ke folder yang menyimpan file yang ingin Anda sajikan seperti dist, build, out dll.',
          },
        ]}
      />
    </Text>
    <Text>
      Dorong perubahan itu dan saksikan pengembangan pipeline di CircleCI! Jika
      semuanya baik, maka Anda harus melihat build go{' '}
      <span style={{ color: 'green' }}>Green</span>.
    </Text>
    <Heading>Men-debug saluran Anda</Heading>
    <Text>
      Before successfully getting my pipeline up and running, I ran into a
      couple of errors, just in-case you hit the same ones I'll go through the
      error and my solution.
    </Text>
    <Text>
      <code>
        usage: aws s3 sync {'<LocalPath>'} {'<S3Uri>'} or {'<S3Uri>'}{' '}
        {'<LocalPath>'} or {'<S3Uri>'} {'<S3Uri>'}
        Error: Invalid argument type
      </code>
      Saya harus memperbarui <code>ke: 's3://your-bucket'</code> agar sesuai
      dengan bucket saya name, sebelum saya memasukkan URL bucket S3 yang
      sebenarnya.
    </Text>
    <Text>
      <code>
        The user-provided path ./out/* does not exist. Exited with code exit
        status 255
      </code>
      Saya harus mengubah dua hal dalam repo saya untuk yang ini, pertama-tama
      adalah dikecualikan karena disertakan dalam file <code>.gitignore</code>.
      Dan path untuk folder hanya perlu nama folder <code>out</code> tanpa
      "./folderName/*"
    </Text>
    <Text>
      Saya harap ini membantu dan Anda berhasil menerapkan pipeline, jika ada
      masalah tolong <SimpleLink link='/contact-us'>berhubungan</SimpleLink> dan
      saya akan melakukan apa yang saya bisa untuk membantu.
    </Text>
  </BlogLayout>
);

export default function UsingAstro() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
