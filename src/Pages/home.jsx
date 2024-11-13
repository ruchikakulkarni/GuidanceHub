import { Link } from "react-router-dom"

export function Home(){
    return(
        <>

        <div className="relative">
  <img
    src="/GuideHubHomePage.png"  // Path relative to public folder
    alt="GuideHub Home Page"
    className="w-full h-full object-cover"
  />
  <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
    GUIDANCE HUB
  </h1>
  <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-xl text-black">
    A PLATFORM CONNECTING SMI STUDENTS AND <br></br>FACULTIES TO CONNECT, SHARE & INSPIRE.
  </p>
</div>


<div className="inline-flex space-x-20 mt-20 mb-20">
  <div className="card w-80 h-96 shadow-xl">
    <figure>
      <img
        src="/DiscussionforumHP.png"
        alt="Discussionforum" />
    </figure>
    <div className="card-body flex items-center justify-center text-2xl font-bold">
      <h2 className="card-title font-bold">DISCUSSION FORUM</h2>
    </div>
  </div>

  <div className="card w-80 h-96 shadow-xl">
    <figure>
      <img
        src="/MentorshipHP.png"
        alt="MENTORSHIP" />
    </figure>
    <div className="card-body flex items-center justify-center text-2xl font-bold">
      <h2 className="card-title font-bold">MENTORSHIP</h2>
    </div>
  </div>

  <div className="card w-80 h-96 shadow-xl">
    <figure>
      <img
        src="/ResourcesHP.png"
        alt="Resources" />
    </figure>
    <div className="card-body flex items-center justify-center text-2xl font-bold">
      <h2 className="card-title font-bold">RESOURCES</h2>
    </div>
  </div>
</div>




<section className="relative bg-green-600 rounded-t-3xl p-10 flex items-center space-x-8 mt-10">
  {/* Left Side: Text */}
  <div className="text-left flex-1">
    <h2 className="text-3xl font-bold text-white mb-4">
      Stay on track and collaborate effortlessly with powerful management tools, progress tracking, and real-time messaging to help you reach your goals.
    
    </h2>

  </div>

  <div className="flex-1">
    <img
      src="/GreenHP.png"  
      alt="Illustration"
      className="w-full h-auto "
    />
  </div>
</section>

<div className="relative">
    <img
    src="/StartHP.png"
    className="w-full h-auto"
    />
    <h2 className="absolute inset-0 flex items-center text-left justify-center font-bold text-3xl">
    Excited to get<br></br> advice from<br></br> experienced<br></br> members?</h2>
    <button className="btn btn-wide absolute bottom-16 bg-red-500 text-white">Ask a query</button>
</div>



        </>
    )
}