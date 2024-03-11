export default function Circle({ isBlack }: {isBlack: boolean}) {
  if(isBlack) {
    return <div className="w-6 h-6 rounded-full md:w-10 md:h-10 bg-text"></div>
  } 

  return <div className="w-6 h-6 rounded-full md:w-10 md:h-10 bg-lightGray"></div>
}