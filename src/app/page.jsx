import Image from "next/image";
import Header from "@/components/me/header"

export const metadata = {
  title: 'Download video youtube',
  description: 'ádlfgkjalskhjrgkjasdfkjsadrf',
}
export default function Home() {

  return (
    <div className="content-wrapper max-w-screen-xl text-base mx-auto px-8 bg-slate-200">
      <Header />
      <main>
        <div className="slider">Slider</div>
        <div className="story">Slider</div>

        <div className="featured-mugs">
          featured-mugs
        </div>

         <div className="more-product">
          more-product
        </div>

         <div className="coffee-magazine">
          coffee-magazine
        </div>

         <div className="lifestyle-story">
          lifestyle-story
        </div>

        <div className="subrice-us">
          subrice-us
        </div>

      </main>

      <footer>Footer</footer>
    </div>
  );
}
