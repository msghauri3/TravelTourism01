import Video from "../elements/video"

const MySection = ({ data }) => {
  return (
    <section className="container flex flex-col align-middle text-center pt-12 pb-16">
      <h2 className="title mb-6">Title : {data.title}</h2>
      <p className="text-lg mb-10">{data.detail}</p>
      <p className="text-xl mb-6">{data.picture}</p>
      {/* Video wrapper */}
      <div className="w-full lg:w-9/12 mx-auto overflow-hidden shadow-2xl">
      
      </div>
    </section>
  )
}

export default MySection
