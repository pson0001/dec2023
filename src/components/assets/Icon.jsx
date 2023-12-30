import React from 'react'

const Icon = ({ children }) => {
  // render
  return <>{children}</>
}

export default Icon
Icon.ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#fff"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="18" y1="13" x2="12" y2="19" />
    <line x1="6" y1="13" x2="12" y2="19" />
  </svg>
)

Icon.External = () => (
  <svg
    aria-hidden="true"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#fff"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M10 4H6.46154C5.8087 4 5.1826 4.25934 4.72097 4.72097C4.25934 5.1826 4 5.8087 4 6.46154V17.5385C4 18.1913 4.25934 18.8174 4.72097 19.279C5.1826 19.7407 5.8087 20 6.46154 20H17.5385C18.1913 20 18.8174 19.7407 19.279 19.279C19.7407 18.8174 20 18.1913 20 17.5385V14"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M10 14L20 4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="m15 4h5v5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
)
Icon.ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#fff"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="13" y1="18" x2="19" y2="12" />
    <line x1="13" y1="6" x2="19" y2="12" />
  </svg>
)
Icon.Print = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M18.5 16H5.5V22H18.5V16Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 10H22V19H18.5086V16H5.49025V19H2V10Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 2H5V10H19V2Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Icon.Timer = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.334 22C16.7523 22 20.334 18.4183 20.334 14C20.334 9.58172 16.7523 6 12.334 6C7.91571 6 4.33398 9.58172 4.33398 14C4.33398 18.4183 7.91571 22 12.334 22Z"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <path
        d="M14.334 2H10.334"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.334 2V6"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.834 8L19.334 6.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.334 14V11"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.334 14H9.33398"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Icon.People = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M7.5 7C8.60457 7 9.5 6.10457 9.5 5C9.5 3.89543 8.60457 3 7.5 3C6.39543 3 5.5 3.89543 5.5 5C5.5 6.10457 6.39543 7 7.5 7Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 7C17.6046 7 18.5 6.10457 18.5 5C18.5 3.89543 17.6046 3 16.5 3C15.3954 3 14.5 3.89543 14.5 5C14.5 6.10457 15.3954 7 16.5 7Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10H10L9 21H6L5 10Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 10H19L18 21H15L14 10Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Icon.Computer = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M20 4H4V14H20V4Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 14L2 20.5H22L20 14"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.95 17.5H14.05L15 20.5H9L9.95 17.5Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Icon.Path = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.65 3H4.35C3.60441 3 3 3.60441 3 4.35V19.65C3 20.3956 3.60441 21 4.35 21H19.65C20.3956 21 21 20.3956 21 19.65V4.35C21 3.60441 20.3956 3 19.65 3Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 13.5L14.5 15"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 16.5L7 18"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14.5C9 13.0523 9.5 12.0523 9.5 11.5C9.5 10.6715 8.82845 10 8 10C7.17155 10 6.5 10.6715 6.5 11.5C6.5 12.0523 7 13.0523 8 14.5Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 11C17 9.5523 17.5 8.5523 17.5 8C17.5 7.17155 16.8285 6.5 16 6.5C15.1715 6.5 14.5 7.17155 14.5 8C14.5 8.5523 15 9.5523 16 11Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Icon.Sign = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M5 4V8H19L21 6L19 4H5Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 11.5V15.5H5L3 13.5L5 11.5H19Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5V22"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V11.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V4"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 22H14.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Icon.Layout = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path d="M24 0.5H0V24.5H24V0.5Z" fill="white" fillOpacity="0.01" />
        <path
          d="M11.5 2.5H2V13.5H11.5V2.5Z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M22 17.5H2V22H22V17.5Z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M22 2.5H15.5V6.49999H22V2.5Z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M22 9.5H15.5V13.5H22V9.5Z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

Icon.Dots = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M20 6C21.1046 6 22 5.10455 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10455 18.8954 6 20 6Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 6C5.10455 6 6 5.10455 6 4C6 2.89543 5.10455 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10455 2.89543 6 4 6Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 22C5.10455 22 6 21.1046 6 20C6 18.8954 5.10455 18 4 18C2.89543 18 2 18.8954 2 20C2 21.1046 2.89543 22 4 22Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 4H14"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8L8 16"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 10V14"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Icon.Page = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M20.5 2H3.5C2.67157 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67157 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M2 8.66699H22"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66602 22.0003V8.66699"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Icon.Color = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
      <path
        d="M12 22C14.9801 22 13.168 17.568 15 15.5C16.5632 13.7355 22 14.5428 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.5C14.8285 8.5 15.5 7.82845 15.5 7C15.5 6.17155 14.8285 5.5 14 5.5C13.1715 5.5 12.5 6.17155 12.5 7C12.5 7.82845 13.1715 8.5 14 8.5Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.5C8.82845 10.5 9.5 9.82845 9.5 9C9.5 8.17155 8.82845 7.5 8 7.5C7.17155 7.5 6.5 8.17155 6.5 9C6.5 9.82845 7.17155 10.5 8 10.5Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 17C9.32845 17 10 16.3285 10 15.5C10 14.6715 9.32845 14 8.5 14C7.67155 14 7 14.6715 7 15.5C7 16.3285 7.67155 17 8.5 17Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Icon.Link = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#FFFFFF"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
    <line x1="10" y1="14" x2="20" y2="4" />
    <polyline points="15 4 20 4 20 9" />
  </svg>
)

Icon.ArrowRightSmall = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-narrow-right"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#FFFFFF"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l14 0" />
    <path d="M15 16l4 -4" />
    <path d="M15 8l4 4" />
  </svg>
)
Icon.ArrowHandDraw = () => (
  <svg
    width="65"
    height="37"
    viewBox="0 0 65 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64.0918 1.80936C40.5125 -3.33475 24.441 17.5261 33.9783 22.615C45.6035 28.8178 58.4649 10.1768 42.4625 7.44513C19.6286 3.5473 6.4833 19.4396 6.4833 36.0523"
      stroke="black"
      strokeLinecap="round"
    />
    <path
      d="M2.99999 32.0869L6.5366 36.1131L10.5628 32.5765"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M64.0918 1.80936C40.5125 -3.33475 24.441 17.5261 33.9783 22.615C45.6035 28.8178 58.4649 10.1768 42.4625 7.44513C19.6286 3.5473 6.4833 19.4396 6.4833 36.0523"
      stroke="black"
      strokeLinecap="round"
    />
    <path
      d="M0.910614 29.708L6.53661 36.1129L12.9415 30.4869"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

Icon.ArrowRightSmall = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-narrow-right"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#FFFFFF"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l14 0" />
    <path d="M15 16l4 -4" />
    <path d="M15 8l4 4" />
  </svg>
)

Icon.Fragmentation = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2835_24662)">
      <path
        d="M6 14H9.896C13.722 14 17.306 15.866 19.5 19C20.5809 20.5442 22.0182 21.8049 23.6901 22.6753C25.362 23.5457 27.2191 24.0001 29.104 24H42"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 34H9.9C11.7837 34 13.6397 33.5455 15.3103 32.6751C16.9808 31.8046 18.4167 30.5439 19.496 29C20.5753 27.4561 22.0112 26.1954 23.6817 25.3249C25.3523 24.4545 27.2082 24 29.092 24H40"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36 30L42 24L36 18"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2835_24662">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
Icon.Personalisation = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2939_32616)">
      <path
        d="M41.91 22.2081C41.5711 18.8214 40.279 15.6003 38.1835 12.9183C36.0879 10.2363 33.275 8.20333 30.0708 7.05532C26.8667 5.9073 23.4028 5.69125 20.0808 6.43223C16.7589 7.1732 13.7151 8.84083 11.3026 11.2417C8.89004 13.6425 7.20763 16.6781 6.45051 19.9964C5.69339 23.3147 5.8926 26.7797 7.02502 29.9894C8.15744 33.199 10.1767 36.0218 12.8484 38.1304C15.5202 40.2389 18.7351 41.5467 22.1201 41.9021"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 20H18.02"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30 20H30.02"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 30C20.316 31.344 22.12 32 24 32C24.252 32 24.502 31.988 24.752 31.964"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.84 31.22C37.23 30.8299 37.6931 30.5205 38.2026 30.3095C38.7122 30.0984 39.2584 29.9897 39.81 29.9897C40.3616 29.9897 40.9078 30.0984 41.4174 30.3095C41.9269 30.5205 42.39 30.8299 42.78 31.22C43.17 31.61 43.4794 32.073 43.6905 32.5826C43.9016 33.0922 44.0102 33.6384 44.0102 34.19C44.0102 34.7415 43.9016 35.2877 43.6905 35.7973C43.4794 36.3069 43.17 36.7699 42.78 37.16L36 44H30V38L36.84 31.22Z"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2939_32616">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
Icon.Inefficiencies = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2939_32664)">
      <path
        d="M30 6H40V16"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40 6L24.928 21.072C23.0537 22.9468 22.0006 25.489 22 28.14V42"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 10L17 19"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2939_32664">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
Icon.Time = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2939_32610)">
      <path
        d="M10 26C10 27.8385 10.3621 29.659 11.0657 31.3576C11.7693 33.0561 12.8005 34.5995 14.1005 35.8995C15.4005 37.1995 16.9439 38.2307 18.6424 38.9343C20.341 39.6379 22.1615 40 24 40C25.8385 40 27.659 39.6379 29.3576 38.9343C31.0561 38.2307 32.5995 37.1995 33.8995 35.8995C35.1995 34.5995 36.2307 33.0561 36.9343 31.3576C37.6379 29.659 38 27.8385 38 26C38 24.1615 37.6379 22.341 36.9343 20.6424C36.2307 18.9439 35.1995 17.4005 33.8995 16.1005C32.5995 14.8005 31.0561 13.7693 29.3576 13.0657C27.659 12.3621 25.8385 12 24 12C22.1615 12 20.341 12.3621 18.6424 13.0657C16.9439 13.7693 15.4005 14.8005 14.1005 16.1005C12.8005 17.4005 11.7693 18.9439 11.0657 20.6424C10.3621 22.341 10 24.1615 10 26Z"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 20V26H28"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 8L8.5 12"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M34 8L39.5 12"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2939_32610">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
