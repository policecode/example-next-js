import Image from "next/image";
import Header from "@/components/me/header";
import Link from "next/link";

export const metadata = {
  title: "Download video youtube",
  description: "ádlfgkjalskhjrgkjasdfkjsadrf",
};
export default function Home() {
  return (
    <div className="content-wrapper max-w-screen-xl text-base mx-auto">
      <Header />
      <div className="py-10 bg-gray-200 text-[#4a474c]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl">YouTube Video Downloader</h1>
          <div className="my-6 italic">
            download youtube videos, convert Youtube video to mp3/mp4 for free
          </div>
        </div>

        <div className="fvn-form flex justify-center items-center gap-5">
          <div className="fvn-form-item mx-4 w-full max-w-2xl">
            <input
              type="email"
              placeholder="https://www.youtube.com/watch?v=H9KESr_ceJs&t=9s"
              className="px-6 py-4 text-[#4a474c] w-full bg-inherit border-[2px] border-[#4e5a87] rounded-lg outline-none leading-5 hover:border-sky-500 focus:border-sky-500 duration-500 placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold" />
          </div>
          <div className="fvn-form-item">
            <button
              type="submit"
              className="fvn-button-1 bg-blue-400 text-white rounded-lg w-max">
              Download
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
           <h2 className="text-2xl">YouTube Video Downloader Free Online at MediaSocial</h2>
           <div className="my-2 px-20 italic">
            Are you tired of struggling to download and convert your favorite YouTube videos to various formats? Do you want a fast, reliable, and user-friendly solution to enjoy your beloved content offline? Look no further! Yt5s YouTube Video Downloader (Converter) is here to revolutionize your Youtube video downloading and converting experience.
          </div>
          <div className="grid grid-cols-2 w-full gap-8 mt-10 px-4">
            <div className="flex justify-center">
              <Link
                href="/youtube-downloader"
                type="submit"
                className="fvn-link-1 rounded-lg block w-full text-center max-w-md">
                Youtube to MP3
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="/youtube-downloader"
                type="submit"
                className="fvn-link-1 rounded-lg block w-full text-center max-w-md">
                Youtube to MP4
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
