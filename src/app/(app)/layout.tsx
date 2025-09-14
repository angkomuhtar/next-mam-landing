import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderImage from "@/components/home/header-image";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=''>
      <Header active='home' />
      {children}
      <Footer />
    </main>
  );
}
