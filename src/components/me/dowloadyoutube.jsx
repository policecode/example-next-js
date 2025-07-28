"use client";
import Image from "next/image";
import { useState } from "react";
export default function DownloadYoutube({ children }) {
    let [showFormDownload, setShowFormDownload] = useState(false);

    if (!showFormDownload) {
        return (
            <>
            <div  className="fvn-form flex justify-center items-center gap-5">
            <div className="fvn-form-item mx-4 w-full max-w-2xl">
                <input
                type="email"
                placeholder="https://www.youtube.com/watch?v=H9KESr_ceJs&t=9s"
                className="px-6 py-4 text-[#4a474c] w-full bg-inherit border-[2px] border-[#4e5a87] rounded-lg outline-none leading-5 hover:border-sky-500 focus:border-sky-500 duration-500 placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold"
                />
            </div>
            <div className="fvn-form-item">
                <button
                    type="submit"
                    className="fvn-button-1 bg-blue-400 text-white rounded-lg w-max">
                    Download
                </button>
            </div>
        </div>
            </>
        )
    } else {
        return (
          <>
              <div className="grid sm:grid-cols-2 w-full gap-8">
                  <div className="mx-4 bg-stone-300">
                      
                      <table class="border-collapse border border-gray-400 w-full text-gray-950">
                          <tbody>
                              <tr >
                                  <td className="fvn-border-table-td" colSpan={3}>
                                      <h3 className="flex">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                                          </svg>
                                          Audio
                                      </h3>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="fvn-border-table-td">MP3</td>
                                  <td className="fvn-border-table-td">13MB</td>
                                  <td className="fvn-border-table-td">
                                      <button
                                          type="button"
                                          className="fvn-link-2 flex items-center justify-center rounded-lg w-full">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                          </svg>
                                          Dowload
                                      </button>
                                  </td>
                              </tr>
                              <tr >
                                  <td className="fvn-border-table-td" colSpan={3}>
                                      <h3 className="flex">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                          </svg>
                                          Video
                                      </h3>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="fvn-border-table-td">
                                      <div className="flex">
                                          <span className="mr-2">1080p</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                          </svg>
                                      </div>
                                  </td>
                                  <td className="fvn-border-table-td">13MB</td>
                                  <td className="fvn-border-table-td">
                                      <button
                                          type="button"
                                          className="fvn-link-2 flex items-center justify-center rounded-lg w-full">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                          </svg>
                                          Dowload
                                      </button>
                                  </td>
                              </tr>
                               <tr>
                                  <td className="fvn-border-table-td">
                                      <div className="flex">
                                          <span className="mr-2">1080p</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                          </svg>
      
                                      </div>
                                  </td>
                                  <td className="fvn-border-table-td">13MB</td>
                                  <td className="fvn-border-table-td">
                                      <button
                                          type="button"
                                          className="fvn-link-2 flex items-center justify-center rounded-lg w-full">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                          </svg>
                                          Dowload
                                      </button>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="mx-4">
                      <div className="">
                          <Image
                              src="/images/image-1.jpg"
                              alt="rocket"
                              className="me-2 w-full h-full float-left"
                              width={320}
                              height={320}/>
                      </div>
                      <div className="mt-2">
                          <div className="text-xl">Name: LMFAO - Sexy and I Know It</div>
                          <div>Duration: 00:03:24</div>
                      </div>
                  </div>
              </div>
          </>
        );

    }
}
