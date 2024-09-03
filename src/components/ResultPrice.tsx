type ResultPriceProps = {
  value:number
  title:string
}
const ResultPrice = ({value,title}:ResultPriceProps) => {
  return (
    <div className=" flex justify-between items-center">
      <div className="text-sm">
        <p className="text-white">{title}</p>
        <p className=" text-darkGrayishCyan">/ person</p>
      </div>
      <p className="text-2xl text-cyanStrong">${value}</p>
    </div>
  );
}

export default ResultPrice