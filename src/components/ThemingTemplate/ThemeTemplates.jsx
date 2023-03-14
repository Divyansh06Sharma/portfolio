import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { BsMoonStars, BsFillSunFill, BsXLg } from 'react-icons/bs'

import "../../utils/templateColors.scss"
import "./themetemplate.scss"
import { useGlobalContext } from '../../hooks/contextAPI.jsx'
// import { useGlobalContext} from '../../hooks/contextAPI'

const ThemeTemplates = () => {
  const {
    changeTemp,
    setChangeTemp,
    handleTemp,
    istemplateopen,
    setIsTemplate,
    closeTemplate,
    openTemplate,
    colorTheme,
    handleTheme,
    // openTemplate,
    //   closeTemplate,
    //   handleTemp,
    //   handleTheme,
    //   setIstemplateOpen,
    //   colorTheme,
    //   istemplateopen,
    //   changeTemp
  } = useGlobalContext()
  return (
    <>
      {/* {Fisetting wrapper} */}
      <div className='theme-icon-wrapper' onClick={openTemplate}>
        <FiSettings className='theme-icon switch__color' />
      </div>

      {/* {Theme wrapper} */}
      <div className={`${istemplateopen ? "theme-wrapper show-template" : "theme-wrapper"}`}   >
        {/* {theme header}  */}
        <div className='theme-header'>
          <span> Theme Templates </span>
          <span>
            <BsXLg className="close-template switch__color "
              onClick={closeTemplate} />
          </span>
        </div>

        {/* {mode} */}
        <div className="mode">
          <div className= {`${colorTheme === "light-mode" ? 'active-mode' : ''}`}
           onClick={() => handleTheme("light-mode ")}>
            <BsMoonStars className="switch__color icon" />
          </div>

          <div className= {`${colorTheme === "dark-mode" ? 'active-mode' : ''}`}
           onClick={() => handleTheme("dark-mode")} >
            <BsFillSunFill className="switch__color icon" />
          </div>
        </div>

        {/* Template Wrapper */}
        <div className='template-wrapper'>
          {/* Template 1 wrapper  */}
          <div onClick={() => handleTemp("template-1")} className={`template ${changeTemp === "template-1" ? "switch__border-color"
            : ''}`}>
            <div className='template-1'></div>
          </div>
          {/* Template 2 wrapper  */}
          <div onClick={() => handleTemp("template-2")} className={`template ${changeTemp === "template-2" ? "switch__border-color"
            : ''}`}>
            <div className='template-2'></div>
          </div>
          {/* Template 3 wrapper  */}
          <div onClick={() => handleTemp("template-3")} className={`template ${changeTemp === "template-3" ? "switch__border-color"
            : ''}`}>
            <div className='template-3'></div>
          </div>
          {/* Template 4 wrapper  */}
          <div onClick={() => handleTemp("template-4")} className={`template ${changeTemp === "template-4" ? "switch__border-color"
            : ''}`}>
            <div className='template-4'></div>
          </div>
          {/* Template 5 wrapper  */}
          <div onClick={() => handleTemp("template-5")} className={`template ${changeTemp === "template-5" ? "switch__border-color"
            : ''}`}>
            <div className='template-5'></div>
          </div>
          {/* Template 6 wrapper  */}
          <div onClick={() => handleTemp("template-6")} className={`template ${changeTemp === "template-6" ? "switch__border-color"
            : ''}`}>
            <div className='template-6'></div>
          </div>
          {/* Template 7 wrapper  */}
          <div onClick={() => handleTemp("template-7")} className={`template ${changeTemp === "template-7" ? "switch__border-color"
            : ''}`}>
            <div className='template-7'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThemeTemplates