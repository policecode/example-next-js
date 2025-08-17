import Image from "next/image";
import Header from "@/components/me/header";
import Footer from "@/components/me/footer";
import DownloadYoutube from "@/components/me/dowloadyoutube";

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

        <DownloadYoutube />

        <div className="flex flex-col justify-center items-center mt-10">
          <h2 className="text-2xl px-4">
            YouTube Video Downloader Free Online at MediaSocial
          </h2>
          <div className="my-2 px-4 md:px-20 italic">
            Are you tired of struggling to download and convert your favorite
            YouTube videos to various formats? Do you want a fast, reliable, and
            user-friendly solution to enjoy your beloved content offline? Look
            no further! MediaSocial YouTube Video Downloader (Converter) is here to
            revolutionize your Youtube video downloading and converting
            experience.
          </div>
          <div className="grid grid-cols-2 w-full gap-8 mt-10 px-4">
            <div className="flex justify-center">
              <Link
                href="/youtube-downloader"
                type="submit"
                className="fvn-link-1 rounded-lg block w-full text-center max-w-md"
              >
                Youtube to MP3
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="/youtube-downloader"
                type="submit"
                className="fvn-link-1 rounded-lg block w-full text-center max-w-md"
              >
                Youtube to MP4
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 w-full gap-4 lg:gap-10 my-6 lg:my-10 px-8">
            <div>
              <h3 className="text-2xl my-2 lg:my-4 font-medium">
                <Image
                  src="/images/icons/rocket.png"
                  alt="rocket"
                  className="me-2 w-7 h-7 float-left"
                  width={32}
                  height={32}
                />
                Multiple Format Support
              </h3>
              <span className="font-light">
                MediaSocial supports a wide range of video and audio formats, convert
                youtube videos to MP4, 3GP, WEBM, MP3, OGG, and M4A. This
                versatility ensures that you can enjoy your downloaded content
                on any device, be it a PC, tablet, iPhone, or Android
                smartphone.
              </span>
            </div>
            <div>
              <h3 className="text-2xl my-2 lg:my-4 font-medium">
                <Image
                  src="/images/icons/limit.png"
                  alt="limit"
                  className="me-2 w-7 h-7 float-left"
                  width={32}
                  height={32}
                />
                High-Quality Video Downloads
              </h3>
              <span className="font-light">
                Our platform allows you to download youtube videos in various
                resolutions, including 720p,1080p, 2k, and even 4k. This means
                you can enjoy your content in the highest quality possible, just
                as the creator intended.
              </span>
            </div>
            <div>
              <h3 className="text-2xl my-2 lg:my-4 font-medium">
                <Image
                  src="/images/icons/security.png"
                  alt="security"
                  className="me-2 w-7 h-7 float-left"
                  width={32}
                  height={32}
                />
                User-Friendly Interface
              </h3>
              <span className="font-light">
                MediaSocial is designed for ease of use. Our simple and intuitive
                interface allows you to download and convert youtube videos in
                just a few clicks, without the need for any technical knowledge
                or expertise.
              </span>
            </div>
            <div>
              <h3 className="text-2xl my-2 lg:my-4 font-medium">
                <Image
                  src="/images/icons/chrome.png"
                  alt="chrome"
                  className="me-2 w-7 h-7 float-left"
                  width={32}
                  height={32}
                />
                No Software Installation Required
              </h3>
              <span className="font-light">
                Unlike many other Youtube video downloaders and converters, MediaSocial
                is an online tool that doesn't require you to install any
                software on your device. Simply visit our website, enter the
                video URL, and start downloading your favorite youtube content
              </span>
            </div>
            <div>
              <h3 className=" flex text-2xl my-4 font-medium">
                <Image
                  src="/images/icons/support.png"
                  alt="support"
                  className="me-2"
                  width={32}
                  height={32}
                />
                Fast Download Speeds
              </h3>
              <span className="font-light">
                We understand that time is precious, so we have optimized our
                platform to provide you with the fastest download speeds
                possible. Say goodbye to long waiting times and hello to instant
                video gratification.
              </span>
            </div>
            <div>
              <h3 className="text-2xl my-2 lg:my-4 font-medium">
                <Image
                  src="/images/icons/free.png"
                  alt="free"
                  className="me-2 w-7 h-7 float-left"
                  width={32}
                  height={32}
                />
                Compatibility with Multiple Platforms
              </h3>
              <span className="font-light">
                MediaSocial is compatible with various platforms, including Windows,
                Mac OS X, iOS, and Android. This ensures that you can use MediaSocial
                on your preferred device and operating system.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-10">
            <h2 className="text-2xl font-bold">The Best Youtube Downloader</h2>
            <div className="grid justify-items-center grid-cols-2 min-[30rem]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 max-w-[800px] gap-8 mt-6 px-4">
              <Image
                src="/images/icons/icon1.svg"
                alt="icon1"
                className="me-2 w-[85px] h-[85px] md:w-[110px] md:h-[110px]"
                width={110}
                height={110}
              />

              <Image
                src="/images/icons/icon2.svg"
                alt="icon2"
                className="me-2 w-[85px] h-[85px] md:w-[110px] md:h-[110px]"
                width={110}
                height={110}
              />

              <Image
                src="/images/icons/icon3.svg"
                alt="icon3"
                className="me-2 w-[85px] h-[85px] md:w-[110px] md:h-[110px]"
                width={110}
                height={110}
              />

              <Image
                src="/images/icons/icon4.svg"
                alt="icon4"
                className="me-2 w-[85px] h-[85px] md:w-[110px] md:h-[110px]"
                width={110}
                height={110}
              />

              <Image
                src="/images/icons/icon5.svg"
                alt="icon5"
                className="me-2 w-[85px] h-[85px] md:w-[110px] md:h-[110px]"
                width={110}
                height={110}
              />
            </div>
            <div className="max-w-[800px] mt-4 px-8">
              So, what are you waiting for? Give MediaSocial YouTube Video Downloader a
              try today and experience the ultimate in Youtube video downloading
              and converting convenience and versatility. We are confident that
              you'll love our platform and never look back. Happy downloading!
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-10">
            <h2 className="text-2xl font-bold">
              How to Download YouTube Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1000px] gap-8 mt-4 md:mt-6 px-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-full max-w-[80px] h-[80px] rounded-[50%] font-bold mr-2 text-blue-600 bg-blue-200 text-4xl">
                  1
                </div>
                <div>
                  Simply enter your desired YouTube link or type in relevant
                  keywords in the search box, then hit "convert."
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-full max-w-[80px] h-[80px] rounded-[50%] font-bold mr-2 text-red-600 bg-red-200 text-4xl">
                  2
                </div>
                <div>
                  {" "}
                  Choose your preferred output format (MP4 or MP3) and initiate
                  the transfer process by clicking the "Download" button.
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-full max-w-[80px] h-[80px] rounded-[50%] font-bold mr-2 text-green-600 bg-green-200 text-4xl">
                  3
                </div>
                <div>
                  Wait briefly for the conversion to finish and download your
                  file. It's that straightforward and user-friendly.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-10 w-full max-w-[1000px]">
            <h2 className="text-2xl font-bold">FAQs about MediaSocial.best</h2>
            <div className="w-full mt-6 px-4">
              <div className="mt-2">
                <h3 className="text-xl font-semibold">
                  Is MediaSocial YouTube video Downloader free to use?
                </h3>
                <span>
                  Yes, MediaSocial is a free online tool that allows users to download
                  and convert YouTube videos without any charges.
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold">
                  Is it legal to download YouTube videos using MediaSocial?
                </h3>
                <span>
                  Downloading copyrighted content without permission is
                  generally against YouTube's terms of service and may also be
                  illegal in some countries. Always respect copyright laws and
                  use the tool responsibly.
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold">
                  Can I download or convert youtube videos in different formats
                  using MediaSocial?
                </h3>
                <span>
                  Yes, MediaSocial allows you to download and convert youtube videos in
                  various formats such as MP4, AVI, and WEBM
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold">
                  Does MediaSocial support downloading Youtube videos in high quality?
                </h3>
                <span>
                  Yes, MediaSocial supports downloading Youtube videos in different qualities, including HD,720p,1080P and 4K
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold">
                  Can I use MediaSocial on my smartphone?
                </h3>
                <span>
                 Yes, MediaSocial is a web-based tool and can be accessed from any device with an internet connection, including smartphones
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold">
                  Is MediaSocial safe to use?
                </h3>
                <span>
                  MediaSocial is considered a safe and clean service, with no viruses and under intense supervision based on a security database. However, always practice caution while using any online tool and ensure you have up-to-date security software on your device.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
