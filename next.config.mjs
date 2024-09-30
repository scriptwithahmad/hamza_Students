/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI: "add_your_mongodb_uri_here",


        // Cloudinary ------------------------------
        NEXT_PUBLIC_SECRET_KEY: "1234555aaddad",
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dmyrswz0r",
        NEXT_PUBLIC_CLOUDINARY_API_KEY: "885761744226268",
        NEXT_PUBLIC_CLOUDINARY_API_SECRET: "0JlDP2yzQVQ-L3NwZDDmfzhk1Qs",
    }
};

export default nextConfig;
