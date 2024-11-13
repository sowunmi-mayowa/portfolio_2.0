import * as Switch from '@radix-ui/react-switch';
import { useState, useEffect } from 'react';
const Swiitch = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev)
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

  return (
    <Switch.Root onClick={toggleDarkMode}
                checked={darkMode}
				className="relative h-[25px] w-[42px] cursor-default rounded-full bg-blackA6 shadow-[0_2px_10px] shadow-blackA4 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black bg-indigo-900 data-[state=checked]:bg-black"
				id="airplane-mode"
				style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
			>
				<Switch.Thumb className="block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
			</Switch.Root>
  )
}

export default Swiitch