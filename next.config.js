module.exports = {
  reactStrictMode: false,
  compress: false,
  output: {
    // ...
    globalObject: 'this',
  },
  images: { //allow image to load from following domains only
    domains: [
      'mcme.s3.ap-south-1.amazonaws.com','mcme.s3.amazonaws.com','blog.mcme.in'
    ],
  }
}
