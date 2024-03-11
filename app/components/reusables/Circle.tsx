export default function Circle({ isBlack }: {isBlack: boolean}) {
  if(isBlack) {
    return <div className="w-10 h-10 rounded-full bg-text"></div>
  } 

  return <div className="w-10 h-10 rounded-full bg-lightGray"></div>
}