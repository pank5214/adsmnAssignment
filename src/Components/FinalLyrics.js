import React from "react";
import Header from "./Header";
import progressBarFour from "../utils/Images/progress bar4.png";

const FinalLyrics = () => {
  return (
    <>
      <Header />
      <div className="relative flex justify-center m-6">
        <div className="flex flex-col">
          <img
            className="m-2 w-5/6"
            src={progressBarFour}
            alt="progress-bar4"
          />
          <h1 className="text-white font-semibold text-2xl w-5/6 text-center mt-2">
            Your song's lyrics are ready!
          </h1>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-white border-2 h-[60vh] md:w-2/6 w-4/6 md:mr-12 rounded-3xl overflow-y-auto">
          <div className="m-4 p-2 text-left self-center">
            <span >
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aut saepe quisquam delectus repellendus cumque commodi voluptatem omnis voluptate! Maxime quod quae possimus iusto facere nihil asperiores velit expedita nisi vero libero veniam, sunt non ipsum debitis tempore consectetur, est impedit! Labore repellat optio est sint assumenda, quidem, perferendis adipisci excepturi porro ad cupiditate quibusdam praesentium corporis enim distinctio maxime nulla iusto, hic facere ipsam sapiente quia commodi vel temporibus. Impedit fuga voluptatem, possimus ea ipsam illum maxime esse. Unde consequuntur ex, mollitia quas explicabo nulla nisi quos illum modi temporibus blanditiis, iste magni assumenda itaque harum alias omnis ut beatae labore. Distinctio excepturi omnis atque dolore harum corporis. Nisi enim molestiae ex fuga voluptates mollitia accusantium aut repellat eum modi, unde labore ullam neque recusandae. Eius officiis eos aut, fugit asperiores adipisci hic nihil dicta reiciendis accusamus delectus debitis ab repellendus cum, architecto ea. Quod esse exercitationem vitae dolores vel reiciendis, ullam impedit temporibus praesentium unde ipsa deserunt quasi iste quis beatae ad, reprehenderit, dolor amet repellendus? Magnam quisquam unde iusto optio sint hic, blanditiis architecto dolorum temporibus aliquid facilis earum aspernatur ipsa quae nesciunt sed illum qui perspiciatis exercitationem error quas impedit quod dolore eos! Alias, culpa id.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalLyrics;
