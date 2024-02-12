"use client"
import React, { useRef } from 'react';
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

export default function EmailSection() {
  const emailRef = useRef(null);

  const scrollToContactSection = () => {
    if (emailRef.current) {
      emailRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ok5c79f', 'template_3ei2337', form.current, {
        publicKey: 'K8M5wN8jMAlOx-yda',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-24' id='Contact' ref={emailRef}>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I am currently looking for new opportunities, my inbox is always open. whether you have a question or you just
          want to say hi, I will try my best to get back to you
        </p>
        <div className='socials flex flex-row gap-2 text-2xl'>
          <Link href='https://www.facebook.com/tarangharsh07/'>
            <FontAwesomeIcon icon={faFacebook} className='text-blue-300' />
          </Link>
          <Link href='https://www.linkedin.com/in/tarang-harsh-b3b804230/'>
            <FontAwesomeIcon icon={faLinkedin} className='text-blue-300' />
          </Link>
          <Link href='https://www.instagram.com/tarang_harsh7/'>
            <FontAwesomeIcon icon={faInstagram} className='text-pink-400' />
          </Link>
          <Link href='https://github.com/harshtarang7'>
            <FontAwesomeIcon icon={faGithub} className='text-white' />
          </Link>
          <Link href='https://www.youtube.com/channel/UCnkRLL-sjRwH9ZFRqRkmyXQ'>
            <FontAwesomeIcon icon={faYoutube} className='text-red-700' />
          </Link>
        </div>
      </div>

      <div>
        <form action='' ref={form} className='flex flex-col ' onSubmit={sendEmail}>
          <div className='mb-6'>
            <label htmlFor='name' className='text-white mb-2 block text-sm font-medium'>
              Your Name
            </label>
            <input
              name='from_name'
              type='text'
              id='name'
              required
              placeholder='Rahul Sharma'
              className='bg-[#18191E] border border-[#3353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='text-white mb-2 block text-sm font-medium'>
              Your Email
            </label>
            <input
              name='from_email'
              type='email'
              id='email'
              required
              placeholder='rahul07@gmail.com'
              className='bg-[#18191E] border border-[#3353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
              Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              required
              placeholder='just saying hi'
              className='bg-[#18191E] border border-[#3353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              placeholder="let's talk about...."
              className='bg-[#18191E] border border-[#3353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}