import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/ameer.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “This Is Soomro Corporation LTD.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400e text-2xl">
        AMEER HAMZA
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        CEO-Soomro Corp.
      </div>
    </figcaption>
  </div>
</figure>
</div>
  )
}

export default page