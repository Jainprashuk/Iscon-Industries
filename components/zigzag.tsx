import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">About Us</h1>
            <p className="text-xl text-gray-400">All About Who We Are , What We Offer And How We work ....</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Iscon - Industries</div>
                  <h3 className="h3 mb-3">Who We Are ?</h3>
                  <p className="text-xl text-gray-400 mb-4">Iscon Industries, based in Sanawad, MP, is a trusted name in the pavers and tiles industry with a decade of unwavering expertise. With a portfolio of over 50 successful projects, we've earned a reputation for excellence in crafting high-quality, durable pavers that transform outdoor spaces. Our commitment to innovation and design has made us a preferred choice for enhancing landscapes. Explore our range and experience the Iscon difference. <span className='text-blue-600'><a href="/about">Read More...</a></span> </p>
                  
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Iscon - industries</div>
                  <h3 className="h3 mb-3">Our Products</h3>
                  <p className="text-xl text-gray-400 mb-4">Explore our extensive product selection, boasting more than 15 distinct varieties, each showcasing a blend of captivating color combinations. Iscon Industries offers an array of pavers that redefine outdoor aesthetics and elevate your landscape design to new heights. <span className='text-blue-600'><a href="/products">Read More...</a></span></p>
                  
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Iscon - industries</div>
                  <h3 className="h3 mb-3">Our Journey Thus Far..</h3>
                  <p className="text-xl text-gray-400 mb-4">Over a span of time, Iscon Industries has proudly served 50+ clients, delivering excellence in over 10 major projects. Our commitment to quality and customer satisfaction shines through our track record.  <span className='text-blue-600'><a href="/work">Read More...</a></span></p>
                  
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
