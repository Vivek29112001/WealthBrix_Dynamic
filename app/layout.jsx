import { ThemeProvider } from "@/components/layout/theme/theme-provider";
import Sidebar from "@/components/layout/sidebar/sidebar";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import "./globals.css";
import { LayoutProvider } from "@/context/LayoutContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen flex overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LayoutProvider>
            <Sidebar />
            <div className="flex flex-col flex-1 min-h-screen">
              <Header />
              <main className="flex-1 p-6 bg-neutral-50 dark:bg-neutral-950 overflow-auto">
                {children}
              </main>
              <Footer />
            </div>
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
