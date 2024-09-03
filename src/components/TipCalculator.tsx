"use client";
import Image from "next/image";
import Button from "./Button";
import Input from "./Input";
import ResultPrice from "./ResultPrice";
import { useEffect, useState } from "react";
import Error from "./Error";

const TipCalculator = () => {
  const [inputData, setInputData] = useState({
    bill: 0,
    customTip: 0,
    numberOfPeople: 1,
  });

  const [result, setResult] = useState({
    tipAmount: 0,
    total: 0,
  });

  const [selectedTip, setSelectedTip] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<number | null>(null);
  const [isDisable, setIsDisabled] = useState(true);
  const [InputError, setInputError] = useState<boolean | null>(false);

  const handleClick = (value: number) => {
    setSelectedTip(value);
    setInputData((prev) => ({ ...prev, customTip: 0 }));
    setIsDisabled(false);
    setIsClicked(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    if (e.target.id === "bill") {
      setInputData((prev) => ({ ...prev, bill: Number(e.target.value) }));
      setIsDisabled(false);
    } else if (e.target.id === "customTip") {
      setInputData((prev) => ({ ...prev, customTip: Number(e.target.value) }));
      setIsDisabled(false);
      setSelectedTip(0);
      setIsClicked(null);
    } else if (e.target.id === "numberOfPeople") {
      setInputData((prev) => ({
        ...prev,
        numberOfPeople: Number(e.target.value),
      }));
      setIsDisabled(false);
      if (Number(e.target.value) === 0) {
        setInputError(true);
      } else if (Number(e.target.value) < 0) {
        setInputError(true);
      } else {
        setInputError(false);
      }
    }
  };

  const calculate = () => {
    const { bill, customTip, numberOfPeople } = inputData;
    if (bill > 0 && numberOfPeople > 0 && selectedTip > 0) {
      setResult((prev) => ({
        ...prev,
        tipAmount: (bill * (selectedTip / 100)) / numberOfPeople,
      }));
      setResult((prev) => ({
        ...prev,
        total: (bill * (1 + selectedTip / 100)) / numberOfPeople,
      }));
    } else if (bill > 0 && numberOfPeople > 0 && customTip > 0) {
      setResult((prev) => ({
        ...prev,
        tipAmount: (bill * (customTip / 100)) / numberOfPeople,
      }));
      setResult((prev) => ({
        ...prev,
        total: (bill * (1 + customTip / 100)) / numberOfPeople,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        tipAmount: 0,
      }));
      setResult((prev) => ({
        ...prev,
        total: 0,
      }));
    }
  };

  const handleReset = () => {
    setInputData({
      bill: 0,
      customTip: 0,
      numberOfPeople: 1,
    });
    setResult({
      tipAmount: 0,
      total: 0,
    });
    setSelectedTip(0);
    setIsClicked(0);
    setIsDisabled(true);
  };

  useEffect(() => {
    calculate();
  }, [
    inputData.bill,
    inputData.customTip,
    inputData.numberOfPeople,
    selectedTip,
    result.tipAmount,
    result.total,
  ]);

  const tipValues = [5, 10, 15, 25, 50];

  return (
    <div className="bg-white flex flex-col md:flex-row gap-10 md:gap-6 md:max-w-[720px] xl:min-w-[920px] p-8 rounded-t-xl">
      {/* Input Section */}
      <div className="md:flex-1">
        <div className="flex flex-col gap-2">
          <p className="text-darkGrayishCyan text-sm font-thin">Bill</p>

          <div className="relative w-full">
            <Image
              src={"/icon-dollar.svg"}
              alt=""
              width={11}
              height={17}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <Input
              id="bill"
              value={inputData.bill}
              className="bg-[#DAEEFA]  px-4 py-2 w-full text-end text-veryDarkCyan rounded-lg"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 py-8">
          <p className="text-darkGrayishCyan text-sm font-thin">Select Tip %</p>

          {/* Container Button */}
          <div className="grid grid-cols-2 gap-4">
            {tipValues.map((value) => (
              <Button
                key={value}
                value={value}
                handleClick={(e) => handleClick(value)}
                isClicked={isClicked}
              />
            ))}
            <Input
              id="customTip"
              value={inputData.customTip}
              className="bg-[#DAEEFA] text-center  text-veryDarkCyan  px-4 py-2 rounded-lg"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-darkGrayishCyan text-sm font-thin">
              Number of People
            </p>
            <Error data={inputData.numberOfPeople} />
          </div>
          <div className="relative w-full ">
            <Image
              src={"/icon-person.svg"}
              alt=""
              width={13}
              height={16}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <Input
              id="numberOfPeople"
              value={inputData.numberOfPeople}
              className="bg-[#DAEEFA] px-4 py-2 w-full text-end text-veryDarkCyan rounded-lg"
              onChange={(e) => handleChange(e)}
              inputError={InputError}
            />
          </div>
        </div>
      </div>

      {/* Result Section */}
      <div className="bg-veryDarkCyan flex flex-col  md:flex-1 gap-6 px-6 pt-8 pb-6 rounded-lg">
        <ResultPrice
          title="Tip Amount"
          value={Number(result.tipAmount.toFixed(4))}
        />
        <ResultPrice title="Total" value={Number(result.total.toFixed(4))} />
        <Button
          value={"RESET"}
          className="bg-cyanStrong hover:bg-lightGrayishCyan text-veryDarkCyan md:mt-36"
          handleClick={handleReset}
          isDisable={isDisable}
        />
      </div>
    </div>
  );
};
export default TipCalculator;
