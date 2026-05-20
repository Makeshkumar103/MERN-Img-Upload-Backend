# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

npm create vite@latest rough
npm i axios


npm init
y

npm i express cors dotenv nodemon

npm i cloudinary multer

API_KEY :process.env.API_KEY,
CLOUD_NAME:process.env.CLOUD_NAME,
API_SECRET:process.env.API_SECRET


old app.jsx
const [preview, setPreview] =useState(null);

  // const handleSendFile = async (e) =>{
  //   e.preventDefault();
    
  //   if (!preview) return;
  //   try{
  //     const res = await axios.post("http://localhost:8000/upload", {
  //       image_url: preview,
  //     });

  //     console.log("Response",res);
  //     console.log(preview);
  //     console.log("Request is sending");
      
  //   } catch (err) {
  //     console.log(err)
  //   }
  // };