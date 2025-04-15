# Open Studio Website

A modern, responsive website for an open studio space, built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern, clean aesthetic similar to ThePotteryLoop.com
- 24/7 studio space showcase
- Independent study program information
- Waitlist signup form integration
- Social media integration

## Setup Instructions

1. Create a new repository on GitHub
2. Clone this repository to your local machine
3. Push the code to your GitHub repository
4. Go to your repository settings
5. Navigate to the "Pages" section
6. Select the main branch as the source
7. Save the changes

## Custom Domain Setup

To use your custom domain from Namecheap:

1. In your Namecheap account, go to Domain List
2. Click "Manage" next to your domain
3. Go to the "Advanced DNS" tab
4. Add the following records:
   - Type: A Record
     - Host: @
     - Value: 185.199.108.153
     - TTL: Automatic
   - Type: A Record
     - Host: @
     - Value: 185.199.109.153
     - TTL: Automatic
   - Type: A Record
     - Host: @
     - Value: 185.199.110.153
     - TTL: Automatic
   - Type: A Record
     - Host: @
     - Value: 185.199.111.153
     - TTL: Automatic
   - Type: CNAME Record
     - Host: www
     - Value: your-username.github.io
     - TTL: Automatic

5. In your GitHub repository settings:
   - Go to the "Pages" section
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS"

## Customization

- Replace `your-email@example.com` with your actual email
- Update the Fillout.com form link with your actual form URL
- Add your studio images to the `images` folder
- Update social media links in the footer
- Customize colors in the CSS file by modifying the `:root` variables

## License

This project is licensed under the MIT License. 