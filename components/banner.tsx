'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)
  const redirectToWhatsAppChat = () => {
    // Replace '1234567890' with the phone number you want to chat with
    const phoneNumber = '916265831995';
    // You can also specify an initial message
    const message = 'Hello, I am Intrested in buying Your products , lets discuss..';

    // Construct the WhatsApp chat URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to the WhatsApp chat URL
    window.location.href = whatsappURL;
  };

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="text-slate-500 inline-flex">
              <a
              onClick={redirectToWhatsAppChat}
                className="font-medium hover:underline text-slate-50"
                target="_blank"
                rel="noreferrer"
              >
                Connect With Us <span className="hidden sm:inline"> on WatsApp</span>
              </a>{' '}
            </div>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
