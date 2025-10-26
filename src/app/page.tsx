"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Bed, Calendar, ChefHat, Clock, Globe, Heart, HelpCircle, MessageCircle, Sparkles, Star, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Indulge in unparalleled comfort and elegance at Grand Luxe Hotel, where every moment becomes an extraordinary memory"
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant luxury hotel lobby with marble floors and crystal chandeliers"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Where timeless elegance meets modern luxury. Our heritage of exceptional hospitality creates unforgettable experiences for discerning travelers from around the world."
          buttons={[
            { text: "Discover Our Story", href: "about" },
            { text: "View Gallery", href: "#" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Experience unparalleled luxury with our exceptional facilities and services"
          tag="Premium Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Michelin-Star Dining",
              description: "Savor exquisite cuisine crafted by award-winning chefs in our signature restaurants",
              icon: ChefHat
            },
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind with our world-class spa treatments and wellness programs",
              icon: Heart
            },
            {
              title: "Infinity Pool & Terrace",
              description: "Relax in our stunning infinity pool overlooking breathtaking city or ocean views",
              icon: Waves
            },
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team ensures every request is fulfilled with utmost care",
              icon: Clock
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Luxurious Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe-room",
              brand: "Grand Luxe",
              name: "Deluxe King Room",
              price: "$450/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious deluxe king room with city view"
            },
            {
              id: "executive-suite",
              brand: "Grand Luxe",
              name: "Executive Suite",
              price: "$750/night",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/18801079/pexels-photo-18801079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant executive suite with living area"
            },
            {
              id: "presidential-suite",
              brand: "Grand Luxe",
              name: "Presidential Suite",
              price: "$1,200/night",
              rating: 5,
              reviewCount: "950",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious presidential suite with panoramic views"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Discover what our valued guests say about their stays"
          tag="5-Star Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              testimonial: "Absolutely exceptional service and accommodations. The attention to detail was remarkable, and the staff went above and beyond to ensure our comfort. This is luxury hospitality at its finest.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Writer",
              testimonial: "Having stayed at luxury hotels worldwide, Grand Luxe truly stands out. The perfect blend of elegance, comfort, and personalized service. Every moment was extraordinary.",
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Fashion Designer",
              testimonial: "The spa treatments were divine, the dining was exceptional, and the suite was absolutely stunning. This hotel exceeded all my expectations for a luxury getaway.",
              imageSrc: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "CEO",
              testimonial: "Perfect for business and leisure. The executive lounge, meeting facilities, and concierge services are world-class. I'll definitely be returning on my next visit to the city.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Travel Partners"
          description="Featured on leading travel platforms and hospitality networks worldwide"
          tag="Global Recognition"
          tagIcon={Globe}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1656225/pexels-photo-1656225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6466488/pexels-photo-6466488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1656225/pexels-photo-1656225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6633/car-superhero-symbol-batman.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about your stay at Grand Luxe Hotel"
          tag="Help & Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request, subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transfers with our fleet of premium vehicles. Please contact our concierge team to arrange your transportation."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature three restaurants: our Michelin-starred fine dining restaurant, casual bistro, and rooftop bar with panoramic city views. Room service is available 24/7."
            },
            {
              id: "4",
              title: "Is there parking available at the hotel?",
              content: "Yes, we offer valet parking service for $35 per night. Self-parking is also available in our secure garage for $25 per night."
            },
            {
              id: "5",
              title: "What spa services do you offer?",
              content: "Our full-service spa offers massages, facials, body treatments, and wellness therapies. We also have a fitness center, sauna, and steam room available 24/7."
            },
            {
              id: "6",
              title: "Can you accommodate special dietary requirements?",
              content: "Absolutely! Our chefs can accommodate various dietary needs including vegetarian, vegan, gluten-free, and other special requirements. Please inform us when making your reservation."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          title="Book Your Luxury Experience"
          description="Ready to experience unparalleled luxury? Contact us to reserve your stay or get personalized assistance with your booking."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email address"
          buttonText="Get Booking Info"
          termsText="By submitting, you agree to receive booking information and special offers. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "product" },
                { label: "Amenities", href: "feature" },
                { label: "Dining", href: "#" },
                { label: "Spa & Wellness", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "#" },
                { label: "Business Center", href: "#" },
                { label: "Event Planning", href: "#" },
                { label: "Airport Transfer", href: "#" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Make a Reservation", href: "contact" },
                { label: "Customer Service", href: "#" },
                { label: "Group Bookings", href: "#" },
                { label: "Special Requests", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Grand Luxe Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}