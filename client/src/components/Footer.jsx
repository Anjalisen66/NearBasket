import React from 'react'
import { FooterLinks } from '../assets/assets'
import logo from '../assets/Screenshot 2025-02-24 231341.png'

const Footer = () => {
    

  return (
    <div>
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-32" src={logo} alt="Logo" />
                    <p className="max-w-[410px] mt-6">Near Basket brings your neighborhood stores online, offering fresh groceries and daily essentials at your fingertips. Enjoy fast delivery, great deals, and the comfort of shopping local — all in one place. Powered by community, driven by convenience.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {FooterLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright {new Date().getFullYear } © NearBasket All Right Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer