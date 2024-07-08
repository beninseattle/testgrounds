* Set up S3 bucket, subdomain, SSL certs, and Cloudfront to host [testgrounds.beninseattle.net](https://testgrounds.beninseattle.net)
  - Lots of fun figuring out the fact that I had missed adding the A record to point the testgrounds subdomain to the cloudfront url
* Created a github action to sync the assets folder to the S3 bucket when it has been updated on the main branch. 🎉
  - Uses repo secrets to keep the secret bits out of the code