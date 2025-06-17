'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from "sonner"
const Subscribe = () => {
      const [isLoaded, setIsLoaded] = useState(false);
      const [email, setEmail] = useState("")
     const handleSubmit = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  try {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Thanks for subscribing!");
    console.log(email);
    setEmail("");
  } catch (error) {
    toast.error("Something went wrong");
  }
};

      useEffect(() => {
        setIsLoaded(true);
      }, []);
  return (
    <div className={`mt-16 rounded-2xl bg-gradient-to-r from-red-50 via-red-100/50 to-red-50 dark:from-red-950/50 dark:via-red-900/30 dark:to-red-950/50 p-8 border border-red-200/50 dark:border-red-500/30 backdrop-blur-sm ${isLoaded ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
  <div className="flex flex-col items-center text-center gap-6">
    <div className="space-y-4">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium shadow-lg">
        <span className="mr-2">📧</span>
        Stay Updated
      </div>
      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Get the Latest Property Management Tips
      </h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
        Subscribe to our newsletter and receive exclusive insights, industry updates, and expert tips delivered straight to your inbox.
      </p>
    </div>
    
    <div className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          name='email'
          value={email}
          
          onChange={(e) =>setEmail (e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3  border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
        />
        <Button 
 onClick={handleSubmit} type='submit' className="whitespace-nowrap px-6 py-4 bg-red-500 hover:bg-red-400 text-white text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
          Subscribe Now
        </Button>
        
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
        No spam, unsubscribe at any time. We respect your privacy.
      </p>
    </div>
    
    <div className="flex items-center gap-8 text-sm text-gray-600 dark:text-gray-400">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span>Weekly Updates</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span>Expert Tips</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        <span>Industry News</span>
      </div>
    </div>
  </div>
</div>
  )
}

export default Subscribe