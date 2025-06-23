// import React from 'react';
// import IonIcon from '@reacticons/ionicons';
import {FaBold} from 'react-icons/fa';
const EditorToolbar = () => {

  return (
    // Main container now uses DaisyUI's `card` and theme-aware background/border
    <div className="card w-full border border-base-300 rounded-box bg-base-100 shadow-xl">
      {/* Toolbar header section */}
      <div className="px-3 py-2 border-b border-base-300">
        <div className="flex flex-wrap items-center">
          <div className="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">

            {/* Bold Button */}
            <div className="tooltip tooltip-bottom" data-tip="Toggle bold">
              <button
                id="toggleBoldButton"
                type="button"
                className="btn btn-ghost btn-sm btn-square" // DaisyUI button styles
              >
                <FaBold className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Bold</span>
              </button>
            </div>

            {/* Italic Button */}
            <div className="tooltip tooltip-bottom" data-tip="Toggle italic">
              <button
                id="toggleItalicButton"
                type="button"
                className="btn btn-ghost btn-sm btn-square" // DaisyUI button styles
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"
                  />
                </svg>
                <span className="sr-only">Italic</span>
              </button>
            </div>

            {/* Underline Button */}
            <div className="tooltip tooltip-bottom" data-tip="Toggle underline">
              <button
                id="toggleUnderlineButton"
                type="button"
                className="btn btn-ghost btn-sm btn-square" // DaisyUI button styles
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"
                  />
                </svg>
                <span className="sr-only">Underline</span>
              </button>
            </div>

            {/* Strike Button */}
            <div className="tooltip tooltip-bottom" data-tip="Toggle strike">
              <button
                id="toggleStrikeButton"
                type="button"
                className="btn btn-ghost btn-sm btn-square" // DaisyUI button styles
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"
                  />
                </svg>
                <span className="sr-only">Strike</span>
              </button>
            </div>

            {/* Subscript Button */}
            <div className="tooltip tooltip-bottom" data-tip="Toggle subscript">
              <button
                id="toggleSubscriptButton"
                type="button"
                className="btn btn-ghost btn-sm btn-square" // DaisyUI button styles
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.9999 21h-4v-.5c1.0989-1.0329 3.75-2.5 3.75-3.5v-1.0001c0-.5523-.4477-.9999-1-.9999h-1.75c-.5523 0-1 .4477-1 1M3.99986 6l9.26894 11.5765M13.1219 6 3.85303 17.5765"
                  />
                </svg>
                <span className="sr-only">Subscript</span>
              </button>
            </div>

            {/* Superscript Button */}
            <div className="tooltip tooltip-bottom" data-tip="Toggle superscript">
              <button
                id="toggleSuperscriptButton"
                type="button"
                className="btn btn-ghost btn-sm btn-square" // DaisyUI button styles
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21.0002 11h-4l-.0001-.5C18.099 9.46711 20.7502 8 20.7502 7V5.99989c0-.55228-.4478-.99989-1-.99989h-1.75c-.5523 0-1 .44772-1 1M5.37837 7.98274 14.6473 19.5593m-.5251-11.25583L4.85547 19.8773"
                  />
                </svg>
                <span className="sr-only">Superscript</span>
              </button>
            </div>

            {/* Highlight Button */}
            <div className="tooltip tooltip-bottom" data-tip="Toggle highlight">
              <button
                id="toggleHighlightButton"
                type="button"
                className="btn btn-ghost btn-sm btn-square" // DaisyUI button styles
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M9 19.2H5.5c-.3 0-.5-.2-.5-.5V16c0-.2.2-.4.5-.4h13c.3 0 .5.2.5.4v2.7c0 .3-.2.5-.5.5H18m-6-1 1.4 1.8h.2l1.4-1.7m-7-5.4L12 4c0-.1 0-.1 0 0l4 8.8m-6-2.7h4m-7 2.7h2.5m5 0H17"
                  />
                </svg>
                <span className="sr-only">Highlight</span>
              </button>
            </div>

            {/* Code Button */}
            <div className="tooltip tooltip-bottom" data-tip="Format code">
              <button
                id="toggleCodeButton"
                type="button"
                className="btn btn-ghost btn-sm btn-square" // DaisyUI button styles
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                  />
                </svg>
                <span className="sr-only">Code</span>
              </button>
            </div>

            {/* Text Size Dropdown */}
            <div className="dropdown dropdown-end"> {/* DaisyUI dropdown container */}
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-square m-1" id="toggleTextSizeButton">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"
                  />
                </svg>
                <span className="sr-only">Text size</span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-72 menu" // DaisyUI menu for dropdown
                id="textSizeDropdown"
                aria-labelledby="toggleTextSizeButton"
              >
                <li>
                  <button
                    data-text-size="16px"
                    type="button"
                    className="w-full text-base"
                  >
                    16px (Default)
                  </button>
                </li>
                <li>
                  <button
                    data-text-size="12px"
                    type="button"
                    className="w-full text-xs"
                  >
                    12px (Tiny)
                  </button>
                </li>
                <li>
                  <button
                    data-text-size="14px"
                    type="button"
                    className="w-full text-sm"
                  >
                    14px (Small)
                  </button>
                </li>
                <li>
                  <button
                    data-text-size="18px"
                    type="button"
                    className="w-full text-lg"
                  >
                    18px (Lead)
                  </button>
                </li>
                <li>
                  <button
                    data-text-size="24px"
                    type="button"
                    className="w-full text-2xl"
                  >
                    24px (Large)
                  </button>
                </li>
                <li>
                  <button
                    data-text-size="36px"
                    type="button"
                    className="w-full text-4xl"
                  >
                    36px (Huge)
                  </button>
                </li>
              </ul>
            </div>

            {/* Text Color Dropdown */}
            <div className="dropdown dropdown-end"> {/* DaisyUI dropdown container */}
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-square m-1" id="toggleTextColorButton">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={24}
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="m6.532 15.982 1.573-4m-1.573 4h-1.1m1.1 0h1.65m-.077-4 2.725-6.93a.11.11 0 0 1 .204 0l2.725 6.93m-5.654 0H8.1m.006 0h5.654m0 0 .617 1.569m5.11 4.453c0 1.102-.854 1.996-1.908 1.996-1.053 0-1.907-.894-1.907-1.996 0-1.103 1.907-4.128 1.907-4.128s1.909 3.025 1.909 4.128Z"
                  />
                </svg>
                <span className="sr-only">Text color</span>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-48"
                id="textColorDropdown"
              >
                <div className="grid grid-cols-6 gap-2 group mb-3 items-center p-1.5 rounded-lg hover:bg-base-200"> {/* DaisyUI bg-base-200 for hover */}
                  <input
                    type="color"
                    id="color"
                    defaultValue="#e66465"
                    // DaisyUI input styles, bg-base-100, border-base-300 for themed colors
                    className="input input-bordered w-full h-8 col-span-3 rounded-md"
                  />
                  <label
                    htmlFor="color"
                    className="text-base-content text-sm font-medium col-span-3 group-hover:text-base-content" // DaisyUI text color
                  >
                    Pick a color
                  </label>
                </div>
                <div className="grid grid-cols-6 gap-1 mb-3">
                  {/* Color swatch buttons - retained original styling as no direct DaisyUI equivalent */}
                  <button type="button" data-hex-color="#1A56DB" style={{ backgroundColor: "#1A56DB" }} className="w-6 h-6 rounded-md"><span className="sr-only">Blue</span></button>
                  <button type="button" data-hex-color="#0E9F6E" style={{ backgroundColor: "#0E9F6E" }} className="w-6 h-6 rounded-md"><span className="sr-only">Green</span></button>
                  <button type="button" data-hex-color="#FACA15" style={{ backgroundColor: "#FACA15" }} className="w-6 h-6 rounded-md"><span className="sr-only">Yellow</span></button>
                  <button type="button" data-hex-color="#F05252" style={{ backgroundColor: "#F05252" }} className="w-6 h-6 rounded-md"><span className="sr-only">Red</span></button>
                  <button type="button" data-hex-color="#FF8A4C" style={{ backgroundColor: "#FF8A4C" }} className="w-6 h-6 rounded-md"><span className="sr-only">Orange</span></button>
                  <button type="button" data-hex-color="#0694A2" style={{ backgroundColor: "#0694A2" }} className="w-6 h-6 rounded-md"><span className="sr-only">Teal</span></button>
                  <button type="button" data-hex-color="#B4C6FC" style={{ backgroundColor: "#B4C6FC" }} className="w-6 h-6 rounded-md"><span className="sr-only">Light indigo</span></button>
                  <button type="button" data-hex-color="#8DA2FB" style={{ backgroundColor: "#8DA2FB" }} className="w-6 h-6 rounded-md"><span className="sr-only">Indigo</span></button>
                  <button type="button" data-hex-color="#5145CD" style={{ backgroundColor: "#5145CD" }} className="w-6 h-6 rounded-md"><span className="sr-only">Purple</span></button>
                  <button type="button" data-hex-color="#771D1D" style={{ backgroundColor: "#771D1D" }} className="w-6 h-6 rounded-md"><span className="sr-only">Brown</span></button>
                  <button type="button" data-hex-color="#FCD9BD" style={{ backgroundColor: "#FCD9BD" }} className="w-6 h-6 rounded-md"><span className="sr-only">Light orange</span></button>
                  <button type="button" data-hex-color="#99154B" style={{ backgroundColor: "#99154B" }} className="w-6 h-6 rounded-md"><span className="sr-only">Bordo</span></button>
                  <button type="button" data-hex-color="#7E3AF2" style={{ backgroundColor: "#7E3AF2" }} className="w-6 h-6 rounded-md"><span className="sr-only">Dark Purple</span></button>
                  <button type="button" data-hex-color="#CABFFD" style={{ backgroundColor: "#CABFFD" }} className="w-6 h-6 rounded-md"><span className="sr-only">Light</span></button>
                  <button type="button" data-hex-color="#D61F69" style={{ backgroundColor: "#D61F69" }} className="w-6 h-6 rounded-md"><span className="sr-only">Dark Pink</span></button>
                  <button type="button" data-hex-color="#F8B4D9" style={{ backgroundColor: "#F8B4D9" }} className="w-6 h-6 rounded-md"><span className="sr-only">Pink</span></button>
                  <button type="button" data-hex-color="#F6C196" style={{ backgroundColor: "#F6C196" }} className="w-6 h-6 rounded-md"><span className="sr-only">Cream</span></button>
                  <button type="button" data-hex-color="#A4CAFE" style={{ backgroundColor: "#A4CAFE" }} className="w-6 h-6 rounded-md"><span className="sr-only">Light Blue</span></button>
                  <button type="button" data-hex-color="#5145CD" style={{ backgroundColor: "#5145CD" }} className="w-6 h-6 rounded-md"><span className="sr-only">Dark Blue</span></button>
                  <button type="button" data-hex-color="#B43403" style={{ backgroundColor: "#B43403" }} className="w-6 h-6 rounded-md"><span className="sr-only">Orange Brown</span></button>
                  <button type="button" data-hex-color="#FCE96A" style={{ backgroundColor: "#FCE96A" }} className="w-6 h-6 rounded-md"><span className="sr-only">Light Yellow</span></button>
                  <button type="button" data-hex-color="#1E429F" style={{ backgroundColor: "#1E429F" }} className="w-6 h-6 rounded-md"><span className="sr-only">Navy Blue</span></button>
                  <button type="button" data-hex-color="#768FFD" style={{ backgroundColor: "#768FFD" }} className="w-6 h-6 rounded-md"><span className="sr-only">Light Purple</span></button>
                  <button type="button" data-hex-color="#BCF0DA" style={{ backgroundColor: "#BCF0DA" }} className="w-6 h-6 rounded-md"><span className="sr-only">Light Green</span></button>
                  <button type="button" data-hex-color="#EBF5FF" style={{ backgroundColor: "#EBF5FF" }} className="w-6 h-6 rounded-md"><span className="sr-only">Sky Blue</span></button>
                  <button type="button" data-hex-color="#16BDCA" style={{ backgroundColor: "#16BDCA" }} className="w-6 h-6 rounded-md"><span className="sr-only">Cyan</span></button>
                  <button type="button" data-hex-color="#E74694" style={{ backgroundColor: "#E74694" }} className="w-6 h-6 rounded-md"><span className="sr-only">Pink</span></button>
                  <button type="button" data-hex-color="#83B0ED" style={{ backgroundColor: "#83B0ED" }} className="w-6 h-6 rounded-md"><span className="sr-only">Darker Sky Blue</span></button>
                  <button type="button" data-hex-color="#03543F" style={{ backgroundColor: "#03543F" }} className="w-6 h-6 rounded-md"><span className="sr-only">Forest Green</span></button>
                  <button type="button" data-hex-color="#111928" style={{ backgroundColor: "#111928" }} className="w-6 h-6 rounded-md"><span className="sr-only">Black</span></button>
                  <button type="button" data-hex-color="#4B5563" style={{ backgroundColor: "#4B5563" }} className="w-6 h-6 rounded-md"><span className="sr-only">Stone</span></button>
                  <button type="button" data-hex-color="#6B7280" style={{ backgroundColor: "#6B7280" }} className="w-6 h-6 rounded-md"><span className="sr-only">Gray</span></button>
                  <button type="button" data-hex-color="#D1D5DB" style={{ backgroundColor: "#D1D5DB" }} className="w-6 h-6 rounded-md"><span className="sr-only">Light Gray</span></button>
                  <button type="button" data-hex-color="#F3F4F6" style={{ backgroundColor: "#F3F4F6" }} className="w-6 h-6 rounded-md"><span className="sr-only">Cloud Gray</span></button>
                  <button type="button" data-hex-color="#F3F4F6" style={{ backgroundColor: "#F3F4F6" }} className="w-6 h-6 rounded-md"><span className="sr-only">Cloud Gray</span></button>
                  <button type="button" data-hex-color="#F9FAFB" style={{ backgroundColor: "#F9FAFB" }} className="w-6 h-6 rounded-md"><span className="sr-only">Heaven Gray</span></button>
                </div>
                <button
                  type="button"
                  id="reset-color"
                  className="btn btn-block btn-sm btn-outline text-base-content" // DaisyUI button styles
                >
                  Reset color
                </button>
              </div>
            </div>

            {/* Font Family Dropdown */}
            <div className="dropdown dropdown-end"> {/* DaisyUI dropdown container */}
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-square m-1" id="toggleFontFamilyButton">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m10.6 19 4.298-10.93a.11.11 0 0 1 .204 0L19.4 19m-8.8 0H9.5m1.1 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.985h4.4M3.021 16l1.567-3.985m0 0L7.32 5.07a.11.11 0 0 1 .205 0l2.503 6.945h-5.44Z"
                  />
                </svg>
                <span className="sr-only">Font family</span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-48 menu" // DaisyUI menu for dropdown
                id="fontFamilyDropdown"
                aria-labelledby="toggleFontFamilyButton"
              >
                <li>
                  <button
                    data-font-family="Inter, ui-sans-serif"
                    type="button"
                    className="w-full font-sans"
                  >
                    Default
                  </button>
                </li>
                <li>
                  <button
                    data-font-family="Arial, sans-serif"
                    type="button"
                    className="w-full"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    Arial
                  </button>
                </li>
                <li>
                  <button
                    data-font-family="'Courier New', monospace"
                    type="button"
                    className="w-full"
                    style={{ fontFamily: '"Courier New", monospace' }}
                  >
                    Courier New
                  </button>
                </li>
                <li>
                  <button
                    data-font-family="Georgia, serif"
                    type="button"
                    className="w-full"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Georgia
                  </button>
                </li>
                <li>
                  <button
                    data-font-family="'Lucida Sans Unicode', sans-serif"
                    type="button"
                    className="w-full"
                    style={{ fontFamily: '"Lucida Sans Unicode", sans-serif' }}
                  >
                    Lucida Sans Unicode
                  </button>
                </li>
                <li>
                  <button
                    data-font-family="Tahoma, sans-serif"
                    type="button"
                    className="w-full"
                    style={{ fontFamily: "Tahoma, sans-serif" }}
                  >
                    Tahoma
                  </button>
                </li>
                <li>
                  <button
                    data-font-family="'Times New Roman', serif;"
                    type="button"
                    className="w-full"
                    style={{ fontFamily: '"Times New Roman", serif' }}
                  >
                    Times New Roman
                  </button>
                </li>
                <li>
                  <button
                    data-font-family="'Trebuchet MS', sans-serif"
                    type="button"
                    className="w-full"
                    style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
                  >
                    Trebuchet MS
                  </button>
                </li>
                <li>
                  <button
                    data-font-family="Verdana, sans-serif"
                    type="button"
                    className="w-full"
                    style={{ fontFamily: "Verdana, sans-serif" }}
                  >
                    Verdana
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Editor content area */}
      <div className="p-4 bg-base-100 rounded-b-box"> {/* DaisyUI base-100 for background, rounded-b-box for bottom rounding */}
        <label htmlFor="wysiwyg-text-example" className="sr-only">
          Write comment
        </label>
        <div
          id="wysiwyg-text-example"
          // Using DaisyUI's textarea styling, which adapts to themes
          className="textarea w-full px-0 text-base-content bg-transparent border-0 focus:ring-0 placeholder:text-base-content/60"
        />
      </div>
    </div>
  );
};

export default EditorToolbar;
