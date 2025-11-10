import { useEffect, useState } from "react"
import { getAllPost } from "../services/posts"

export default function Post(){

    const [post,setPost] = useState([])
    const [page , setPage] = useState(1)
    const [totalPage , setTotalPage] = useState(1)

    // post kyna page eka load wenakotma apita post tika load krgnna one nam api use effect eka sue krnwa
    const fetchData = async (pageNumber = 1)=>{
        try{
            const data = await getAllPost(pageNumber,10)
            setPost(data?.data)
            setTotalPage(data?.totalPages)
            setPage(pageNumber)
            console.log(data)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(() =>{
        fetchData()
    },[])

    return (
  <div className="min-h-screen bg-[#dfdfdf] p-8">
    <h1 className="text-3xl font-bold text-center text-[#4A4A4A] mb-8">
      🐾 All Posts
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {post.map((p: any, index: number) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
        >
          {p?.imageURL && (
            <img
              src={p.imageURL}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
          )}

          <div className="p-4">
            <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">
              {p?.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{p?.content}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center items-center mt-8 space-x-4">
        <button
            onClick={() => fetchData(page - 1)}
            disabled={page === 1}
            className={`px-5 py-2 rounded-lg text-white font-semibold transition-colors ${
            page === 1
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
        >
            Prev
        </button>

        <div className="text-green-800 font-medium bg-green-100 px-4 py-2 rounded-lg shadow-inner">
            Page {page} of {totalPage}
        </div>

        <button
            onClick={() => fetchData(page + 1)}
            disabled={page === totalPage}
            className={`px-5 py-2 rounded-lg text-white font-semibold transition-colors ${
            page === totalPage
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
        >
            Next
        </button>
    </div>

  </div>
);

}