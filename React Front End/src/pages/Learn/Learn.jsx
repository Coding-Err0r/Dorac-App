import BG1 from "../../assets/bg/bg1.png";
import BG2 from "../../assets/bg/bg2.png";
import BG3 from "../../assets/bg/bg3.png";
import BG4 from "../../assets/bg/bg4.png";
import BG5 from "../../assets/bg/bg5.png";
import BG from "../../assets/learn/bg.png";
import box1 from "../../assets/learn/box1.jpeg";
import box2 from "../../assets/learn/box2.jpeg";
import box3 from "../../assets/learn/box3.jpeg";
import box4 from "../../assets/learn/box4.jpeg";
import dog1 from "../../assets/learn/dog1.jpeg";
import dog2 from "../../assets/learn/dog2.jpeg";
import dog3 from "../../assets/learn/dog3.jpeg";
import man1 from "../../assets/learn/man1.jpeg";
import man2 from "../../assets/learn/man2.jpeg";
import man3 from "../../assets/learn/man3.jpeg";
import road1 from "../../assets/learn/road1.png";
import road2 from "../../assets/learn/road2.png";
import road3 from "../../assets/learn/road3.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./learn.css";




const Learn = () => {
  return (
    <div className="text-gray-200">
      <Navbar />
      <div className="w-full h-[70px]"></div>
      <div className="container mx-auto py-6 xl:py-20 px-6 2xl:px-16">
        <div
          className="h-[200px] flex items-center justify-center"
          style={{ backgroundImage: `url(${BG})` }}
        >
          <h1 className="title w-full text-center">LEARN</h1>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${BG1})` }}>
        <div className="container mx-auto px-6 2xl:px-16">
          <div className="row">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col justify-center">
                <h2 className="title2 mb-4">
                  Player game <span className="text-cyan-500">ID and Rep</span>
                </h2>
                <div className="text-gray-400">
                  <p className="simple-para">
                    Getting the player ID will be the main part if you want to
                    participate in play-to-earn game. ID NFT’s will be your
                    ticket to this metaverse space. It will play a big role in
                    how you interact with the game and how many things you can
                    do in it. ID NFT’s will come all unique with different
                    cosmetic traits.
                  </p>

                  <p className="simple-para">
                    ID’s will have one important stat on them which is going to
                    be REP (Reputation). Reputation will show the overall
                    strength of your ID, the higher the REP the more discounts
                    and the more actions you can take using this specific ID.
                  </p>
                  <p className="simple-para">
                    Discounts on metaverse, the higher the REP – less fees you
                    will have to pay for breeding, training and healing your
                    dog. Higher REP also means you will be able to buy building
                    upgrades and will determine if you can rent them out to
                    other players. Earning REP by interacting with metaverse,
                    winning in tournaments and races and getting positive
                    feedback from other players by helping them out or providing
                    cheaper services via utility facilities.
                  </p>
                  <p className="simple-para">
                    ID will be held on the player’s personal metamask or any
                    other wallet that will be able to connect to our platform.
                    You will be able to trade them in pur own marketplace.
                  </p>
                </div>
              </div>

              <div className="doges animation">
                <img src={man1} className="dog dog1" />
                <img src={man2} className="dog dog2" />
                <img src={man3} className="dog dog3" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="landing-icons mt-5 icon-responseive">
                <ul className="landing-ul">
                  <a target="_blank" href="https://t.me/DoRacOfficialchat">
                    <i className="fa-solid fa-paper-plane"></i>
                  </a>
                  <a target="_blank" href="https://twitter.com/DoRac_Official">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/DogeRaceOfficial"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/dorac_official/"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a target="_blank" href="https://discord.gg/vswdzWUVm8">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${BG2})` }}>
        <div className="container mx-auto px-6 2xl:px-16">
          <div className="grid  md:grid-cols-2 gap-10">
            <div className="">
              <img
                className="learn-image animation mt-5"
                src="./assets/img/6.png"
                alt=""
              />
              <div className="doges animation">
                <img src={dog1} className="dog dog1" />
                <img src={dog2} className="dog dog2" />
                <img src={dog3} className="dog dog3" />
              </div>
            </div>

            <div className="text-gray-300 leading-8 flex flex-col justify-center -mt-16">
              <h2 className="title2 mt-5 margin-left mb-4">
                DoRac <span className="text-cyan-500">Racing Dogs</span>
              </h2>
              <p className="simple-para2">
                Initially, the majority of our ecosystem will focus on racing
                dogs in the form of nfts. Dogs will be acquired through our
                pre-sale and main-sale events before launching our platform. You
                will be able to get your hands on them via giveaways and special
                promotional events so be sure to join our socials to get info on
                that. Another way of getting them would be using in game market
                place where you will be able to buy them from other players.
                Later down the road there will be more options added which I
                will not discuss at this time.
              </p>
              <p className="simple-para2">
                Our dogs will have few main traits on them , color will have
                only cosmetic aspect on it. There will be 4 key stats on the
                dogs:
              </p>
              <p className="my-4">
                <span className="text-gray-50 font-bold">Agility</span> – will
                determine your dog’s swiftness
              </p>
              <p className="my-4">
                <span className="text-gray-50 font-bold"> Stamina</span> – will
                determine your dog’s ability to participate in tournaments , if
                the stamina hits 0 your dog is not able to participate in any
                given tournament nor it can be trained, as it is simply
                exhausted
              </p>
              <p className="my-4">
                <span className="font-bold text-gray-100">Weight</span> –
                obviously will determine the weight of your dog.
              </p>
              <p className="my-4">
                <span className="font-bold text-gray-100">Luck </span> – will be
                the most important, this will be the only trait you cannot
                improve, it will be inherited from dogs parents. This stat will
                boost your dogs chance of successful training , wining
                tournaments , and not getting injured during tournaments and
                competitions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${BG3})` }}>
        <div className="container mx-auto px-6 2xl:px-16 xl:mt-12">
          <div className="">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="mb-5">
                  <span className="text-cyan-500">Facilites</span>
                </h2>
                <p className="text-gray-300">
                  Facilities will be structures that players will interact with.
                  At first there will be 3 facilities which will be meant
                  specific for dogs, these are Training grounds, Breeding
                  Houses, and Health Centers. Addition to these buildings there
                  will be Marketplace building , Utility Shops, Betting office,
                  and Arenas. Some other buildings will be added later down the
                  road. Every building in game will have two types. Public ones
                  and Private ones. Players will have free access to public
                  buildings, if there is free slots in them. Public buildings
                  however will ask a service cost from player for each action
                  they provide. Private ones will provide owners a way to breed,
                  train or heal their dogs whenever they want, and with no
                  action price. However there will be a some sort of property
                  tax that will need to be payed in order to use a building.
                </p>
              </div>

              <div className="fac-div">
                <img src={box1} className="fac-img1" />
                <img src={box2} className="fac-img2" />
                <img src={box3} className="fac-img3" />
                <img src={box4} className="fac-img4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12" style={{ backgroundImage: `url(${BG4})` }}>
        <div className="container mx-auto px-6 2xl:px-16 xl:mt-20">
          <p className="my-4">
            <span className="font-bold text-white"> Training grounds</span> – a
            place where players can improve their dogs attributes
          </p>
          <p className="my-4">
            <span className="font-bold text-white"> Medical Centers</span> –
            places where dogs can be healed if any trauma has been acquired.
          </p>
          <p className="my-4">
            <span className="font-bold text-white">Breeding House</span> – place
            where dog breeding will take place
          </p>
          <p className="my-4">
            <span className="font-bold text-white"> Utility Shops</span> –
            places where to buy consumables and stimulants. Consumables can be
            used to increase dogs training success rate for a set period of
            time. Stimulants will be items used to boost dogs performance during
            race. Which will be illegal action if caught doing so.
          </p>
          <p className="my-4">
            <span className="font-bold text-white"> Arenas</span> – places where
            tournaments take part. At special occasions there will be an option
            for a player to rent arenas , or if the REP is high the player will
            be able to buy and place his own arena and host tournaments in it.
          </p>
          <p className="my-4">
            <span className="font-bold text-white">Marketplace </span> – Place
            where players come to buy land lots , facilities and dogs.
            Marketplace will take a small tax on every transaction. On of the
            buildings that can be accessed without player ID nft
          </p>
          <p className="my-4">
            <span className="font-bold text-white"> Betting Station</span> –
            Obviously a place where people can place bets on races and
            tournaments. This will be the other building that can be accessed
            without player ID nft
          </p>
          <p className="my-4">
            Reaching high enough REP on Players ID NFT, will allow a player to
            buy land lots on metaverse, on which he/she will be able to build
            these facilities. Each facility will have 3 upgrade levels to it.
            Each upgrade will cost our native token (DORC), Each upgrade will
            decrease the time it takes for the chose action, decrease fee and
            increase success rate. Also increasing max slots on facility and
            slightly increasing tax on a building that needs to be payed in
            order to use a building.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="py-12" style={{ backgroundImage: `url(${BG5})` }}>
        <div className="container mx-auto px-6 2xl:px-16 xl:mt-20 my-6 text-center leading-10">
          <h2 className="title2 mt-5 align-center mb-4">
            <span className="font-bold text-cyan-500">Map and Land Lots</span>
          </h2>
          <div className="row">
            <p className="simple-para4">
              MAP of Metaverse is in the development stage and more details on
              how it looks will be shared on our social media.
            </p>
            <p className="simple-para4">
              As time goes on, and if more players join the metaverse MAP will
              be expanded, adding more land lots and facilities.
            </p>
            <p className="simple-para4">
              Land Lots – a place which will be put on auction or buy out option
              for players to be able to acquire, land lots will be places where
              players will be able to build their own facilities.
            </p>
          </div>
        </div>
        <div className="max-w-[800px] mx-auto px-6 2xl:px-16 xl:mt-20 text-center mt-6">
          <div className="">
            <p className="roadmap-title-p">Roadmap</p>
            <h2 className="text-cyan-500">HOW TO BUY?</h2>
            <br />
            <br />
            <div className="grid grid-cols-2 md:gap-6 xl:my-6">
              <div className="col-md-6">
                <div className="learn-roadmap">
                  <h5 className="just-border">1</h5>
                  <p>
                    Get{" "}
                    <a
                      className="text-blue-500 hover:text-blue-600"
                      href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                    >
                      Metamask for Chrome{" "}
                    </a>{" "}
                    , and{" "}
                    <a
                      className="text-blue-500 hover:text-blue-600"
                      href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
                    >
                      click here
                    </a>{" "}
                    on how to set it up to use it on Binance Smart Chain{" "}
                    <a
                      className="text-blue-500 hover:text-blue-600"
                      href="https://bscscan.com/token/0xa5d897a847eeb6f8c82273c3c4e5e6915eeb0c75"
                      target="_blank"
                    >
                      (BSC)
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="learn-img">
                  <img className="w-fit mx-auto" src={road1} />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="grid grid-cols-2 md:gap-6  xl:my-6">
              <div className="flex items-center">
                <div className="learn-img">
                  <img className="w-fit mx-auto" src={road2} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="learn-roadmap">
                  <h5 className="just-border">2</h5>
                  <p>Exchange on PancakeSwap.</p>
                </div>
              </div>
            </div>
            <br />
            <br />

            <div className="grid grid-cols-2 md:gap-6  xl:my-6">
              <div className="col-md-6">
                <div className="learn-roadmap">
                  <h5 className="just-border">3</h5>
                  <p><a className="text-blue-500 hover:text-blue-600" href="https://bscscan.com/token/0xa5d897a847eeb6f8c82273c3c4e5e6915eeb0c75" target="_blank">Binance Smart Chain Scan.</a></p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="learn-img">
                  <img className="w-fit mx-auto" src={road3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Learn;
