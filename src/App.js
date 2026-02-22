import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const audioRef = useRef(null);

  const sendEmail = async (buttonText) => {
    try {
      // Create a hidden iframe to submit the form without redirecting
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden_iframe';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.action = 'https://formsubmit.co/chaitanya4141sharma@gmail.com';
      form.method = 'POST';
      form.target = 'hidden_iframe';

      const fields = {
        '_subject': 'Response from Sakhi',
        '_captcha': 'false',
        '_template': 'table',
        'message': `Button clicked: ${buttonText}`,
        'timestamp': new Date().toLocaleString()
      };

      Object.keys(fields).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      
      // Clean up after a short delay
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);
    } catch (error) {
      console.error('Email send failed:', error);
    }
  };

  const steps = [
    {
      image: 'https://imgs.search.brave.com/rqzzFwf-rEibZWVj_wM3neZ3JvAp4427Asv1MBvTDBA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiLzE1/LzYxLzNiMTU2MTcz/ODVmMjAwZGQ2MDUw/YzAxMmEyYzQ1OGVk/LmpwZw',
      message: 'Hy Sakhi !!',
      buttons: [{ text: 'Hye', action: () => setStep(1) }]
    },
    {
      image: 'https://imgs.search.brave.com/ta56lwDwmBPM16wSH-Kwk_KMYZ1gPoFKFCfAaDkXPRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Nub3cub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA0/L3NoaW5jaGFuLXBo/b3RvLWRvd25sb2Fk/LmpwZw',
      message: 'Muje aap ko eak baat btani ha',
      buttons: [{ text: 'Konsi baat', action: () => setStep(2) }]
    },
    {
      image: 'https://imgs.search.brave.com/O4yKq__JA002bwBui4S0aK3-EXxFg9AkOolJHMaSZrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdXRp/ZWRwLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNy9j/dXRlLXNoaW5jaGFu/LWRwJUUyJTgwJThC/LTI3LndlYnA',
      message: 'Pata nahi kaise batau',
      buttons: [{ text: 'Muh se', action: () => setStep(3) }]
    },
    {
      image: 'https://imgs.search.brave.com/SSbdHGg8a_nUwmQIqyO-sa_Zl-YSFn1AOS8-nDmqxGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NmaXJlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/OS9zaGluY2hhbi1w/aG90by13YWxscGFw/ZXJfMi5qcGc',
      message: 'Promise kro aap gussa nahi ho gi',
      buttons: [{ text: 'Sochu gi', action: () => setStep(4) }]
    },
    {
      image: 'https://imgs.search.brave.com/F794ezQojP6Tqx6mhUa1W5mSIIe-sD2cJugdSNWWeTk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc2lu/Z2luZy1zaGluY2hh/bi1hZXN0aGV0aWMt/bmw2NXp3c3ZuOWM2/cjdzby5qcGc',
      message: 'Plzz',
      buttons: [{ text: 'Aacha baba thik hai', action: () => setStep(5) }]
    },
    {
      image: 'https://imgs.search.brave.com/zOyBbdCWmBAKwCn6xrxQHi88kMGSyWIUPvXvOaidF4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Nub3cub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA0/L3NoaW5jaGFuLXBo/b3Rvc18xNS5qcGc',
      message: 'Me bol raha tha ki',
      buttons: [{ text: 'Ki ?', action: () => setStep(6) }]
    },
    {
      image: 'https://imgs.search.brave.com/0uNYf4YkH0NTYGDSXxTtz6ZizwADig3SpWDGUWl_T0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/VGZNNVc2TXRMUGtB/QUFBTS9zaGluY2hh/bi5naWY.gif',
      message: 'Me na tum se kuch khena chata hu na tumhare bina rhena chata hu 😂😂',
      buttons: [{ text: 'Katti byee !!  ', action: () => setStep(7) }]
    },
    {
      image: 'https://imgs.search.brave.com/YBpxozGWOuXRyy-s-x7vsk-Hoi25qY5_cmfqIehoXlA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NmaXJlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/OS9zaGluY2hhbi1w/aG90by13YWxscGFw/ZXJfMTgtNTc4eDEw/MjQuanBn',
      message: 'Sorry Sorry !! aacha  sunoo ? ',
      buttons: [{ text: 'Bolo .', action: () => setStep(8) }]
    },
    {
      image: 'https://imgs.search.brave.com/CHVo1uRZpfqWaq4fTwzxdPdXuqOrbCGOX6fzYa8iNi0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8yMDUv/MS9IRC13YWxscGFw/ZXItc2hpbmNoYW4t/ZnVnZ2dzdGNkLXNo/aW5jaGFuLXRodW1i/bmFpbC5qcGc',
      message: 'Earphones laga lo sakhi plz',
      buttons: [{ text: 'Laga liye', action: () => setStep(9) }]
    },
    {
      image: 'https://imgs.search.brave.com/29431QOK8jxKyKYN4fdnAiFlBLUh5Lfug_cuxZmgNLQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci82ODYv/OTExL0hELXdhbGxw/YXBlci1zaGluY2hh/bi1hdHRpdHVkZS1j/YXJ0b29uLWRvZy1s/b29rLWxvdmUtc2hl/ZXJvLXllbGxvdy10/aHVtYm5haWwuanBn',
      message: 'Pakka laga liye na , kuch sunana hai',
      buttons: [{ text: 'Hn baba laga liye', action: () => setStep(10) }]
    },
    {
      image: 'https://imgs.search.brave.com/QeYwyFz9X0S2ijl8y17mXtOndJi0cRalH8ooxzjyNEA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NmaXJlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/OS9zaGluY2hhbi1w/aG90by13YWxscGFw/ZXJfMTYtNTMzeDEw/MjQuanBn',
      message: 'aankh band kro ! 💜',
      subtitle: 'aapne aap band ho jye ga wait',
      buttons: [],
      autoPlay: true,
      onAudioEnd: () => setStep(11)
    },
    {
      image: 'https://imgs.search.brave.com/tFcz7-SgQ7n6eeaWv4CflHA0Z774brccRKQcdgRgEgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NmaXJlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/OS9zaGluY2hhbi1w/aG90b18xMi00NzR4/MTAyNC5qcGc',
      message: 'Samaj dar ko ishara kafi hota hai, pr me toh bhondu hu, muje yahi laga',
      buttons: [{ text: 'Kya laga ?', action: () => setStep(12) }]
    },
    {
      image: 'https://imgs.search.brave.com/W6m9lm0jlFovmwynma7xBRB431UyGtPZeLqNYQksMZ0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3NmaXJlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/OS9zaGluY2hhbi1w/aG90by1kb3dubG9h/ZF82LmpwZw',
      message: 'Yahi ki aapki hn hai',
      buttons: [{ text: 'Kisne khaha ?', action: () => setStep(13) }]
    },
    {
      image: 'https://imgs.search.brave.com/MsLHRn4UViMa9eWo9baCSZmd0h_V1JcTqc2W8X_zTlg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NmaXJlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/OS9zaGluY2hhbi1w/aG90b3NfMTYuanBn',
      message: 'Muje aisa samj me aaya ki aapki ," hn hai "',
      buttons: [{ text: 'Aacha ? ', action: () => setStep(14) }]
    },
    {
      image: 'https://imgs.search.brave.com/aLVLUt0K_-6-zX2Ufjzc5CiYSH9VoMsnc8uPJ20DEDE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5HSXpOemxr/TXpZdFpUVmhPQzAw/WmpobExUa3lZMll0/TVdFM05EYzBaalJp/TlRkbFhrRXlYa0Zx/Y0djQC5qcGc',
      message: 'Aisi baat hai toh confirm kr le te hai',
      buttons: [{ text: 'Kro', action: () => setStep(15) }]
    },
    {
      image: 'https://imgs.search.brave.com/t6mcT_tmMJ68nRY69mHXBmGrhRZMnXbNrIkovvMjFuo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NmaXJlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/OS9zaGluY2hhbi1w/aG90b18yLTU5Mngx/MDI0LmpwZw',
      message: 'Sakhii me aap ko pasand krta hu " I love you 💜💜 " ',
      buttons: [
        { text: 'I love you too', action: () => { sendEmail('I love you too'); setStep(16); } },
        { text: 'I am not sure', action: () => { sendEmail('I am not sure'); setStep(16); } }
      ],
      autoPlay: true
    },
    {
      image: 'https://imgs.search.brave.com/MbwU-0_9zzyBAOa3SEHnfyfbE53i_zBb08lc1HYA4fg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NmaXJlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/OS9zaGluY2hhbi1w/aG90b18zLTU1Nngx/MDI0LmpwZw',
      message: 'Dont worry muje responce mil gaya hai',
      buttons: [{ text: 'Ok', action: () => setStep(17) }],
      stopAudio: true
    },
    {
      image: 'https://imgs.search.brave.com/31XZcu_IHHIPfG-kAUq9MyTI3jn5iyLPPkdU_RtC0oU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3J1bm5pbmct/c2hpbmNoYW4tYWVz/dGhldGljLWZndGJw/Y251cXl1NnFmaHYu/d2VicA',
      message: 'Bye bye sakhii call krna !!',
      buttons: [{ text: 'Bye bye', action: () => setStep(18) }]
    },
    {
      image: 'https://imgs.search.brave.com/jP4a2mBxV7H4w2-s5Kz3AXP38zxaTF91m7ozrp3yQLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdXRp/ZWRwLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNy9j/dXRlLXNoaW5jaGFu/LWRwJUUyJTgwJThC/LTUwLndlYnA',
      message: '',
      buttons: [],
      imageOnly: true
    }
  ];

  const currentStep = steps[step];

  useEffect(() => {
    if (currentStep.autoPlay && audioRef.current) {
      audioRef.current.play();
      
      const handleAudioEnd = () => {
        if (currentStep.onAudioEnd) {
          currentStep.onAudioEnd();
        }
      };
      
      audioRef.current.addEventListener('ended', handleAudioEnd);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleAudioEnd);
        }
      };
    }
    
    if (currentStep.stopAudio && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [step, currentStep]);

  return (
    <div className="container">
      <img 
        src={currentStep.image} 
        alt="Profile" 
        className="profile-image"
        onClick={currentStep.autoPlay ? () => {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
          setStep(11);
        } : undefined}
        style={currentStep.autoPlay ? { cursor: 'pointer' } : {}}
      />
      {!currentStep.imageOnly && (
        <>
          <h1 className="message">{currentStep.message}</h1>
          {currentStep.subtitle && (
            <p className="subtitle">{currentStep.subtitle}</p>
          )}
          <div className="button-group">
            {currentStep.buttons.map((btn, index) => (
              <button key={index} onClick={btn.action} className="btn">
                {btn.text}
              </button>
            ))}
          </div>
        </>
      )}
      {currentStep.imageOnly && (
        <div className="button-group"></div>
      )}
      <audio ref={audioRef} src="/Kon hu _ Sabse pehle hai pyar    Slowed & Reverb  - Old goldz.mp3" />
    </div>
  );
}

export default App;
