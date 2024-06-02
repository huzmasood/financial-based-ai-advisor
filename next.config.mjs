/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: `
                  default-src 'self';
                  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.scstrade.com https://fonts.googleapis.com https://cdnjs.cloudflare.com;
                  style-src 'self' 'unsafe-inline' https://www.scstrade.com https://fonts.googleapis.com https://cdnjs.cloudflare.com;
                  font-src 'self' https://www.scstrade.com https://fonts.googleapis.com https://fonts.gstatic.com;
                  img-src 'self' https://www.scstrade.com;
                  frame-src 'self' https://www.scstrade.com;
                  connect-src 'self' https://www.scstrade.com https://cors-anywhere.herokuapp.com;
                `.replace(/\s{2,}/g, ' ').trim(),
              },
            ],
          },
        ];
      },
};

export default nextConfig;
