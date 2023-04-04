import { useEffect } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaInstagram, FaFacebook } from 'react-icons/fa';
import './DevCard.css';

const DevCard = ({ ref, details, edited }) => {
    const { name, bio, twitter, facebook, github, discord, instagram } = details;
    const { nameSize, nameColor, bioSize, bioColor, socialIconSize, socialIconColor, cardBackgroundColor, avatar } = edited;
    console.log(avatar);
    return (
        <>
            <div className="card relative bg-black bg-cover flex flex-col items-center justify-center w-[300px] overflow-hidden h-[450px] select-none rounded-[25px] " ref={ref}>

                <div className='z-10 overflow-hidden absolute top-4 left-4 uppercase'>
                    <img src="/assets/whitewave.png" className='absolute  bottom-0 -left-2 wave scale-x-[1]  opacity-30 ' alt="" />
                    <h2 className='font-bold'>PowerTheWeb</h2>
                </div>

                {/* Background */}
                <div className='w-[100%] h-[100%] absolute border-[2px] rounded-[25px] border-white/30 z-20'></div>

                <img src="/assets/dotted.png" className='absolute  bottom-5 scale-y-[-1] scale-x-[-1]  -left-36 z-10  opacity-70 rotate-90' alt="" />
                <img src="/assets/whitewave.png" className='absolute  bottom-0 left-0 w-[420px] wave scale-x-[-1] opacity-50' alt="" />

                {/* Brand */}
                <div className='bg-white  rounded-md z-10 translate-y-6 translate-x-[20%] absolute'>
                    <img src="/assets/PowerTheWebLogo.png" className='w-12' />
                </div>

                {/* Name */}
                <div className="z-10 absolute bottom-20 left-6 text-left">
                    <h1 className='name uppercase font-semibold '
                        style={{ fontSize: `${nameSize}px`, color: `${nameColor}` }}
                    >{name}</h1>
                    <p className='bio font-semibold break-words'
                        style={{ fontSize: `${bioSize}px`, color: `${bioColor}` }}
                    >{bio}</p>
                    <p className='absolute -top-48 right-0 backdrop-blur-sm font-semibold text-white bg-black/10 px-4 rounded-md'>@devvsakib</p>
                </div>

                <div className={`w-[1500px] overflow-hidden h-[600px] absolute z-[1] bg-gradient-to-tr ttt from-[#9333eab3]/70 via-purple-600/5 to-black/0`}></div>

                <img src="/assets/pngegg.png" className='absolute wave scale-x-[1]  opacity-[.05]  top-0 w-full h-full' />
                <img src="/assets/circledot.png" className='absolute w-3/4 bottom-36 scale-y-[1] scale-x-[1] -right-8 invert opacity-30 -rotate-[160deg]' alt="" />
                <img src={avatar} alt="" className='object-cover object-center avatar absolute border-4 -translate-y-[20%] translate-x-[40%]' />

                <div className={` z-10 w-[100%] links absolute bottom-12`}
                    style={{ color: `${socialIconColor}` }}
                >
                    <div className={`text-${socialIconSize}xl pl-6 flex gap-2 w-full`}>
                        <div className=' backdrop-blur-sm bg-white/5 rounded-lg p-2'>
                            <FaTwitter className='cursor-pointer' />
                        </div>
                        <div className=' backdrop-blur-sm rounded-lg bg-white/5 p-2'>
                            <FaFacebook className='cursor-pointer' />
                        </div>
                        <div className=' backdrop-blur-md rounded-lg bg-white/5 p-2'>
                            <FaGithub className='cursor-pointer' />
                        </div>
                        {/* <div className=' backdrop-blur-md rounded-lg bg-white/5 p-2'>
                            <FaInstagram className='cursor-pointer' />
                        </div> */}
                        <div className=' backdrop-blur-md rounded-lg bg-white/5 p-2'>
                            <FaDiscord className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DevCard;
