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
          <div className="fvn-form-item max-w-2xl">
            <input
              type="email"
              placeholder="https://www.youtube.com/watch?v=H9KESr_ceJs&t=9s"
              className="px-6 py-4 text-[#4a474c] w-max bg-inherit border-[2px] border-[#4e5a87] rounded-lg outline-none leading-5 hover:border-sky-500 focus:border-sky-500 duration-500 placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold" />
          </div>
          <div className="fvn-form-item">
            <button
              type="submit"
              className="fvn-button-1 bg-blue-400 text-white rounded-lg w-max">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
