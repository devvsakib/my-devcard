const ImageEditor = ({ onEditorChange, edited, onNameColorChange, onBioColorChange, onSocialIconColorChange, onBackgroundColorChange, onImageChange }) => {
    const { nameSize, avatar, nameColor, bioSize, bioColor, socialIconSize, socialIconColor, cardBackgroundColor } = edited;

    return (
        <>
            <h2 className='font-semibold'>Edit Your Developer Card</h2>
            <p className='text-gray-500'>Just enter your details and download your card</p>
            <div>
                <div>
                    <label className='block mt-5' htmlFor="avatar">Name Size</label>
                    <input onChange={onEditorChange} className='w-full' type="range" name="nameSize" id="nameSize" min={15} max={35} value={nameSize} />
                </div>
                <div>
                    <label className='block mt-5' htmlFor="avatar">Name Color</label>
                    <input onInput={onNameColorChange} className='w-full' type="color" name="nameColor" id="nameColor" value={nameColor} />
                </div>
                <div>
                    <label className='block mt-5' htmlFor="avatar">Bio Size</label>
                    <input onChange={onEditorChange} className='w-full' type="range" name="bioSize" id="bioSize" min={10} max={22} value={bioSize} />
                </div>
                <div>
                    <label className='block mt-5' htmlFor="avatar">Bio Color</label>
                    <input onChange={onBioColorChange} className='w-full' type="color" name="bioColor" id="bioColor" value={bioColor} />
                </div>
                <div>
                    <label className='block mt-5' htmlFor="avatar">Social Icon Size</label>
                    <input onChange={onEditorChange} className='w-full' type="range" name="socialIconSize" id="socialIconSize" max={3} min={1} value={socialIconSize} />
                </div>
                <div>
                    <label className='block mt-5' htmlFor="avatar">Social Icon Color</label>
                    <input onInput={onSocialIconColorChange} className='w-full' type="color" name="socialIconColor" id="socialIconColor" defaultValue={socialIconColor} value={socialIconColor} />
                </div>
                <div>
                    <label className='block mt-5' htmlFor="avatar">Background Color</label>
                    <input onInput={onBackgroundColorChange} className='w-full' type="color" name="socialIconColor" id="socialIconColor" value={cardBackgroundColor} />
                </div>
                {/* add a image input */}
                <div>
                    <label className='block mt-5' htmlFor="avatar">Profile Picture</label>
                    <input onChange={onImageChange} className='w-full' type="file" name="avatar" id="avatar" />
                </div>
            </div>
        </>
    )
}

export default ImageEditor