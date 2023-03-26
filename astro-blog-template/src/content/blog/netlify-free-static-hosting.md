---
title: 'Hosting a website for free'
description: 'Hosting a website for free'
pubDate: 'August 27 2022'
heroImage: '/blog/netlify-free-static-hosting.webp'
---

# Hosting a website for free using Netlify

First off, a huge shoutout to Netlify for simplifying the process of website hosting, they make it so simple as you will soon see. Let's go through the steps for hosting a static site using Netlify.

## Pre requisites
There really isn't much involved to get your site hosted up on Netlify for the world to see, just a couple of steps:

- Your code is hosted on [GitHub](https://github.com/)
- You have a [Netlify](https://www.netlify.com/) account

## Getting started

Head on over to Netlify and on choose to connect your GitHub. If you haven't authorised Netlify to use GitHub, you will quickly have to go through some dialogue to give Netlify relevant access.

On the next screen select the repo that stores the code of the website you want to host.

Finally, go through and customise the settings to your liking. One thing you will want to change is the domain name, as by default it will be a random pile of letters and numbers. Under Custom Domains click the options and click Edit site name. Now you can't completely modify the site name here as it will always have a suffix of .netlify.app. However, you can make it something memorable and relevant to your site which is nice as it saves you from having to go out and buy your own domain name, which can be pretty pricy especially if you want a good name with a .com Top Level Domain (TLD). However, if you do already have a domain, you can hook this up to your newly hosted website too.

## Updating your website

When building a website, we constantly make changes. Now to deploy those changes, with Netlify it's as simple as committing and pushing those commits to `GitHub`

![Netlify Deploying message](/blog/deploying-netlify/netlify-deploy-message.png)

For anyone, like me, who's spent far too long setting up, debugging and even waiting for a CI/CD pipeline, you will be amazed at the speed at which Netlify deploys updates. Within the same minute of pushing to `master`/`main`...

![Netlify Deployed message](/blog/deploying-netlify/netlify-deployed-message.png)

