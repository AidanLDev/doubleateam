export const engBuildingCICDForFree = {
  blogTitle: 'Building a free CI/CD pipeline using AWS S3 and CircleCI',
  intro:
    "CI/CD can speed up the process of updating websites. If you're going to be working on a website over the course of days, months and even years, you will spend a lot of time deploying changes you've made. This is where a CI/CD pipeline comes in. Push up changes to your GitHub and boom, those changes will be automatically deployed. No logging into and manually uploading your files to wherever they're being hosted from.",
  uses: 'This guide we will utilize a services.',
  s3Static: 'Setting up S3 bucket for static hosting',
  linkIntro: 'Head on over to the',
  s3Desc:
    'Search for the S3 service and hit create a new bucket. The bucket name should be the same as whatever domain, so if you owned the Google domain you would name it "google.com", and take a note of the region.',
  s3RegionDesc:
    'Logically the region should be close to wherever the majority of users of your website are from to give a slightly better performance. You will also want to allow public access otherwise no one will be able to access your website:',
  iamHead: 'Setting up IAM User',
  iamIntro:
    "While we have the AWS console open, let's head on over to IAM (Identify and Access Management). We will want to give our CircleCI access to our S3 bucket so it can deploy our code to it later on down the line.",
  iamP1:
    'Once in the IAM service, click on Users and then press the "Add Users" button. Give your user a name then make sure you select "Access key" for it\'s access type, this gives this user access to perform actions using the AWS CLI but not console access.',
  iamP2:
    'Now we want to add the S3 permissions to this user, you can write the policy yourself but to make things quicker and easier head on over to "Attach existing policies directly" and search for S3, I selected "AmazonS3FullAccess" to ensure they had the necessary permissions to do the job.',
  iamP3:
    ' Go through the rest of the create user Wizard and when you have added the user make sure to save the "Access Key ID" and "Secret access key" somewhere safe. I like to use',
  iamP4: 'to store my passwords as it works across all devices.',
  gh: 'Commit code to GitHub',
  ghIntro: "If for whatever reason your code isn't on",
  ghOutro: ', create a repo and get it up on there.',
  circleCI: 'Set-up CircleCI account',
  circleCIOpen: 'Open up',
  circleCIIntro:
    'and create an account, I reccomend signing up using your GitHub accoutn as you\'re going to link it to your CircleCI account anyways. Once you\'re in and have your GitHub account connected, you should be able to see your Repos. Click the "Set Up Project" button next to the repo you want to make a CI/CD pipeline for.',
  circleCIP1:
    'Choose Fast and then on the next screen select "Hello World", and just get through the rest of the initial start up by selecting "Use Existing Config" then "Start Building" as we now want to get into our Repo code and will start creating a config file to handle the CI pipeline.',
  circleCIConfig: 'Adding .circleci config to your project',
  codeHeading:
    'At the top level directory, create a new folder called .circleci and in that folder a file called config.yml. In here you will want to add the following code:',
  swap: 'Swap out the following:',
  toNote1: 'to: ',
  toNote2:
    'from: . should be updated to the folder that holds the files you want to serve are such as dist, build, out etc.',
  debugging:
    'Something to note, if you want to move across all the files in your repo to S3, swap out from: out with from: .',
  debugging1:
    'Push up those changes and watch the pipeline build on CircleCI! If all is well, then you should see the build go',
  debuggingHeader: 'Debugging your pipeline',
  debuggingIntro:
    "Before successfully getting my pipeline up and running, I ran into a couple of errors, just in-case you hit the same ones I'll go through the error and my solution.",
  iHadTo: 'I had to update the ',
  toMatch:
    'to match my bucket name, before I was putting in the actual S3 bucket URL.',
  iHadTo2:
    'I had to change two things in my repo for this one, first of all out was being excluded as it was included in the ',
  iHadTo2p2: 'And the path for the folder just needed to be the folder name',
  iHadTo2p3: 'without the ',
  quickAside:
    'A quick aside, sometimes you just want to commit your work up and not actually deploy said code to your server. To do this, in your commit message just add the following ',
  forExample: 'For example,',
  commitMsg: "Just making a tiny adjustment, don't want to deploy this ",
  conclusion:
    'I hope this was helpful and you managed to deploy a pipeline, if you have an issues please',
  getInContactLink: 'get in touch',
  iWillHelp: 'and I will do what I can to help.',
};

export const indBuildingCICDForFree = {
  blogTitle: 'Menyiapkan CI/CD gratis',
  intro:
    'CI/CD dapat mempercepat proses update website. Jika Anda akan menjadi bekerja di situs web selama berhari-hari, berbulan-bulan, dan bahkan bertahun-tahun, Anda akan menghabiskan banyak waktu untuk menerapkan perubahan yang Anda buat. Di sinilah Pipa CI/CD masuk. Dorong perubahan ke GitHub Anda dan boom, itu perubahan akan diterapkan secara otomatis. Tidak masuk dan secara manual mengunggah file Anda ke mana pun mereka dihosting.',
  uses: 'Panduan ini kami akan menggunakan layanan.',
  s3Static: 'Menyiapkan S3 Bucket untuk hosting statis',
  linkIntro: 'Pergilah ke',
  s3Desc:
    'Cari layanan S3 dan tekan buat S3 Bucket baru. Nama S3 Bucket harus sama dengan domain apa pun, jadi jika Anda memiliki domain Google Anda akan menamainya "google.com", dan catat wilayahnya.',
  s3RegionDesc:
    'Logikanya wilayah tersebut harus dekat dengan tempat mayoritas pengguna situs web Anda untuk memberikan kinerja yang sedikit lebih baik. Kamu juga akan ingin mengizinkan akses publik jika tidak, tidak ada yang dapat mengakses . Anda situs web:',
  iamHead: 'Menyiapkan Pengguna IAM',
  iamIntro:
    'Sementara kita membuka konsol AWS, mari kita menuju ke IAM (Identidy dan Manajemen Akses). Kami ingin memberikan akses CircleCI kami ke S3 kami S3 Bucket sehingga dapat menyebarkan kode kita ke sana nanti.',
  iamP1:
    'Setelah di layanan IAM, klik Pengguna lalu tekan tombol "Tambah Pengguna" tombol. Beri nama pengguna Anda lalu pastikan Anda memilih "Access key" untuk itu jenis akses, ini memberi pengguna ini akses untuk melakukan tindakan menggunakan AWS CLI tetapi bukan akses konsol.',
  iamP2:
    'Sekarang kami ingin menambahkan izin S3 ke pengguna ini, Anda dapat menulis kebijakan sendiri tetapi untuk membuat segalanya lebih cepat dan lebih mudah untuk "Lampirkan kebijakan yang ada secara langsung" dan pencarian untuk S3, saya memilih "AmazonS3FullAccess" untuk memastikan mereka memiliki izin yang diperlukan untuk melakukannya pekerjaan.',
  iamP3:
    'Telusuri sisa Wizard buat pengguna dan ketika Anda telah menambahkan pengguna pastikan untuk menyimpan "Access Key ID" dan "Secret access key" suatu tempat yang aman. Saya suka menggunakan',
  iamP4: 'ke simpan kata sandi saya karena berfungsi di semua perangkat.',
  gh: 'Komit kode ke GitHub',
  ghIntro: 'Jika karena alasan apa pun kode Anda tidak aktif',
  ghOutro: ', membuat repo dan angkat di sana.',
  circleCI: 'Siapkan akun CircleCI',
  circleCIOpen: 'Buka ',
  circleCIIntro:
    'dan buat akun, saya sarankan mendaftar menggunakan akun GitHub Anda sebagai Anda akan menautkannya ke akun CircleCI Anda. Setelah Anda masuk dan jika akun GitHub Anda terhubung, Anda seharusnya dapat melihat Repo. Klik tombol "Set Up Project" di sebelah repo yang ingin Anda buat pipa CI/CD untuk.',
  circleCIP1:
    'Pilih Cepat lalu di layar berikutnya pilih "Halo Dunia", dan dapatkan melalui sisa start up awal dengan memilih "Gunakan Yang Ada Konfigurasi" lalu "Mulai Membangun" karena kami sekarang ingin masuk ke kode Repo kami dan akan mulai membuat file konfigurasi untuk menangani pipa CI.',
  circleCIConfig: 'Menambahkan konfigurasi .circleci ke proyek Anda',
  codeHeading:
    'Di direktori tingkat atas, buat folder baru bernama .circleci dan di folder itu ada file bernama config.yml. Di sini Anda ingin menambahkan kode berikut:',
  swap: 'Tukar yang berikut ini:',
  toNote1: 'ke: ',
  toNote2:
    'from: . harus diperbarui ke folder yang menyimpan file yang ingin Anda sajikan seperti dist, build, out dll.',
  debugging:
    'Sesuatu yang perlu diperhatikan, jika Anda ingin memindahkan semua file di repo Anda ke S3, tukar dari: keluar dengan dari: .',
  debugging1:
    'Dorong perubahan itu dan saksikan pengembangan pipeline di CircleCI! Jika semuanya baik, maka Anda harus melihat build go',
  debuggingHeader: 'Men-debug saluran Anda',
  debuggingIntro:
    'Sebelum berhasil menjalankan dan menjalankan pipa saya, saya mengalami beberapa kesalahan, kalau-kalau Anda menekan yang sama, saya akan melalui kesalahan dan solusi saya.',
  iHadTo: 'Saya harus memperbarui',
  toMatch:
    'untuk mencocokkan nama S3 Bucket saya, sebelum saya memasukkan URL S3 Bucket yang sebenarnya.',
  iHadTo2:
    'Saya harus mengubah dua hal dalam repo saya untuk yang ini, pertama-tama dikeluarkan karena termasuk dalam',
  iHadTo2p2: 'Dan path untuk folder itu hanya perlu nama folder',
  iHadTo2p3: 'tanpa',
  quickAside:
    'Selain cepat, terkadang Anda hanya ingin melakukan pekerjaan Anda dan tidak benar-benar menyebarkan kode tersebut ke server Anda. Untuk melakukan ini, dalam pesan komit Anda, tambahkan saja yang berikut ini ',
  forExample: 'Sebagai contoh,',
  commitMsg: 'Hanya membuat penyesuaian kecil, tidak ingin menyebarkan ini ',
  conclusion:
    'Saya harap ini membantu dan Anda berhasil menyebarkan pipa, jika Anda memiliki masalah, silakan',
  getInContactLink: 'berhubungan',
  iWillHelp: 'dan saya akan melakukan apa yang saya bisa untuk membantu.',
};
