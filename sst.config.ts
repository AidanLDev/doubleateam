/// <reference path="./.sst/platform/config.d.ts" />
//

export default $config({
  app() {
    return {
      name: 'doubleateam',
      removal: 'remove',
      home: 'aws',
      region: 'us-east-1',
    }
  },
  async run() {
    new sst.aws.Astro('double_a_team', {
      domain: { name: 'blog.aidanlowson.com', redirects: ['www.blog.aidanlowson.com'] },
      buildCommand: 'astro check --minimumSeverity warning && astro build',
    })
  },
})
