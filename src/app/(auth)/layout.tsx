export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
