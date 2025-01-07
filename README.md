# USERXP.NET IMAGE DROP

    
    A minimalist image management web application built with Node.js and Express. Allows users to upload, view, rename, and delete images through a clean, drag-and-drop interface.

    ## Features

    - **Drag & Drop Upload**: Easily upload images by dragging them into the browser
    - **Image Management**:
      - View all uploaded images in a grid layout
      - Rename images with a simple prompt
      - Delete images with confirmation
    - **Responsive Design**: Works on both desktop and mobile devices
    - **Minimalist Interface**: Clean, monospace typography with off-white background
    - **Real-time Updates**: Automatically refreshes image list after changes

    ## Technologies Used

    - **Frontend**:
      - HTML5
      - CSS3 (with Roboto Mono font)
      - Vanilla JavaScript
    - **Backend**:
      - Node.js
      - Express.js
      - Multer (for file uploads)
    - **Styling**:
      - Minimalist design
      - Monospace typography
      - Off-white color scheme

    ## Installation

    1. Clone the repository:
       ```bash
       git clone https://github.com/your-username/userxp-image-drop.git
       ```
    2. Navigate to the project directory:
       ```bash
       cd userxp-image-drop
       ```
    3. Install dependencies:
       ```bash
       npm install
       ```
    4. Create an `images` directory:
       ```bash
       mkdir images
       ```
    5. Start the development server:
       ```bash
       npm run dev
       ```
    6. Open your browser and visit:
       ```
       http://localhost:3000
       ```

    ## Configuration

    The following environment variables can be configured:

    - `PORT`: Port to run the server on (default: 3000)
    - `UPLOAD_DIR`: Directory to store uploaded images (default: ./images)

    ## Deployment

    ### SiteGround Deployment

    1. Compress the project folder (excluding node_modules)
    2. Upload the zip file to your SiteGround account via cPanel or SFTP
    3. Extract the files in your public_html directory
    4. SSH into your SiteGround account and run:
       ```bash
       npm install
       npm start
       ```

    ### Other Hosting Providers

    The application can be deployed to any Node.js hosting provider. Follow these general steps:

    1. Install Node.js on your server
    2. Upload the project files
    3. Install dependencies:
       ```bash
       npm install --production
       ```
    4. Start the server:
       ```bash
       npm start
       ```

    ## Contributing

    Contributions are welcome! Please follow these steps:

    1. Fork the repository
    2. Create a new branch (`git checkout -b feature/YourFeatureName`)
    3. Commit your changes (`git commit -m 'Add some feature'`)
    4. Push to the branch (`git push origin feature/YourFeatureName`)
    5. Open a pull request

    ## License

    This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

    ## Acknowledgments

    - Roboto Mono font from Google Fonts
    - Multer for file upload handling
    - Express.js for the web server

    ## Contact

    For questions or support, please contact:
    - Email: your-email@example.com
    - GitHub: [your-username](https://github.com/your-username)
