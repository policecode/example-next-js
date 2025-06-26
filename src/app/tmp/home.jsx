import Image from "next/image";
import Header from "@/components/me/header";
import Link from "next/link";

export const metadata = {
  title: "Download video youtube",
  description: "ádlfgkjalskhjrgkjasdfkjsadrf",
};
export default function Home() {
  return (
    <div className="content-wrapper max-w-screen-xl text-base mx-auto px-8 bg-slate-200">
      <Header />
      <main>
        <div className="slider h-[530px] bg-[url(/images/superman.jpg)] bg-cover bg-no-repeat bg-bottom">
          <div className="w-full h-full flex justify-center items-center bg-gray-900/40">
            <div className="mx-16 text-white text-center">
              <div className="uppercase text-sm mb-6">
                Best Palce Ti Buy Coffee
              </div>
              <div className="font-medium text-5xl mb-6">Coffee Mugs</div>
              <div className="font-medium text-lg mb-8">
                The mosst versatile furniture system ever created. Designed.
                Designed to fit your life, made to move and grow.
              </div>
              <div className="flex justify-center">
                <div className="fvn-button bg-white text-gray-900 w-max">
                  Explore Our Products
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="story">
          <div className="w-full h-full flex justify-center">
            <div className="px-4 sm:px-15 md:px-32 lg:px-64 xl:px-92 py-32 text-center">
              <div className="text-3xl leading-10 mb-6">
                Even the all-powerful Pointing has no control about the blind
                texts
              </div>
              <div className="text-gray-500 leading-7 mb-6">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth. Even the all-powerful Pointing
                has no control about the blind texts it is an almost
                unorthographic life One day however a small line of blind text
                by the name of Lorem Ipsum decided to leave for the far World of
                Grammar
              </div>
              <Link
                href="#"
                className="text-[#a06857] hover:text-[#965e4f] relative after:absolute after:-bottom-2 after:left-0 after:bg-[#C89F94] after:w-0 after:h-0 hover:after:h-0.5 hover:after:w-full after:transition-all after:ease-in-out after:duration-200"
              >
                Read the Full Story
              </Link>
            </div>
          </div>
        </div>

        <div className="fvn-subheadline">
          <div className="fvn-subheadline-deco-line"></div>
          <div className="fvn-subheadline-label">Featured Mugs</div>
          <div className="fvn-subheadline-deco-line"></div>
        </div>
        <div className="featured-mugs w-[65%] mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
            <div className="fvn-product-card">
              <div className="h-[400px] sm:h-[540px] bg-[url(/images/superman.jpg)] bg-cover bg-no-repeat bg-center">
                <Link href="#">
                  <div className="w-full h-full hover:bg-gray-900/30 transition-all ease-in-out duration-300 relative group">
                    <div className="absolute bg-white text-gray-900 w-11/12 uppercase bottom-1 group-hover:bottom-4 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 text-center  tracking-wider py-4 px-7 text-sm font-medium cursor-pointer hover:bg-white/90 transition-all ease-in-out duration-300">
                      Explore Mug
                    </div>
                  </div>
                </Link>
              </div>
              <div className="text-center mt-8">
                <Link
                  className="text-xl mb-3 hover:text-[#965e4f]"
                  href="#"
                  alt="Product-fvnhoangdat"
                >
                  <div>Pink Premium Ceramic</div>
                </Link>
                <div className="">
                  <span className="text-lg text-[#965e4f]">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $69.00
                  </span>
                </div>
              </div>
            </div>

            <div className="fvn-product-card">
              <div className="h-[400px] sm:h-[540px] bg-[url(/images/israel-co-the-danh-bai-iran-bang-cach-nao-3.jpg)] bg-cover bg-no-repeat bg-center">
                <Link href="#">
                  <div className="w-full h-full hover:bg-gray-900/30 transition-all ease-in-out duration-300 relative group">
                    <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-[#a06857]">
                      On Sale
                    </div>
                    <div className="absolute bg-white text-gray-900 w-11/12 uppercase bottom-1 group-hover:bottom-4 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 text-center  tracking-wider py-4 px-7 text-sm font-medium cursor-pointer hover:bg-white/90 transition-all ease-in-out duration-300">
                      Explore Mug
                    </div>
                  </div>
                </Link>
              </div>
              <div className="text-center mt-8">
                <Link
                  className="text-xl mb-3 hover:text-[#965e4f]"
                  href="#"
                  alt="Product-fvnhoangdat"
                >
                  <div>Pink Premium Ceramic</div>
                </Link>
                <div className="">
                  <span className="text-lg text-[#965e4f]">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $69.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fvn-subheadline">
          <div className="fvn-subheadline-deco-line"></div>
          <div className="fvn-subheadline-label">More Products</div>
          <div className="fvn-subheadline-deco-line"></div>
        </div>
        <div className="more-product w-[95%] lg:w-[65%] mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
            <div className="fvn-product-card">
              <div className="h-[380px] bg-[url(/images/superman.jpg)] bg-cover bg-no-repeat bg-center">
                <Link href="#">
                  <div className="w-full h-full hover:bg-gray-900/30 transition-all ease-in-out duration-300 relative group">
                    <div className="absolute bg-white text-gray-900 w-11/12 uppercase bottom-1 group-hover:bottom-4 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 text-center  tracking-wider py-4 px-7 text-sm font-medium cursor-pointer hover:bg-white/90 transition-all ease-in-out duration-300">
                      Explore Mug
                    </div>
                  </div>
                </Link>
              </div>
              <div className="text-center my-8">
                <Link
                  className="text-xl mb-3 hover:text-[#965e4f]"
                  href="#"
                  alt="Product-fvnhoangdat"
                >
                  <div>Pink Premium Ceramic</div>
                </Link>
                <div className="">
                  <span className="text-lg text-[#965e4f]">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $69.00
                  </span>
                </div>
              </div>
            </div>

            <div className="fvn-product-card">
              <div className="h-[380px] bg-[url(/images/israel-co-the-danh-bai-iran-bang-cach-nao-3.jpg)] bg-cover bg-no-repeat bg-center">
                <Link href="#">
                  <div className="w-full h-full hover:bg-gray-900/30 transition-all ease-in-out duration-300 relative group">
                    <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-[#a06857]">
                      On Sale
                    </div>
                    <div className="absolute bg-white text-gray-900 w-11/12 uppercase bottom-1 group-hover:bottom-4 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 text-center  tracking-wider py-4 px-7 text-sm font-medium cursor-pointer hover:bg-white/90 transition-all ease-in-out duration-300">
                      Explore Mug
                    </div>
                  </div>
                </Link>
              </div>
              <div className="text-center my-8">
                <Link
                  className="text-xl mb-3 hover:text-[#965e4f]"
                  href="#"
                  alt="Product-fvnhoangdat"
                >
                  <div>Pink Premium Ceramic</div>
                </Link>
                <div className="">
                  <span className="text-lg text-[#965e4f]">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $69.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fvn-subheadline">
          <div className="fvn-subheadline-deco-line"></div>
          <div className="fvn-subheadline-label">Coffee Magazine</div>
          <div className="fvn-subheadline-deco-line"></div>
        </div>

        <div className="coffee-magazine mb-18">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="fvn-magazine-images basis-1/2 flex flex-col md:flex-row gap-5 w-full h-full">
              <div className="fvn-magazine-big-image h-[280px] bg-[url(/images/image-1.jpg)] bg-cover bg-no-repeat bg-center md:basis-2/3"></div>
              <div className="fvn-magazine-small-image md:basis-1/3 flex flex-row md:flex-col gap-5">
                <div className="fvn-magazine-small-image-01 h-[130px] bg-[url(/images/image-2.jpg)] bg-cover bg-no-repeat bg-center basis-1/2"></div>
                <div className="fvn-magazine-small-image-02 h-[130px] bg-[url(/images/image-3.jpg)] bg-cover bg-no-repeat bg-center basis-1/2"></div>
              </div>
            </div>
            <div className="fvn-magazine-post basis-1/2 pl-14 text-center md:text-left">
              <div className="uppercase tracking-widest text-gray-500 font-medium text-[13px] mb-4">
                Premium Offer
              </div>
              <div className="text-4xl mb-4">Get our Coffee Magazine</div>
              <div className="text-gray-500 leading-7 mb-4">
                The most versatile furniture system ever created. Designed to
                fit your life
              </div>
              <div className="fvn-button bg-gray-900 text-white md:w-max">
                Start Shopping
              </div>
            </div>
          </div>
        </div>

        <div className="fvn-parallax-section  bg-[url(/images/image-4.jpg)] bg-cover bg-no-repeat bg-center h-[340px] mb-24 bg-fixed w-[100vw] relative left-[calc(-50vw_+_50%)]"></div>

        <div className="fvn-subheadline">
          <div className="fvn-subheadline-deco-line"></div>
          <div className="fvn-subheadline-label">
            Behind the mugs, lifestyle stories
          </div>
          <div className="fvn-subheadline-deco-line"></div>
        </div>

        <div className="lifestyle-story w-[65%] lg:w-[65%] mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
            <div className="fvn-product-card">
              <div className="h-[300px] bg-[url(/images/superman.jpg)] bg-cover bg-no-repeat bg-center">
                <Link href="#">
                  <div className="w-full h-full hover:bg-gray-900/30 transition-all ease-in-out duration-300 relative group">
                    <div className="absolute bg-white text-gray-900 w-11/12 uppercase bottom-1 group-hover:bottom-4 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 text-center  tracking-wider py-4 px-7 text-sm font-medium cursor-pointer hover:bg-white/90 transition-all ease-in-out duration-300">
                      Explore Mug
                    </div>
                  </div>
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  className="block text-xl mb-3 hover:text-[#965e4f]"
                  href="#"
                  alt="Product-fvnhoangdat"
                >
                  <div>Health Check: why do I get a headache when I haven&apos;t had my coffee</div>
                </Link>
                <div className="text-gray-500 leading-7 mb-3">
                 It is a paradisematic country, in which roasted parts of sentences fly into your mouth
                </div>
                <div className="text-gray-500 leading-7 uppercase text-xs font-semibold">October 9, 2018</div>
              </div>
            </div>
          </div>
        </div>

        <div className="subrice-us h-[350px] bg-[#1d1f2e] flex flex-col justify-center items-center mb-24">
          <div className="flex justify-center items-center mb-3">
            <div className="w-8 h-px bg-gray-500"></div>
            <div className="uppercase mx-4 tracking-widest text-gray-400 font-bold text-[13px]">Sign up and get free coffee bags</div>
            <div className="w-8 h-px bg-gray-500"></div>
          </div>
          <div className="text-4xl text-white mb-3">Coffee update</div>
          <div className="fvn-form flex justify-center items-center gap-5">
            <div className="fvn-form-item">
              <input type="email" placeholder="customeremail@.com" className="px-6 py-4 text-white w-[350px] bg-inherit border-[1px] border-gray-700 outline-none leading-5 hover:border-gray-300 focus:border-gray-300 duration-500 placeholder:uppercase placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold" />
            </div>
            <div className="fvn-form-item">
              <button type="submit" className="fvn-button bg-white text-gray-900 w-max">Submit</button>
            </div>

          </div>
        </div>
      </main>

      <footer className="h-[350px] bg-slate-400">Footer</footer>
    </div>
  );
}
