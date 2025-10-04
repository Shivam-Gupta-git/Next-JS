import Image from "next/image";
import testingPicture from '@/public/testing.jpg'

export default function Home() {

  return (
   <div className="h-full w-[100%] bg-gray-500 flex flex-col items-center p-2">
    <div className="mt-5">
      <p className="text-3xl font-bold text-white">Our Team</p>
    </div>
    <div className="w-[50%] mt-5 flex flex-row flex-wrap items-center justify-around  p-2 gap-5">
      <div className="w-[200px] h-[200px] border rounded bg-blue-300 border-blue-300 shadow-sm shadow-gray-400">
       <div className="w-[100%] h-[50%]  flex items-center justify-center">
        <div className="h-[70px] w-[70px]  rounded-full bg-amber-100 flex items-center justify-center">
          {/* <p className="text-2xl font-bold text-blue-600">VM</p> */}
          <Image src="/testing.jpg" className="h-full w-full rounded-full object-center" width={500} height={500} alt="image"/>
        </div>
       </div>
       <div className="w-[100%] h-[50%]  flex flex-col items-center">
        <p className="text-[20px] font-bold text-gray-700">Shivam Gupta</p>
        <p className="text-gray-600 text-[13px]">Frontend Developer</p>
        <p className="text-gray-600 text-[13px]">React & Reactive Native</p>
       </div>
      </div>
      <div className="w-[200px] h-[200px] border rounded bg-blue-300 border-blue-300 shadow-sm shadow-gray-400">
      <div className="w-[100%] h-[50%]  flex items-center justify-center">
        <div className="h-[70px] w-[70px]  rounded-full bg-pink-100 flex items-center justify-center">
          <p className="text-2xl font-bold text-orange-600">VM</p>
        </div>
       </div>
       <div className="w-[100%] h-[50%]  flex flex-col items-center">
        <p className="text-[20px] font-bold text-gray-700">Raman Singh</p>
        <p className="text-gray-600 text-[13px]">Frontend Developer</p>
        <p className="text-gray-600 text-[13px]">React & Reactive Native</p>
       </div>
      </div>
      <div className="w-[200px] h-[200px] border rounded bg-blue-300 border-blue-300 shadow-sm shadow-gray-400">
      <div className="w-[100%] h-[50%]  flex items-center justify-center">
        <div className="h-[70px] w-[70px]  rounded-full bg-green-100 flex items-center justify-center">
          <p className="text-2xl font-bold text-yellow-600">VM</p>
        </div>
       </div>
       <div className="w-[100%] h-[50%]  flex flex-col items-center">
        <p className="text-[20px] font-bold text-gray-700">Pawan Sharma</p>
        <p className="text-gray-600 text-[13px]">Backend Developer</p>
        <p className="text-gray-600 text-[13px]">Java</p>
       </div>
      </div>
      <div className="w-[200px] h-[200px] border rounded bg-blue-300 border-blue-300 shadow-sm shadow-gray-400">
      <div className="w-[100%] h-[50%]  flex items-center justify-center">
        <div className="h-[70px] w-[70px]  rounded-full bg-blue-100 flex items-center justify-center">
          <p className="text-2xl font-bold text-gray-600">VM</p>
        </div>
       </div>
       <div className="w-[100%] h-[50%]  flex flex-col items-center">
        <p className="text-[20px] font-bold text-gray-700">Mohit Gupta</p>
        <p className="text-gray-600 text-[13px]">Frontend Developer</p>
        <p className="text-gray-600 text-[13px]">React & Reactive Native</p>
       </div>
      </div>
      <div className="w-[200px] h-[200px] border rounded bg-blue-300 border-blue-300 shadow-sm shadow-gray-400">
      <div className="w-[100%] h-[50%]  flex items-center justify-center">
        <div className="h-[70px] w-[70px]  rounded-full bg-amber-200 flex items-center justify-center">
          <p className="text-2xl font-bold text-pink-600">VM</p>
        </div>
       </div>
       <div className="w-[100%] h-[50%]  flex flex-col items-center">
        <p className="text-[20px] font-bold text-gray-700">Shubham Gupta</p>
        <p className="text-gray-600 text-[13px]">Frontend Developer</p>
        <p className="text-gray-600 text-[13px]">React & Reactive Native</p>
       </div>
      </div>
      <div className="w-[200px] h-[200px] border rounded bg-blue-300 border-blue-300 shadow-sm shadow-gray-400">
      <div className="w-[100%] h-[50%]  flex items-center justify-center">
        <div className="h-[70px] w-[70px]  rounded-full bg-purple-400 flex items-center justify-center">
          <p className="text-2xl font-bold text-cyan-700">VM</p>
        </div>
       </div>
       <div className="w-[100%] h-[50%]  flex flex-col items-center">
        <p className="text-[20px] font-bold text-gray-700">Ravi Kumar</p>
        <p className="text-gray-600 text-[13px]">Frontend Developer</p>
        <p className="text-gray-600 text-[13px]">React & Reactive Native</p>
       </div>
      </div>

      <div className="w-[200px] h-[200px] border rounded bg-blue-300 border-blue-300 shadow-sm shadow-gray-400">
       <div className="w-[100%] h-[100%] relative  flex items-center justify-center">
          <Image 
          src={testingPicture}
          alt="image"
          fill={true} 
          quality={100} 
          priority={false} 
          placeholder="blur"
          blurDataURL=""
          className="rounded object-center"  
          />
       </div>
      </div>
      <div className="w-[200px] h-[200px] border rounded bg-blue-300 border-blue-300 shadow-sm shadow-gray-400">
       <div className="w-[100%] h-[100%] relative  flex items-center justify-center">
          <Image 
          src={testingPicture}
          alt="image"
          fill={true} 
          quality={100} 
          priority={false} 
          placeholder="blur"
          blurDataURL=""
          className="rounded object-center"  
          />
       </div>
      </div>
      <div className="w-[200px] h-[200px] border rounded bg-blue-300 border-blue-300 shadow-sm shadow-gray-400">
       <div className="w-[100%] h-[100%] relative  flex items-center justify-center">
          <Image 
          src={testingPicture}
          alt="image"
          fill={true} 
          quality={100} 
          priority={false} 
          placeholder="blur"
          blurDataURL=""
          className="rounded object-center"  
          />
       </div>
      </div>

    </div>
   </div>
  );
}
