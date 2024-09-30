
// import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Configure the PWA options
const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    cacheOnFrontEndNav:true,
    aggressiveFrontEndNavCaching:true,
    reloadOnOnline:true,
    swMinify:true,
    disable:false,
    workboxOptions:{
        disableDevLogs:true
    }
  });
  

// Export the final configuration
module.exports = withPWA(nextConfig);