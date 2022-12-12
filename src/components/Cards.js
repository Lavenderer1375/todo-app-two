import Pic1 from '../assets/alex-haney-VQ5dNwiYXRg-unsplash.jpg';
import Pic2 from '../assets/alex-rhee-7aFVIa4NsD8-unsplash.jpg';
import Pic3 from '../assets/alex-suprun-A53o1drQS2k-unsplash.jpg';
import Pic4 from '../assets/andre-tan-lRrNccxrTfQ-unsplash.jpg';
import Pic5 from '../assets/artur-aldyrkhanov-_omYGHPwGEU-unsplash.jpg';
import Pic6 from '../assets/ayman-hallak-yVDQXUWpFq8-unsplash.jpg';

const Cards = () => {
  return (
    <div className="bg-stone-800 md:px-32 px-10 py-5 grid grid-flow-row md:grid-flow-col grid-rows-2 grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-indigo-400 text-lg font-semibold text-stone-200 rounded-3xl shadow-indigo-300 shadow-lg hover:cursor-pointer hover:translate-y-1 hover:shadow-none duration-200">
        <div className="p-5">
          <img className="rounded-lg shadow-lg shadow-stone-800" src={Pic1} alt="pic1" />
          <div>
            <ul>
              <li className="text-5xl py-2">Shoe</li>
              <li className="text-4xl py-2">Price: $112</li>
              <li>
                <p>
                  Cupidatat duis non est nostrud ex laboris cillum elit. In
                  cupidatat nulla consectetur eiusmod pariatur nisi enim Lorem
                  amet magna consectetur anim mollit ut.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-indigo-400 text-lg font-semibold text-stone-200 rounded-3xl shadow-indigo-300 shadow-lg hover:cursor-pointer hover:translate-y-1 hover:shadow-none duration-200">
        <div className="p-5">
          <img className="rounded-lg shadow-lg shadow-stone-800" src={Pic2} alt="pic1" />
          <div>
          <ul>
              <li className="text-5xl py-2">Shoe</li>
              <li className="text-4xl py-2">Price: $112</li>
              <li>
                <p>
                  Cupidatat duis non est nostrud ex laboris cillum elit. In
                  cupidatat nulla consectetur eiusmod pariatur nisi enim Lorem
                  amet magna consectetur anim mollit ut.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-indigo-400 text-lg font-semibold text-stone-200 rounded-3xl shadow-indigo-300 shadow-lg hover:cursor-pointer hover:translate-y-1 hover:shadow-none duration-200">
        <div className="p-5">
          <img className="rounded-lg shadow-lg shadow-stone-800" src={Pic3} alt="pic1" />
          <div>
          <ul>
              <li className="text-5xl py-2">Shoe</li>
              <li className="text-4xl py-2">Price: $112</li>
              <li>
                <p>
                  Cupidatat duis non est nostrud ex laboris cillum elit. In
                  cupidatat nulla consectetur eiusmod pariatur nisi enim Lorem
                  amet magna consectetur anim mollit ut.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-indigo-400 text-lg font-semibold text-stone-200 rounded-3xl shadow-indigo-300 shadow-lg hover:cursor-pointer hover:translate-y-1 hover:shadow-none duration-200">
        <div className="p-5">
          <img className="rounded-lg shadow-lg shadow-stone-800" src={Pic4} alt="pic1" />
          <div>
          <ul>
              <li className="text-5xl py-2">Shoe</li>
              <li className="text-4xl py-2">Price: $112</li>
              <li>
                <p>
                  Cupidatat duis non est nostrud ex laboris cillum elit. In
                  cupidatat nulla consectetur eiusmod pariatur nisi enim Lorem
                  amet magna consectetur anim mollit ut.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-indigo-400 text-lg font-semibold text-stone-200 rounded-3xl shadow-indigo-300 shadow-lg hover:cursor-pointer hover:translate-y-1 hover:shadow-none duration-200">
        <div className="p-5">
          <img className="rounded-lg shadow-lg shadow-stone-800" src={Pic5} alt="pic1" />
          <div>
          <ul>
              <li className="text-5xl py-2">Shoe</li>
              <li className="text-4xl py-2">Price: $112</li>
              <li>
                <p>
                  Cupidatat duis non est nostrud ex laboris cillum elit. In
                  cupidatat nulla consectetur eiusmod pariatur nisi enim Lorem
                  amet magna consectetur anim mollit ut.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-indigo-400 text-lg font-semibold text-stone-200 rounded-3xl shadow-indigo-300 shadow-lg hover:cursor-pointer hover:translate-y-1 hover:shadow-none duration-200">
        <div className="p-5">
          <img className="rounded-lg shadow-lg shadow-stone-800" src={Pic6} alt="pic1" />
          <div>
          <ul>
              <li className="text-5xl py-2">Shoe</li>
              <li className="text-4xl py-2">Price: $112</li>
              <li>
                <p>
                  Cupidatat duis non est nostrud ex laboris cillum elit. In
                  cupidatat nulla consectetur eiusmod pariatur nisi enim Lorem
                  amet magna consectetur anim mollit ut.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
