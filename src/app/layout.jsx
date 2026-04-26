import './globals.css';

export const metadata = {
  title: 'Restaurant Name | Fine Dining',
  description: 'Experience the essence of modern gastronomy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}