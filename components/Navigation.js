import { ImStatsBars } from "react-icons/im";

function Nav() {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User information */}
        <div className="flex items-center gap-2">
          {/* img */}
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-6/370667972_6685413461480393_5914210041307643791_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=CFvWex7t844AX98A0Fr&_nc_oc=AQlX_n58i4osXEGu7SR4cDlQJjia1LIu-G50iLZMA_FQS7Gy08lNjq-l-cViHx15RYVJ_P77xUr6qOFnNE_biKWA&_nc_ht=scontent-itm1-1.xx&oh=00_AfBx5InSaIO3PVBz6pNS2tWAsQkg_pRErRqi3e2T43Fygw&oe=65A39493"
              alt="Profile image"
            />
          </div>

          {/* name */}
          <small>Hi, Fede/Chiharu!</small>
        </div>

        {/* Right side of our navigation */}
        <nav className="flex items-center gap-4">
          <div>
            <a href="#stats">
              <ImStatsBars className="text-2xl" />
            </a>
          </div>
          <div>
            <button className="btn btn-danger">Sign out | No need </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
