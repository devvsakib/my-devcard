import React, { useCallback, useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import './App.css'
import DevCard from './components/DevCard'
import Details from './components/Details'
import ImageEditor from './components/ImageEditor';

function App() {
  const [image, setIamge] = useState(null);
  const [editor, setEditor] = useState(true);
  const [edited, setEdited] = useState({
    avatar: "https://avatars.githubusercontent.com/u/88339569?v=4",
    nameSize: 25,
    nameColor: '#fff',
    bioSize: 15,
    bioColor: '#fff',
    socialIconSize: 2,
    socialIconColor: '#fff',
    cardBackgroundColor: '#9333ea',
  });
  const [details, setDetails] = useState({
    name: 'Sakib Ahmed',
    bio: 'Front-end Developer',
    twitter: 'https://twitter.com/PowerTheWeb',
    facebook: 'https://facebook.com/PowerTheWeb',
    github: 'https://github.com/PowerTheWeb',
    discord: 'https://discord.com/invite/PowerTheWeb',
    instagram: 'https://instagram.com/PowerTheWeb',
  });
  const node = document.querySelector('.card');
  const ref = useRef(null)


  const onButtonClick = useCallback(() => {
    const node = document.querySelector('.card');
    if (!node) {
      return;
    }
    htmlToImage.toPng(node, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const onEditorChange = (e) => {
    const { name, value } = e.target;
    setEdited({ ...edited, [name]: parseInt(value) });
  };
  const onNameColorChange = (e) => {
    setEdited({ ...edited, nameColor: e.target.value });
  };

  const onBioColorChange = (e) => {
    setEdited({ ...edited, bioColor: e.target.value });
  };

  const onSocialIconColorChange = (e) => {
    setEdited({ ...edited, socialIconColor: e.target.value });
  };
  const onBackgroundColorChange = (e) => {
    setEdited({ ...edited, backgroundColor: e.target.value });
  };
  
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setEdited({ ...edited, avatar: imageUrl });
    }
  };
  


  return (
    <div className="App">
      <div className='flex flex-col md:flex-row  justify-center md:justify-between items-center gap-10'>
        <div>
          {editor ?
            <Details onInputChange={onInputChange} />
            :
            <ImageEditor onNameColorChange={onNameColorChange} onImageChange={onImageChange} onBioColorChange={onBioColorChange} onSocialIconColorChange={onSocialIconColorChange} edited={edited} onBackgroundColorChange={onBackgroundColorChange} onEditorChange={onEditorChange} />}
         
          <div className='grid gap-5 grid-cols-2'>
            <button className='mt-10' onClick={() => setEditor(!editor)}>{editor ? "Edit Image" : "Edit Details"}</button>

            <button onClick={onButtonClick} className='mt-10'>Download</button>
          </div>
        </div>
        <div className='flex justify-center'>
          <DevCard ref={ref} details={details} edited={edited} />
        </div>
      </div>
    </div>
  )
}

export default App
