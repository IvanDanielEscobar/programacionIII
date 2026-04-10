import React from "react";
import Link from "next/link";

export default function page() {
    return(
        <div className="flex flex-col flex-1 items-center justify-content bg-zinc-50 font-sans dark:bg-black">
             <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">                 
                    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        About
                      </h1>
                      <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia, unde enim tempore temporibus eius iusto nam dolores architecto vitae libero veniam maiores. Eligendi similique pariatur fuga incidunt nesciunt sit?
                      </p>
                    </div>

                </main>
        </div>
    );
}