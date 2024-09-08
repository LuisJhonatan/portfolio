import 'hamburgers/dist/hamburgers.css';

const HamburgerButton = ({isActive, toggleHamburger}) => {
    
  return (
    <button
      className={`relative hamburger z-50 hamburger--slider ${isActive ? 'is-active' : ''}`}
      type="button"
      onClick={toggleHamburger}
      >
        <span className="hamburger-box ">
          <span className="hamburger-inner bg-tertiary"></span>
        </span>
      </button>
  )
}

export default HamburgerButton