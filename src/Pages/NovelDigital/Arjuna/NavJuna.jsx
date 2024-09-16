import { useEffect, useState } from 'react';

function NavJuna() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
      setIsActive(!isActive);
  };

  useEffect(() => {
      const handleScroll = () => {
          const header = document.querySelector('header');
          if (header) {
              header.classList.toggle('sticky', window.scrollY > 0);
          }

          if (isActive) {
              setIsActive(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [isActive]);

  return(
    <>
     <header>
                <div className="container-nav">
                    <nav>
                        <div className="logo">
                            <h1>NvL CerpenVerse</h1>
                        </div>

                        <div className={`links-menu ${isActive ? 'active' : ''}`}>
                            <a href="#">Blog</a>
                            <a href="#">About Me</a>
                            <a href="#">Contact Us</a>
                        </div>

                        <div className="hamburger">
                            <i className="button ai-three-line-horizontal" onClick={toggleActive}></i>
                        </div>
                    </nav>
                </div>
            </header>
    </>
  )
}

export default NavJuna
